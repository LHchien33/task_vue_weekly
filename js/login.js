/* 需求
使用者可以從登入頁面登入，並轉到後台商品頁面
使用者若無登入直接進入商品頁面，會被導回登入頁面
使用者可以查看產品列表
使用者可以點擊單一產品，查看詳細資訊
*/

// 取得使用者輸入資料
// 發送登入請求
// 成功 -> 儲存 token -> 轉址
// 失敗 -> 顯示失敗訊息

import api from './apiConfig.js';

const app = Vue.createApp({
  data(){
    return {
      userEmail: '',
      password: '',
      invalid: {
        email: false,
        password: false
      }
    }
  },
  methods: {
    login(){
      const url = `${api.auth.base}/${api.auth.login}`;
      const data = {
        username: this.userEmail,
        password: this.password
      };
      
      this.userEmail ? this.invalid.email = false : this.invalid.email = true;
      this.password ? this.invalid.password = false : this.invalid.password = true;
      
      if(this.userEmail === '' || this.password === ''){
        alert('欄位不得為空');
        return
      }

      axios.post(url, data)
        .then(res => {
          const { token, expires }  = res.data;
          document.cookie = `ccToken = ${token}; expires = ${new Date(expires)};`;
          window.location = 'products.html';
        })
        .catch(err => alert(`${err.response.data.message}，請確認帳號密碼是否正確輸入`))
    }
  }
}).mount('#app')