
import api from './apiConfig.js';

let productModal = null;
let productDelModal = null;

const app = Vue.createApp({
  data(){
    return {
      products: [],
      isNew: false,
      tempProduct: {
        imagesUrl: []
      },
      invalid: {},
    }
  },
  methods: {
    checkAdmin(){
      const url = `${api.auth.base}/${api.auth.check}`;
      axios.post(url)
      .then(res => {
        this.getProducts();
      })
      .catch(err => {
        window.location = 'login.html';
        alert(err.response.data.message);
      })
    },
    getProducts(){
      const url = `${api.apiBase}/admin/${api.paths.pageProducts}`;
      axios(url)
        .then(res => {
          this.products = res.data.products;
        })
        .catch(err => {
          console.log(err);
          alert(`${err.response.data.message}，錯誤代碼：${err.response.status}`)
        })
    },
    // 單個欄位驗證，以 blur 事件觸發
    validator(e){
      const id = e.target.getAttribute('id');

      if (id === 'price' || id === 'origin_price'){
        if (typeof(this.tempProduct[id]) === 'undefined'){
          this.invalid[id] = true;
        } else if (typeof(this.tempProduct[id]) !== 'number'){
          this.invalid[id] = '非數字';
        } else {
          this.invalid[id] = false
        }
      } else {
        e.target.value ? this.invalid[id] = false : this.invalid[id] = true;
      }
    },
    addProduct(){
      // 欄位驗證（imagesUrl、is_enable 以外為必填）

      // 必填中，沒輸入過也沒點擊過的欄位，全部 invalid true
      Object.keys(this.invalid).forEach(key => {
        if (this.tempProduct[key] === undefined && this.invalid[key] === false){
          this.invalid[key] = true;
        }
      });

      // 不應空白而空白的欄位
      if (Object.values(this.invalid).includes(true)){
        alert('欄位不得為空');
        return
      }

      // 應為數字但不是數字的欄位
      if (Object.values(this.invalid).includes('非數字')){
        alert('原價、售價 欄位請輸入數字');
        return
      }

      // 除去空的圖片
      this.tempProduct.imagesUrl = this.tempProduct.imagesUrl.filter(item => item !== '')

      // 請求
      const http = this.isNew ? 'post' : 'put';
      const pathEnd = this.isNew ? '' : `/${this.tempProduct.id}`;
      const url = `${api.apiBase}/admin/${api.paths.product}${pathEnd}`;
      const requestData = { data: this.tempProduct };
      
      axios[http](url, requestData)
      .then(res => {
        alert(res.data.message)
        this.getProducts();
        productModal.hide();
      })
      .catch(err => {
        alert(`產品建立失敗，錯誤代碼：${err.response.status}`)
      })
    },
    // 根據不同用途的 modal 內容做初始化
    openModal(type, item){
      if (type === 'new'){
        this.invalid = {
          title: false,
          category: false,
          origin_price: false,
          price: false,
          unit: false,
          description: false,
          content: false,
          imageUrl: false
        };
        this.isNew = true;
        this.tempProduct = {};
        this.tempProduct.imagesUrl = [];
        productModal.show();
      } else if (type === 'edit'){
        this.invalid = {};
        this.isNew = false;
        this.tempProduct = JSON.parse(JSON.stringify(item));
        if (!this.tempProduct.imagesUrl){
          this.tempProduct.imagesUrl = [];
        }        
        productModal.show();
      } else if (type === 'del'){
        productDelModal.show();
        this.tempProduct = JSON.parse(JSON.stringify(item));
      }
    },
    delProduct(id){
      const url = `${api.apiBase}/admin/${api.paths.product}/${id}`;

      axios.delete(url)
      .then(res => {
        alert(res.data.message);
        productDelModal.hide();
        this.getProducts();
      })
      .catch(err => {
        alert(`${err.response.data.message}，錯誤代碼：${err.response.status}`);
      })
    }
  },
  created(){
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)ccToken\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    axios.defaults.headers.common['Authorization'] = token;

    this.checkAdmin();
  },
  mounted(){
    productModal = new bootstrap.Modal(document.querySelector('#productModal'));
    productDelModal = new bootstrap.Modal(document.querySelector('#productDelModal'));
  }
}).mount('#app')