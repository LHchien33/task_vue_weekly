<template>
  <header>    
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container">
        <RouterLink to="/admin/products" class="navbar-brand">後台</RouterLink>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav w-100">
            <li class="nav-item">
              <RouterLink to="/admin/products" class="nav-link active">產品管理</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/admin/orders" class="nav-link active">訂單管理</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="" @click="logout" class="nav-link active">登出</RouterLink>
            </li>
            <li class="nav-item ms-lg-auto">
              <a href="https://lhchien33.github.io/task_vue_weekly/week5/index.html" class="nav-link active">購物車</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>

  <RouterView v-if="status"/>

</template>

<script>
export default {
  data(){
    return{
      status: false
    }
  },
  methods: {
    logout(){
      const loader = this.$loading.show();
      const url = `${import.meta.env.VITE_API}/logout`

      this.$http.post(url)
      .then(res => {
        this.$router.push('/login')
        setTimeout(() => alert(res.data.message), 500)
      })
      .catch(err => {
        alert(`登出失敗，錯誤代碼：${err.response.status}`);
      })
      .finally(() => loader.hide())
    }
  },
  mounted(){
    // check authorization
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)chienToken\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    this.$http.defaults.headers.common.Authorization = token;

    const { VITE_API } = import.meta.env;
    const url = `${VITE_API}/api/user/check`

    this.$http.post(url)
    .then(res => {
      this.status = true;
    })
    .catch(err => {
      alert(`驗證錯誤，請先登入`);
      this.$router.push('/login')
    })
  }
}
</script>