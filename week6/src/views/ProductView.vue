<script>
export default {
  data(){
    return {
      product: {},
      selectNum: '',
      isDisabled: false,
    }
  },
  mounted(){
    const loader = this.$loading.show({
          container: this.$refs.productLoading,
        });

    const { id } = this.$route.params;
    const url = `${import.meta.env.VITE_API}api/${import.meta.env.VITE_APIPATH}/product/${id}`;

    this.$http.get(url)
    .then(res => {
      this.product = res.data.product;
    })
    .catch(err => {
      alert(`${err.response.data.message}，錯誤代碼：${err.response.status}`);
    })
    .finally(() => loader.hide() )
  }
}
</script>

<template>
  
  <div ref="productLoading" class="vl-parent container py-5">
    <main class="row justify-content-center">
      <div class="col-md-4">
        <img v-if="product.imageUrl" :src="product.imageUrl" class="object-fit-cover mb-3" alt="" style="max-height: 400px;">
      </div>
      <div class="col-md-5">
        <h2>{{ product.title }}</h2>
        <span class="badge bg-primary rounded-pill mb-3">{{ product.category }}</span>
        <p>商品描述：{{ product.description }}</p>
        <p>商品內容：{{ product.content }}</p>
        <del class="h6">原價 {{ product.origin_price }} 元</del>
        <div class="h5">現在只要 {{ product.price }} 元</div>
        <div>
          <div class="input-group">
            <select class="form-select" v-model.number="selectNum">
              <option value="" selected disabled>請選擇數量</option>
              <option :value="num" v-for="num in 10" :key="num">{{ num }}</option>
            </select>
            <button type="button" class="btn btn-primary" :disabled="isDisabled">
              加入購物車
              <i class="fas fa-spinner fa-pulse" v-if="isDisabled"></i>
            </button>
          </div>
        </div>
      </div>
    </main>
  </div>


</template>