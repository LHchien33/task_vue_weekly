import api from '../js/apiConfig.js';
import userProductModal from './userProductModal.js';

VeeValidate.defineRule('email', VeeValidateRules['email']);
VeeValidate.defineRule('required', VeeValidateRules['required']);
VeeValidate.defineRule('min', VeeValidateRules['min']);
VeeValidate.defineRule('numeric', VeeValidateRules['numeric']);

VeeValidateI18n.loadLocaleFromURL('./zh_TW.json');

VeeValidate.configure({
  generateMessage: VeeValidateI18n.localize('zh_TW'),
});

const app = Vue.createApp({
  components: {
    userProductModal
  },
  data(){
    return {
      products: [],
      tempProd: {},
      cartsInfo: {
        carts: []
      },
      isLoading: true,
      isActive: '',
      isDisabled: false,
    }
  },
  methods: {
    getProducts(){
      const url = `${api.apiBase}/${api.paths.allProducts}`;
      axios.get(url)
      .then(res => {
        this.products = res.data.products;
        setTimeout(() => this.isLoading = false, 500)
      })
      .catch(err => {
        alert(`${err.response.data.message}，錯誤代碼：${err.response.status}`);
      })
    },
    getCarts(){
      const url = `${api.apiBase}/${api.paths.cart}`;
      axios.get(url)
      .then(res => {
        this.cartsInfo = res.data.data;
      })
      .catch(err => {
        alert(`${err.response.data.message}，錯誤代碼：${err.response.status}`);
      })
    },
    viewProdDetail(prod){
      this.tempProd = {...prod};
      this.$refs.prodModal.modalShow();
      this.$refs.prodModal.selectNum = '';
    },
    updateCart(item, qty = 1){
      if(qty === 0 || qty === ''){
        alert('數量須為 0 以上的數字')
        return
      }

      this.isActive = item.id;
      this.isDisabled = true;
      
      const method = item.product_id ? 'put' : 'post';
      let pathEnd = '';
      let dataId = item.id;
      let text = '加入';

      if(method === 'put'){
        pathEnd = item.id
        dataId = item.product_id
        text = '更新'
      }
      
      const url = `${api.apiBase}/${api.paths.cart}/${pathEnd}`;
      const requestData = {
        "data": {
          "product_id": dataId,
          "qty": qty
        }
      }

      axios[method](url, requestData)
      .then(res => {
        this.getCarts();
        this.$refs.prodModal.modalHide();
        setTimeout(() => {
          this.initBtnState();
          alert(`成功${text}購物車`);
        }, 500);
      })
      .catch(err => {
        this.initBtnState();
        alert(`${err.response.data.message}，錯誤代碼：${err.response.status}`);
      })
    },
    delCart(type, id){
      let cartAPI = api.paths.cart;
      this.isActive = id;

      if(type === 'all'){
        id = ''
        cartAPI = api.paths.delWholeCart;
        this.isActive = 'all';
      }
      this.isDisabled = true;

      const url = `${api.apiBase}/${cartAPI}/${id}`;
      axios.delete(url)
      .then(res => {
        this.initBtnState();
        this.getCarts();
        alert('已刪除品項');
      })
      .catch(err => {
        this.initBtnState();
        alert(`${err.response.data.message}，錯誤代碼：${err.response.status}`);
      })
    },
    initBtnState(){
      this.isDisabled = false;
      this.isActive = '';
    },
    onSubmit(values, { resetForm }){
      if(this.cartsInfo.carts.length === 0){
        alert('目前購物車沒有商品！')
        return
      }

      this.isDisabled = true;
      this.isActive = 'submit'
      const url = `${api.apiBase}/order`;
      const requestData = {
        "data": {
          "user": {
            "name": values['姓名'],
            "email": values['信箱'],
            "tel": values['電話'],
            "address": values['地址']
          },
          "message": values['留言'] ? values['留言'] : ''
        }
      }

      axios.post(url, requestData)
      .then(res => {
        this.getCarts();
        this.initBtnState();
        resetForm();
        alert(`成功建立訂單，訂單編號：${res.data.orderId}`)
      })
      .catch(err => {
        this.initBtnState();
        alert(`${err.response.data.message}，錯誤代碼：${err.response.status}`);
      })
      
    }
  },
  mounted(){
    this.getProducts();
    this.getCarts();
  }
})


app.use(VueLoading.LoadingPlugin);

app.component('loading', VueLoading.Component)
app.component('VForm', VeeValidate.Form);
app.component('VField', VeeValidate.Field);
app.component('ErrorMessage', VeeValidate.ErrorMessage);

app.mount('#app');