<template>

<div ref="modal" class="modal fade" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1">
  <div class="modal-dialog modal-xl modal-dialog-scrollable">
    <VForm v-slot="{ errors, handleReset }" @submit="onSubmit" class="modal-content border-0">
      <div class="modal-header bg-dark">
        <h5 class="modal-title text-light" id="productModalLabel">
          <span v-if="isNew">新增產品</span>
          <span v-else>編輯產品</span>
        </h5>
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"
                @click="handleReset()"></button>
      </div>
      <div class="modal-body">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-4">
              <div class="mb-5">
                <label for="imageUrl" class="form-label">主要圖片<span class="text-danger ms-1">*</span></label>
                <div class="position-relative mb-1">
                  <VField type="text" name="imageUrl" id="imageUrl" class="form-control" placeholder="請輸入圖片連結"
                          rules="required" v-model="tempProduct.imageUrl" :class="{'border-danger': errors['imageUrl']}"
                  ></VField>
                  <div v-if="errors['imageUrl']" class="position-absolute top-50 end-0 translate-middle-y px-3 pb-1">
                    <span class="material-icons-outlined text-danger align-middle">error_outline</span>
                  </div>
                </div>
                <ErrorMessage name="imageUrl" class="d-block mb-0 text-danger"></ErrorMessage>
                <form>
                  <label for="uploadImageUrl" class="form-label mt-3 mb-1">或上傳圖片</label>
                  <label for="uploadImageUrl" class="form-label mb-1 btn btn-outline-secondary w-100 position-relative">選擇圖片
                    <input type="file" id="uploadImageUrl" class="opacity-0 position-absolute start-0"
                            @change="previewUpload($event)"
                    >
                  </label>
                  <!-- 預覽圖 -->
                  <img v-if="previewImg.url" :src="previewImg.url" :alt="previewImg.alt" class="d-block mb-1 w-100">
                  <div :class="{'spinner': isLoading }" >
                    <button type="button" class="btn btn-secondary w-100"
                            @click="uploadImg" :disabled="isDisabled">確定上傳</button>
                  </div>
                </form>
                <img v-if="tempProduct.imageUrl" :src="tempProduct.imageUrl" alt="圖片" class="w-100">
              </div>
              <div>
                <h3 class="mb-3">多圖新增</h3>
                <div v-for="(url, i) in tempProduct.imagesUrl" :key="url">
                  <input type="text" name="imagesUrl" class="form-control mb-2" placeholder="請輸入圖片連結"
                          v-model="tempProduct.imagesUrl[i]">
                  <img class="mb-2 w-100" v-show="url" :src="url" alt="圖片">
                  <button type="button" class="btn btn-outline-danger w-100" @click="tempProduct.imagesUrl.splice(i, 1)">刪除圖片</button>
                  <hr class="my-4">
                </div>
                <button type="button" class="btn btn-outline-primary w-100" @click="tempProduct.imagesUrl.push('')">新增更多圖片</button>
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
                            rules="required|min_value:0" v-model.number="tempProduct.origin_price"
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
                            rules="required|min_value:0" v-model.number="tempProduct.price" :class="{'border-danger': errors['price']}"
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
        <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal"
                @click="handleReset()">取消</button>
        <button type="submit" class="btn btn-primary">確認</button>
      </div>
    </VForm>
  </div>
</div>

</template>

<script>
import modalMixin from '../mixins/modalMixin.vue';
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
      tempProduct: this.temp,
      previewImg: {
        url: '',
        alt: ''
      },
      imgFile: {},
      isLoading: false,
      isDisabled: false
    }
  },
  watch: {
    temp(newVal){
      this.tempProduct = newVal
    }
  },
  methods: {
    onSubmit(values){
      this.$emit('updateProd', this.tempProduct, this.tempProduct.id)
    },
    previewUpload($event){
      this.file = $event.target.files[0]
      this.previewImg.url = URL.createObjectURL($event.target.files[0])
      this.previewImg.alt = $event.target.files[0].name;
    },
    uploadImg(){
      this.isLoading = true;
      this.isDisabled = true;

      const formData = new FormData();
      formData.append('file-to-upload', this.imgFile);

      const { VITE_API, VITE_API_PATH } = import.meta.env
      const url = `${VITE_API}/api/${VITE_API_PATH}/admin/upload`
      
      this.$http.post(url, formData)
      .then(res => {
        this.previewImg = {}
        tempProduct.imageUrl = res.data.imageUrl;
        alert('成功上傳圖片');
      })
      .catch(err => {
        alert(`圖片上傳失敗，錯誤代碼：${err.response.status}`)
      })
      .finally(() => {
        this.isLoading = false;
        this.isDisabled = false;
      })
    }
  }
}


</script>
