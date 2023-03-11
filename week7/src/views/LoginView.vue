<template>
  <div class="d-flex vh-100 justify-content-center align-items-center">
    <div class="container text-center">
      <div class="row justify-content-center">
        <h1 class="h3 mb-4">請先登入</h1>
        <div class="col-md-7 col-lg-5">
          <VForm v-slot="{ errors }" @submit="onSubmit">
            <div class="mb-3">
              <div class="form-floating">
                <VField name="username" type="email" id="userEmail" placeholder="Email address"
                        rules="required|email" :class="{'border-danger': errors['username'], 'form-control': true }"></VField>
                <label for="userEmail" class="form-label">帳號 Email</label>
                <div v-if="errors['username']" class="position-absolute top-50 start-100 translate-middle-y p-3">
                  <span class="material-icons-outlined text-danger align-middle">error_outline</span>
                </div>
              </div>
              <ErrorMessage name="username" class="d-block text-danger py-1 text-start"></ErrorMessage>
            </div>
            <div class="mb-4">
              <div class="form-floating">
                <VField name="password" type="password" id="userPassword" placeholder="Password"
                        rules="required" :class="{'border-danger': errors['password'], 'form-control': true }"></VField>
                <label for="userPassword" class="form-label">密碼 Password</label>
                <div v-if="errors['password']" class="position-absolute top-50 start-100 translate-middle-y p-3">
                  <span class="material-icons-outlined text-danger align-middle">error_outline</span>
                </div>
              </div>
              <ErrorMessage name="password" class="d-block text-danger py-1 text-start"></ErrorMessage>
            </div>
            <button type="submit" class="btn btn-primary w-100 fs-5">登入</button>
          </VForm>
        </div>
      </div>
      <p class="text-secondary mt-5">&copy; 2023 LHchien.</p>
    </div>
  </div>
</template>

<script>
import { configure } from 'vee-validate';
import { localize } from '@vee-validate/i18n';

configure({
  generateMessage: localize('zh_TW',{
    names: {
      username: "帳號",
      password: '密碼',
    }
  }),
});

export default {
  methods: {
    onSubmit(values){
      const loader = this.$loading.show();
      const { VITE_API } = import.meta.env;
      const url = `${VITE_API}/admin/signin`;

      this.$http.post(url, values)
      .then(res => {
        const { token, expired } = res.data;
        document.cookie = `chienToken = ${token}; expires = ${new Date(expired)};`;
        this.$router.push('/admin/products');
      })
      .catch(err => {
        alert(`登入失敗，錯誤代碼：${err.response.status}`);
      })
      .finally(() => loader.hide())
    }
  }
}
</script>