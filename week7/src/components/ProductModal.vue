<template>

<div ref="modal" class="modal fade" data-bs-keyboard="false" tabindex="-1">
  <div class="modal-dialog modal-xl modal-dialog-scrollable">
    <VForm ref="mainForm" class="modal-content border-0"
            v-slot="{ errors }" @submit="onSubmit" @invalid-submit="onInvalidSubmit" >
      <div class="modal-header bg-dark">
        <h5 class="modal-title text-light" id="productModalLabel">
          <span v-if="isNew">新增產品</span>
          <span v-else>編輯產品</span>
        </h5>
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-4">
              <div class="mb-5">
                <h3 class="mb-0 fs-5">主要圖片<span class="text-danger ms-1">*</span></h3>
                <label for="imageUrl" class="form-label mt-2 mb-1">請輸入圖片連結</label>
                <div class="position-relative mb-1">
                  <VField type="text" name="imageUrl" id="imageUrl" class="form-control" placeholder="請輸入圖片連結"
                          rules="required" v-model="tempProduct.imageUrl" :class="{'border-danger': errors['imageUrl']}"
                  ></VField>
                  <div v-if="errors['imageUrl']" class="position-absolute top-50 end-0 translate-middle-y px-3 pb-1">
                    <span class="material-icons-outlined text-danger align-middle">error_outline</span>
                  </div>
                </div>
                <ErrorMessage name="imageUrl" class="d-block mb-0 text-danger"></ErrorMessage>
                <!-- 上傳圖片 -->
                <form>
                  <label for="uploadImageUrl" class="form-label mt-2 mb-1">或上傳圖片</label>
                  <label v-if="!previewImg.url" for="uploadImageUrl" class="form-label mb-1 btn btn-outline-secondary w-100 position-relative">選擇圖片
                    <input type="file" id="uploadImageUrl" class="opacity-0 position-absolute start-0"
                            @change="previewUpload($event)"
                    >
                  </label>
                  <!-- 預覽圖 -->
                  <div v-if="previewImg.url" class="position-relative">
                    <img :src="previewImg.url" :alt="previewImg.alt" class="d-block mb-1 w-100">
                    <span class="position-absolute top-0 badge text-bg-light opacity-50 fs-6 m-1">上傳預覽</span>
                    <span class="position-absolute top-0 start-100 translate-middle rounded-circle badge text-bg-danger pointer"
                          @click="clearImg('preview')"
                    >x</span>
                  </div>
                  <div :class="{'spinner': isLoading }" v-if="previewImg.url">
                    <button type="button" class="btn btn-secondary w-100"
                            @click="uploadImg" :disabled="isDisabled">確定上傳</button>
                  </div>
                </form>
                <!-- 主圖 -->
                <div v-if="tempProduct.imageUrl && !previewImg.url" class="position-relative">
                    <img :src="tempProduct.imageUrl" alt="主要圖片" class="d-block w-100 my-3">
                    <span class="position-absolute top-0 badge text-bg-light opacity-50 fs-6 m-1">主要圖片</span>
                    <span class="position-absolute top-0 start-100 translate-middle rounded-circle badge text-bg-danger pointer"
                          @click="clearImg('link')"
                    >x</span>
                </div>
              </div>
              <div>
                <h3 class="mb-3">多圖新增</h3>
                <template v-for="(url, i) in tempProduct.imagesUrl" :key="url">
                  <input type="text" name="imagesUrl" class="form-control mb-2" placeholder="請輸入圖片連結"
                          v-model="tempProduct.imagesUrl[i]">
                  <div v-if="url" class="position-relative my-3">
                    <img class="w-100" :src="url" :alt="`多圖-0${i+1}`">
                    <span class="position-absolute top-0 start-100 translate-middle rounded-circle badge text-bg-danger pointer"
                          @click="tempProduct.imagesUrl.splice(i, 1)"
                    >x</span>
                  </div>
                </template>
                <button type="button" class="btn btn-outline-primary w-100"
                        @click="tempProduct.imagesUrl.push('')">新增更多圖片</button>
              </div>
            </div>
            <div class="col-md-8">
              <div class="mb-3">
                <label for="title" class="form-label">標題<span class="text-danger ms-1">*</span></label>
                <div class="position-relative mb-1">
                  <VField type="text" name="title" id="title" class="form-control" placeholder="請輸入標題"
                          rules="required" v-model="tempProduct.title" :class="{'border-danger': errors['title']}"
                  ></VField>
                  <div v-if="errors['title']" class="position-absolute top-50 end-0 translate-middle-y px-3 pb-1">
                    <span class="material-icons-outlined text-danger align-middle">error_outline</span>
                  </div>
                </div>
                <ErrorMessage name="title" class="d-block mb-0 text-danger"></ErrorMessage>
              </div>
              <div class="mb-3 row">
                <div class="col">
                  <label for="category" class="form-label">分類<span class="text-danger ms-1">*</span></label>
                  <div class="position-relative mb-1">
                    <VField type="text" name="category" id="category" class="form-control" placeholder="請輸入分類"
                            rules="required" v-model="tempProduct.category" :class="{'border-danger': errors['category']}"
                    ></VField>
                    <div v-if="errors['category']" class="position-absolute top-50 end-0 translate-middle-y px-3 pb-1">
                      <span class="material-icons-outlined text-danger align-middle">error_outline</span>
                    </div>
                  </div>
                  <ErrorMessage name="category" class="d-block mb-0 text-danger"></ErrorMessage>
                </div>
                <div class="col">
                  <label for="unit" class="form-label">單位<span class="text-danger ms-1">*</span></label>
                  <div class="position-relative mb-1">
                    <VField type="text" name="unit" id="unit" class="form-control" placeholder="請輸入單位"
                            rules="required" v-model="tempProduct.unit" :class="{'border-danger': errors['unit']}"
                    ></VField>
                    <div v-if="errors['unit']" class="position-absolute top-50 end-0 translate-middle-y px-3 pb-1">
                      <span class="material-icons-outlined text-danger align-middle">error_outline</span>
                    </div>
                  </div>
                  <ErrorMessage name="unit" class="d-block mb-0 text-danger"></ErrorMessage>
                </div>
              </div>
              <div class="mb-3 row">
                <div class="col">
                  <label for="origin_price" class="form-label">原價<span class="text-danger ms-1">*</span></label>
                  <div class="position-relative mb-1">
                    <VField type="text" name="origin_price" id="origin_price" class="form-control" placeholder="請輸入原價"
                            rules="required|numeric|min_value:0" v-model.number="tempProduct.origin_price"
                            :class="{'border-danger': errors['origin_price']}"
                    ></VField>
                    <div v-if="errors['origin_price']" class="position-absolute top-50 end-0 translate-middle-y px-3 pb-1">
                      <span class="material-icons-outlined text-danger align-middle">error_outline</span>
                    </div>
                  </div>
                  <ErrorMessage name="origin_price" class="d-block mb-0 text-danger"></ErrorMessage>
                </div>
                <div class="col">
                  <label for="price" class="form-label">售價<span class="text-danger ms-1">*</span></label>
                  <div class="position-relative mb-1">
                    <VField type="text" name="price" id="price" class="form-control" placeholder="請輸入售價"
                            rules="required|numeric|min_value:0" v-model.number="tempProduct.price" :class="{'border-danger': errors['price']}"
                    ></VField>
                    <div v-if="errors['price']" class="position-absolute top-50 end-0 translate-middle-y px-3 pb-1">
                      <span class="material-icons-outlined text-danger align-middle">error_outline</span>
                    </div>
                  </div>
                  <ErrorMessage name="price" class="d-block mb-0 text-danger"></ErrorMessage>
                </div>
              </div>
              <div class="mb-3">
                <label for="description" class="form-label">產品描述<span class="text-danger ms-1">*</span></label>
                <div class="position-relative mb-1">
                  <VField as="textarea" name="description" id="description" rows="3" class="form-control" placeholder="請輸入產品描述"
                          rules="required" v-model="tempProduct.description" :class="{'border-danger': errors['description']}"
                  ></VField>
                  <div v-if="errors['description']" class="position-absolute top-50 end-0 translate-middle-y px-3 pb-1">
                    <span class="material-icons-outlined text-danger align-middle">error_outline</span>
                  </div>
                </div>
                <ErrorMessage name="description" class="d-block mb-0 text-danger"></ErrorMessage>
              </div>
              <div class="mb-3">
                <label for="content" class="form-label">說明內容<span class="text-danger ms-1">*</span></label>
                <div class="position-relative mb-1">
                  <VField as="textarea" name="content" id="content" rows="3" class="form-control" placeholder="請輸入說明內容"
                          rules="required" v-model="tempProduct.content" :class="{'border-danger': errors['content']}"
                  ></VField>
                  <div v-if="errors['content']" class="position-absolute top-50 end-0 translate-middle-y px-3 pb-1">
                    <span class="material-icons-outlined text-danger align-middle">error_outline</span>
                  </div>
                </div>
                <ErrorMessage name="content" class="d-block mb-0 text-danger"></ErrorMessage>
              </div>
              <div class="form-check">
                <input type="checkbox" name="is_enabled" id="is_enable" class="form-check-input"
                        v-model="tempProduct.is_enabled">
                <label class="form-check-label" for="is_enable">是否啟用</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">取消</button>
        <button type="submit" class="btn btn-primary">確認</button>
      </div>
    </VForm>
  </div>
</div>

</template>

<script>
import modalMixin from '@/mixins/modalMixin.vue';
import { configure } from 'vee-validate';
import { localize } from '@vee-validate/i18n';

configure({
  generateMessage: localize('zh_TW',{
    names: {
      imageUrl: '主要圖片',
      title: '標題',
      category: '分類',
      unit: '單位',
      'origin_price': '原價',
      price: '售價',
      description: '產品描述',
      content: '說明內容'
    }
  }),
});

export default {
  mixins: [modalMixin],
  props: ['temp', 'isNew'],
  emits: ['updateProd'],
  data(){
    return {
      modal: {},
      tempProduct: {},
      previewImg: {},
      imgFile: {},
      isLoading: false,
      isDisabled: false,
    }
  },
  watch: {
    temp(newVal){
      newVal.imagesUrl ?
      newVal.imagesUrl = newVal.imagesUrl.filter(url => url !== '') :
      newVal.imagesUrl = [];
      
      this.tempProduct = newVal;
      this.previewImg = {}
    }
  },
  methods: {
    onSubmit(values){
      this.tempProduct.imagesUrl = this.tempProduct.imagesUrl.filter(url => url !== '');
      this.$emit('updateProd', this.tempProduct, this.tempProduct.id);
    },
    onInvalidSubmit({values, errors}){
      const firstError = Object.keys(errors)[0];
      const targetElement = document.querySelector(`#${firstError}`);
      targetElement.scrollIntoView({
        block: "center",
        behavior: "smooth"
      })
      setTimeout(() => alert(`${errors[firstError]}`), 500);
    },
    resetForm(){
      this.$refs.mainForm.resetForm();
    },
    previewUpload(e){
      this.imgFile = e.target.files[0];
      this.previewImg.url = URL.createObjectURL(e.target.files[0]);
      this.previewImg.alt = e.target.files[0].name;
    },
    clearImg(type){
      if (type === 'preview'){
        this.previewImg = {};
      } else if (type === 'link'){
        this.tempProduct.imageUrl = '';
      }
    },
    uploadImg(){
      this.isLoading = true;
      this.isDisabled = true;

      const formData = new FormData();
      formData.append('file-to-upload', this.imgFile);

      const { VITE_API, VITE_API_PATH } = import.meta.env;
      const url = `${VITE_API}/api/${VITE_API_PATH}/admin/upload`;
      
      this.$http.post(url, formData)
      .then(res => {
        this.previewImg = {};
        this.tempProduct.imageUrl = res.data.imageUrl;
        alert('成功上傳圖片');
      })
      .catch(err => {
        alert(`圖片上傳失敗，錯誤代碼：${err.response.status }`);
      })
      .finally(() => {
        this.isLoading = false;
        this.isDisabled = false;
      })
    }
  }
}


</script>
