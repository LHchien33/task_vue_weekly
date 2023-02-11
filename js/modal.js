const modalUpdateTemplate = `
<div class="modal fade" id="productModal" data-bs-keyboard="false" tabindex="-1">
  <div class="modal-dialog modal-xl modal-dialog-scrollable">
    <div class="modal-content border-0">
      <div class="modal-header bg-dark">
        <h5 class="modal-title text-light" id="productModalLabel">
          <span v-if="isNew">新增產品</span>
          <span v-else>編輯產品</span>
        </h5>
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="container-fluid">
          <form class="row">
            <div class="col-md-4">
              <div class="mb-5">
                <label for="imageUrl" class="form-label">主要圖片<span class="text-danger ms-1">*</span></label>
                <div class="position-relative mb-2">
                  <input type="text" id="imageUrl" v-model="tempProduct.imageUrl" @blur="validator" class="form-control" :class="{ 'border-danger': invalid.imageUrl }" placeholder="請輸入圖片連結">
                  <div v-show="invalid.imageUrl" class="position-absolute top-50 end-0 translate-middle-y px-3 pb-1">
                    <span class="material-icons-outlined text-danger align-middle">error_outline</span>
                  </div>
                </div>
                <img v-show="tempProduct.imageUrl" :src="tempProduct.imageUrl" alt="圖片">
              </div>
              <div>
                <h3 class="mb-3">多圖新增</h3>
                <div v-for="(url, i) in tempProduct.imagesUrl" :key="url">
                  <input type="text" v-model="tempProduct.imagesUrl[i]" class="form-control mb-2" placeholder="請輸入圖片連結">
                  <img class="mb-2" v-show="url" :src="url" alt="圖片">
                  <button type="button" class="btn btn-outline-danger w-100" @click="tempProduct.imagesUrl.splice(i, 1)">刪除圖片</button>
                  <hr class="my-4">
                </div>
                <button type="button" class="btn btn-outline-primary w-100" @click="tempProduct.imagesUrl.push('')">新增更多圖片</button>
              </div>
            </div>
            <div class="col md-8">
              <div class="mb-3">
                <label for="title" class="form-label">標題<span class="text-danger ms-1">*</span></label>
                <div class="position-relative mb-2">
                  <input type="text" id="title" v-model="tempProduct.title" @blur="validator" class="form-control" :class="{ 'border-danger': invalid.title }" placeholder="請輸入標題" >
                  <div v-show="invalid.title" class="position-absolute top-50 end-0 translate-middle-y px-3 pb-1">
                    <span class="material-icons-outlined text-danger align-middle">error_outline</span>
                  </div>
                </div>
              </div>
              <div class="mb-3 row">
                <div class="col">
                  <label for="category" class="form-label">分類<span class="text-danger ms-1">*</span></label>
                  <div class="position-relative mb-2">
                    <input type="text" id="category" v-model="tempProduct.category" @blur="validator" class="form-control" :class="{ 'border-danger': invalid.category }" placeholder="請輸入分類">
                    <div v-show="invalid.category" class="position-absolute top-50 end-0 translate-middle-y px-3 pb-1">
                      <span class="material-icons-outlined text-danger align-middle">error_outline</span>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <label for="unit" class="form-label">單位<span class="text-danger ms-1">*</span></label>
                  <div class="position-relative mb-2">
                    <input type="text" id="unit" v-model="tempProduct.unit" @blur="validator" class="form-control" :class="{ 'border-danger': invalid.unit }" placeholder="請輸入單位">
                    <div v-show="invalid.unit" class="position-absolute top-50 end-0 translate-middle-y px-3 pb-1">
                      <span class="material-icons-outlined text-danger align-middle">error_outline</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="mb-3 row">
                <div class="col">
                  <label for="origin_price" class="form-label">原價<span class="text-danger ms-1">*</span></label>
                  <div class="position-relative mb-2">
                    <input type="number" id="origin_price" v-model.number="tempProduct.origin_price" @blur="validator" class="form-control" :class="{ 'border-danger': invalid.origin_price }" placeholder="請輸入原價">
                    <div v-show="invalid.origin_price" class="position-absolute top-50 end-0 translate-middle-y px-3 pb-1">
                      <span class="material-icons-outlined text-danger align-middle">error_outline</span>
                    </div>
                  </div>
                  <p v-show="tempProduct.origin_price < 0" class="mb-0 text-danger">請輸入 0 以上（含）的數字</p>
                </div>
                <div class="col">
                  <label for="price" class="form-label">售價<span class="text-danger ms-1">*</span></label>
                  <div class="position-relative mb-2">
                    <input type="number" id="price" v-model.number="tempProduct.price" @blur="validator" class="form-control" :class="{ 'border-danger': invalid.price }" placeholder="請輸入售價">
                    <div v-show="invalid.price" class="position-absolute top-50 end-0 translate-middle-y px-3 pb-1">
                      <span class="material-icons-outlined text-danger align-middle">error_outline</span>
                    </div>
                  </div>
                  <p v-show="tempProduct.price < 0 " class="mb-0 text-danger">請輸入 0 以上（含）的數字</p>
                </div>
              </div>
              <div class="mb-3">
                <label for="description" class="form-label">產品描述<span class="text-danger ms-1">*</span></label>
                <div class="position-relative mb-2">
                  <textarea id="description" v-model="tempProduct.description" @blur="validator" rows="3" class="form-control" :class="{ 'border-danger': invalid.description }" placeholder="請輸入產品描述"></textarea>
                  <div v-show="invalid.description" class="position-absolute top-50 end-0 translate-middle-y px-3 pb-1">
                    <span class="material-icons-outlined text-danger align-middle">error_outline</span>
                  </div>
                </div>
              </div>
              <div class="mb-3">
                <label for="content" class="form-label">說明內容<span class="text-danger ms-1">*</span></label>
                <div class="position-relative mb-2">
                  <textarea id="content" v-model="tempProduct.content" @blur="validator" rows="3" class="form-control" :class="{ 'border-danger': invalid.content }" placeholder="請輸入說明內容"></textarea>
                  <div v-show="invalid.content" class="position-absolute top-50 end-0 translate-middle-y px-3 pb-1">
                    <span class="material-icons-outlined text-danger align-middle">error_outline</span>
                  </div>
                </div>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" v-model="tempProduct.is_enabled" id="is_enable">
                <label class="form-check-label" for="is_enable">是否啟用</label>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">取消</button>
        <button type="button"  @click.prevent="beforeConfirm()" class="btn btn-primary">確認</button>
      </div>
    </div>
  </div>
</div>
`;

const modalDelTemplate = `
<div class="modal fade" id="productDelModal" data-bs-keyboard="false" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content border-0">
      <div class="modal-header bg-danger">
        <h5 class="modal-title text-light" id="productDelModalLabel">刪除產品</h5>
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>是否刪除 <span class="text-danger">{{ tempProduct.title }}</span> 商品（刪除後將無法恢復）</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">取消</button>
        <button type="button" class="btn btn-danger" @click="$emit('del-product', tempProduct.id)">確認刪除</button>
      </div>
    </div>
  </div>
</div>
`;

export const modalUpdate = {
  props: ['temp', 'isNew'],
  emits: ['confirm'],
  data(){
    return {
      tempProduct: this.temp,
      invalid: {}
    }
  },
  template: modalUpdateTemplate,
  watch: {
    // 開啟 modal 時
    temp(newVal){
      this.tempProduct = newVal;      
      this.initInvalid();
    }
  },
  methods: {
    initInvalid(){
      if(this.isNew){
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
      } else {
        this.invalid = {};
      }
    },
    // 單個欄位驗證，以 blur 事件觸發
    validator(e){
      const id = e.target.getAttribute('id');

      if (id === 'price' || id === 'origin_price'){
        if (typeof(this.tempProduct[id]) === 'undefined'){
          this.invalid[id] = true;
        } else if (typeof(this.tempProduct[id]) !== 'number' || this.tempProduct[id] < 0){
          this.invalid[id] = '非合理數字';
        } else {
          this.invalid[id] = false
        }
      } else {
        e.target.value ? this.invalid[id] = false : this.invalid[id] = true;
      }
    },
    // 全部欄位驗證（imagesUrl、is_enable 以外為必填）
    beforeConfirm(){
      const objectKeys = Object.keys(this.invalid);

      // 新增產品，沒輸入過也沒點擊過的欄位，全部 invalid true
      objectKeys.forEach(key => {
        if (this.tempProduct[key] === undefined && this.invalid[key] === false){
          this.invalid[key] = true;
        }
      });

      const objectValues = Object.values(this.invalid);

      // 不應空白而空白的欄位
      if (objectValues.includes(true)){
        alert('欄位不得為空');
        return
      }

      // 不是合理數字的欄位
      if (objectValues.includes('非合理數字')){
        alert('原價/售價 欄位請輸入 0 以上（含）的數字');
        return
      }

      // 除去空的圖片
      this.tempProduct.imagesUrl = this.tempProduct.imagesUrl.filter(item => item !== '')
  
      this.$emit('confirm', this.tempProduct)

    },
  }

};

export const modalDel = {
  props: ['temp'],
  emits: ['del-product'],
  data(){
    return {
      tempProduct: this.temp,
    }
  },
  watch: {
    // 開啟 modal 時
    temp(newVal){
      this.tempProduct = newVal;
    }
  },
  template: modalDelTemplate,
};
