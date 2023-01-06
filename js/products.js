
import api from './apiConfig.js';

const app = Vue.createApp({
  data(){
    return {
      products: [],
      product: {}
    }
  },
  methods: {
    showDetail(item){
      this.product = item;
    },
    getProducts(){
      const url = `${api.apiBase}/admin/${api.paths.pageProducts}`;
      axios(url)
        .then(res => {
          this.products = res.data.products;
        })
        .catch(err => console.log(err))
    },
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
    }
  },
  created(){
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)ccToken\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    axios.defaults.headers.common['Authorization'] = token;

    this.checkAdmin();
  }
}).mount('#app')