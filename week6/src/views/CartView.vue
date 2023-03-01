<script>
export default {
  data(){
    return {
      cartsInfo: {
        carts: []
      },
      isActive: '',
      isDisabled: false
    }
  }
}
</script>

<template>

  <div class="container pt-5">
    <main>
      <div class="text-end">
        <button class="btn btn-outline-danger" type="button"
                v-if="cartsInfo.carts.length !== 0" :disabled="isDisabled">
          清空購物車
          <i class="fas fa-spinner fa-pulse" v-if="isActive === 'all'"></i>
        </button>
      </div>
      <table class="table align-middle">
        <thead>
          <tr>
            <th></th>
            <th>品名</th>
            <th style="width: 150px">數量/單位</th>
            <th class="text-end">小計</th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="cartsInfo.carts.length === 0">
            <td colspan="4" class="text-center py-3">- 購物車目前沒有商品 -</td>
          </tr>
          <template v-else>
            <tr v-for="cart in cartsInfo.carts" :key="cart.id">
              <td>
                <button type="button" class="btn btn-outline-danger btn-sm"
                        :disabled="isDisabled">
                  x
                  <i class="fas fa-spinner fa-pulse" v-if="isActive === cart.id"></i>
                </button>
              </td>
              <td>
                {{ cart.product.title }}
              </td>
              <td>
                <div class="input-group input-group-sm">
                  <div class="input-group">
                    <input min="1" type="number" class="form-control"
                          v-model="cart.qty" :disabled="isDisabled">
                    <span class="input-group-text" id="basic-addon2">{{ cart.product.unit }}</span>
                  </div>
                </div>
              </td>
              <td class="text-end">
                <p class="mb-0 h6">{{ cart.total }}</p>
              </td>
            </tr>
          </template>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="3" class="text-end fw-bold">總計</td>
            <td class="text-end h5 py-3">{{ cartsInfo.total }}</td>
          </tr>
        </tfoot>
      </table>
    </main>
  </div>

</template>
