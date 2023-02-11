import api from './apiConfig.js';
import pagi from './pagination.js';
import { modalUpdate, modalDel } from './modal.js';

let productModal = null;
let productDelModal = null;

const app = Vue.createApp({
  components: {
    pagi,
    modalUpdate,
    modalDel
  },
  data(){
    return {
      products: [],
      pagination: {},
      isNew: null,
      tempProduct: {},
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
          this.pagination = res.data.pagination
        })
        .catch(err => {
          console.log(err);
          alert(`${err.response.data.message}，錯誤代碼：${err.response.status}`)
        })
    },
    openModal(type, item){
      if (type === 'new'){
        this.isNew = true;
        this.tempProduct = {};
        this.tempProduct.imagesUrl = [];
        productModal.show();
      } else if (type === 'edit'){
        this.isNew = false;
        this.tempProduct = JSON.parse(JSON.stringify(item));
        if (!this.tempProduct.imagesUrl){
          this.tempProduct.imagesUrl = [];
        }        
        productModal.show();
      } else if (type === 'del'){
        this.tempProduct = JSON.parse(JSON.stringify(item));
        productDelModal.show();
      }
    },
    updateProduct(newProduct){
      // 新增/更新產品請求
      const http = this.isNew ? 'post' : 'put';
      const pathEnd = this.isNew ? '' : `/${newProduct.id}`;
      const url = `${api.apiBase}/admin/${api.paths.product}${pathEnd}`;
      const requestData = { data: newProduct };
      
      axios[http](url, requestData)
      .then(res => {
        setTimeout(() => alert(res.data.message), 500)
        this.getProducts();
        productModal.hide();
      })
      .catch(err => {
        alert(`產品建立失敗，錯誤代碼：${err.response.status}`)
      })
    },
    delProduct(id){
      const url = `${api.apiBase}/admin/${api.paths.product}/${id}`;

      axios.delete(url)
      .then(res => {
        setTimeout(() => alert(res.data.message), 500);
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