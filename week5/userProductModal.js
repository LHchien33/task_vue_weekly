const template = `
<div class="modal fade" ref="modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-xl" role="document">
    <div class="modal-content border-0">
      <div class="modal-header bg-dark text-white">
        <h5 class="modal-title" id="exampleModalLabel">
          <span>{{ tempProd.title }}</span>
        </h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="row">
          <div class="col-sm-5" style="max-height: 500px">
            <img class="object-fit-cover" :src="tempProd.imageUrl" alt="">
          </div>
          <div class="col-sm-7">
            <span class="badge bg-primary rounded-pill mb-3">{{ tempProd.category }}</span>
            <p>商品描述：{{ tempProd.description }}</p>
            <p>商品內容：{{ tempProd.content }}</p>
            <del class="h6">原價 {{ tempProd.origin_price }} 元</del>
            <div class="h5">現在只要 {{ tempProd.price }} 元</div>
            <div>
              <div class="input-group">
                <select class="form-select" v-model.number="selectNum">
                  <option value="" selected disabled>請選擇數量</option>
                  <option :value="num" v-for="num in 10" :key="num">{{ num }}</option>
                </select>
                <button type="button" class="btn btn-primary" @click="$emit('addToCart',tempProd, selectNum)" :disabled="isDisabled">
                  加入購物車
                  <i class="fas fa-spinner fa-pulse" v-if="isDisabled"></i>
                </button>
              </div>
            </div>
          </div>
          <!-- col-sm-6 end -->
        </div>
      </div>
    </div>
  </div>
</div>
`

export default {
  props: ['tempProd', 'isDisabled'],
  emits: ['addToCart'],
  template,
  data(){
    return {
      modal: {},
      selectNum: '',
    }
  },
  methods: {
    modalShow(){
      this.modal.show();
    },
    modalHide(){
      this.modal.hide()
    }
  },
  mounted(){
    this.modal = new bootstrap.Modal(this.$refs.modal)
  }
}