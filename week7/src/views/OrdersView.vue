<template>
  <div class="container">
    <table class="table mt-4">
      <thead>
        <tr>
          <th>購買時間</th>
          <th>Email</th>
          <th>購買款項</th>
          <th>應付金額</th>
          <th>是否付款</th>
          <th>編輯</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="(item, key) in orders" :key="key">
          <tr v-if="orders.length" :class="{ 'text-secondary': !item.is_paid }">
            <td>{{ dateConverter(item.create_at) }}</td>
            <td><span v-text="item.user.email" v-if="item.user"></span></td>
            <td>
              <ul class="list-unstyled mb-0">
                <li v-for="(product, i) in item.products" :key="i">
                  <p class="mb-0">{{ product.product.title }}</p>
                  <small>數量：{{ product.qty }}{{ product.product.unit }}</small>
                </li>
              </ul>
            </td>
            <td class="text-right">{{ item.total }}</td>
            <td>
              <div class="form-check form-switch">
                <input type="checkbox" class="form-check-input"
                  :id="`paidSwitch${item.id}`" v-model="item.is_paid" @change="updatePaid(item)"
                />
                <label :for="`paidSwitch${item.id}`" class="form-check-label">
                  <span v-if="item.is_paid">已付款</span>
                  <span v-else>未付款</span>
                </label>
              </div>
            </td>
            <td>
              <div class="btn-group">
                <button class="btn btn-outline-primary btn-sm" type="button"
                  @click="openModal(item)">檢視
                </button>
                <button class="btn btn-outline-danger btn-sm" type="button"
                  @click="openDelOrderModal(item)">刪除
                </button>
              </div>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
  
  <OrderModal ref="orderModal" :temp="tempOrder" @updatePaid="updatePaid"></OrderModal>
  <DelModal ref="delModal" :temp="tempOrder" @delData="delOrder"></DelModal>
  <Pagination v-bind="pagination" v-if="pagination.total_pages" @switch-page="getOrders"></Pagination>
</div>
</template>

<script>
import DelModal from '@/components/DelModal.vue';
import OrderModal from '@/components/OrderModal.vue';
import Pagination from '@/components/Pagination.vue';
import methodsMixin from '@/mixins/methodsMixin.vue';

export default {
  mixins: [methodsMixin],
  data() {
    return {
      orders: [],
      isNew: false,
      pagination: {},
      tempOrder: {},
    };
  },
  components: {
    Pagination,
    DelModal,
    OrderModal,
  },
  methods: {
    getOrders(page = 1) {
      const loader = this.$loading.show();

      const { VITE_API, VITE_API_PATH } = import.meta.env;
      const url = `${VITE_API}/api/${VITE_API_PATH}/admin/orders?page=${page}`;

      this.$http.get(url)
      .then(res => {
        this.orders = res.data.orders;
        this.pagination = res.data.pagination;
      })
      .catch(err => {
        alert(`取得訂單失敗，錯誤代碼：${err.response.status}`);
      })
      .finally(() => loader.hide());
    },
    openModal(item) {
      this.tempOrder = { ...item };
      this.$refs.orderModal.openModal();
    },
    openDelOrderModal(item) {
      this.tempOrder = { ...item };
      this.$refs.delModal.openModal();
    },
    updatePaid(item) {      
      const loader = this.$loading.show();

      const { VITE_API, VITE_API_PATH } = import.meta.env;
      const url = `${VITE_API}/api/${VITE_API_PATH}/admin/order/${item.id}`;
      const requestData = { is_paid: item.is_paid };

      this.$http.put(url, { data: requestData })
      .then(res => {
        this.getOrders();
        this.$refs.orderModal.hideModal();
        setTimeout(() => alert('成功更新付款狀態'),500);
      })
      .catch(err => {
        alert(`更新付款狀態失敗，錯誤代碼：${err.response.status}`);
      })
      .finally(() => loader.hide());
    },
    delOrder(orderId) {
      const loader = this.$loading.show();

      const { VITE_API, VITE_API_PATH } = import.meta.env;
      const url = `${VITE_API}/api/${VITE_API_PATH}/admin/order/${orderId}`;

      this.$http.delete(url)
      .then(res => {
        this.$refs.delModal.hideModal();
        this.getOrders();
        setTimeout(() => alert('成功刪除訂單'),500);
      })
      .catch(err => {
        alert(`刪除訂單失敗，錯誤代碼：${err.response.status}`);
      })
      .finally(() => loader.hide());
    },
  },
  mounted() {
    this.getOrders();
  },
};
</script>