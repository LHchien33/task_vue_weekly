<script>
import VPagi from '../components/Pagination.vue';

export default {
  components: {
    VPagi,
  },
  data(){
    return {
      products: [],
      pagination: {},
      isActive: '',
      isDisabled: false,
    }
  },
  methods: {
    updateCart(){
      this.isActive = item.id;
      this.isDisabled = true;

      setTimeout(() => {
        this.isActive = '';
        this.isDisabled = false;
      }, 1000);
    },
    getProducts(){
      let loader = this.$loading.show({
        container: this.$refs.productsLoading,
      })

      const url = `${import.meta.env.VITE_API}api/${import.meta.env.VITE_APIPATH}/products`;

      this.$http.get(url)
      .then(res => {
        this.products = res.data.products;
        this.pagination = res.data.pagination;
      })
      .catch(err => {
        alert(`${err.response.data.message}，錯誤代碼：${err.response.status}`);
      })
      .finally(() => {
        loader.hide();
      })
    }
  },
  mounted(){
    this.getProducts();
  }
}
</script>

<template>

  <div ref="productsLoading" class="vl-parent container pt-5">
    <main>
      <table class="table align-middle mb-5">
        <thead>
          <tr>
            <th>圖片</th>
            <th>商品名稱</th>
            <th>價格</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="prod in products" :key="prod.id">
            <td style="width: 200px">
              <div style="height: 100px; background-size: cover; background-position: center">
                <img :src="prod.imageUrl" :alt="prod.title" class="object-fit-cover">
              </div>
            </td>
            <td>
              {{ prod.title }}
            </td>
            <td>
              <del class="h6">原價 {{ prod.origin_price }} 元</del>
              <div class="h5">現在只要 {{ prod.price }} 元</div>
            </td>
            <td>
              <div class="btn-group btn-group-sm">
                <RouterLink :to="`/product/${prod.id}`" class="btn btn-outline-secondary">
                  查看更多
                </RouterLink>
                <button type="button" class="btn btn-outline-danger"
                        @click="updateCart()" :disabled="isDisabled">
                  加到購物車
                  <i class="fas fa-spinner fa-pulse" v-if="isActive === prod.id"></i>
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </main>
    <VPagi v-bind="pagination"></VPagi>
  </div>

</template>
