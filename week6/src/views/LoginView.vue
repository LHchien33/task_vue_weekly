<script>
export default {
  data(){
    return {
      email: '',
      password: '',
      invalid: {
        email: false,
        password: false
      }
    }
  },
  methods: {
    validator(type){
      if (this[type] === ''){
        this.invalid[type] = true
      } else {
        this.invalid[type] = false
      }
    }
  }
}
</script>

<template>

  <main class="d-flex vh-100">
    <div class="container text-center m-auto">
      <div class="row justify-content-center mb-3">
        <h1 class="h3 mb-4">請先登入</h1>
        <div class="col-10 col-md-5">
          <form>
            <div class="form-floating mb-3">
              <input type="email" id="email" class="form-control" aria-describedby="emailHelp" placeholder="Email address"
                      v-model.trim="email" :class="{'border-danger': invalid.email }" @blur="validator('email')">
              <label for="email" class="form-label">帳號 Email</label>
              <div v-show="invalid.email" class="position-absolute top-50 start-100 translate-middle-y px-3">
                <i class="fas fa-exclamation-circle text-danger fs-5"></i>
              </div>
            </div>
            <div class="form-floating mb-4">
              <input type="password"  id="userPassword" placeholder="Password" class="form-control"
                      v-model.trim="password"  :class="{'border-danger': invalid.password }" @blur="validator('password')">
              <label for="userPassword" class="form-label">密碼 Password</label>
              <div v-show="invalid.password" class="position-absolute top-50 start-100 translate-middle-y px-3">
                <i class="fas fa-exclamation-circle text-danger fs-5"></i>
              </div>
            </div>
            <button type="button" class="btn btn-primary w-100 fs-5">登入</button>
          </form>
        </div>
      </div>
      <RouterLink to="/" class="d-inline-block p-3 text-muted">回首頁</RouterLink>
      <small class="d-block text-muted">&copy; 2023 LHchien.</small>
    </div>
  </main>
  
</template>
