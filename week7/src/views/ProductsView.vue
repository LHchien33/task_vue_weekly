<template>
  <div class="container py-5">
    <h2 class="mb-3'">產品列表</h2>
    <div class="position-relative py-3">
      <button type="button" @click="openModal('new')" class="position-absolute bottom-100 end-0 btn btn-primary">建立新的產品</button>
      <!-- 產品列表 -->
      <table class="table align-middle">
        <thead>
          <tr>
            <th>分類</th>
            <th>產品名稱</th>
            <th>原價</th>
            <th>售價</th>
            <th>是否啟用</th>
            <th>編輯</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in products" :key="item.id">
            <td>{{ item.category }}</td>
            <td>{{ item.title }}</td>
            <td>{{ item.origin_price }}</td>
            <td>{{ item.price }}</td>
            <td :class="[item.is_enabled ? 'text-success' : 'text-danger']">{{ item.is_enabled ? '啟用' : '未啟用' }}</td>
            <td>
              <button type="button" class="mb-1 mb-md-0 btn btn-outline-primary me-2"  @click="openModal('edit', item)">編輯</button>
              <button type="button" class="btn btn-outline-danger"  @click="openModal('del', item)">刪除</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <p>此頁共有 {{ products.length }} 項產品</p>

    <!-- 分頁導覽 -->
    <Pagination v-bind="pagination" v-if="pagination.total_pages" @switch-page="getProducts"></Pagination>

    <!-- 新增 / 編輯 / 刪除產品 modal -->
    <ProductModal ref="productModal" :temp="{...tempProduct}" :isNew="isNew" @updateProd="updateProd"></ProductModal>
    <DelModal ref="delModal" :temp="{...tempProduct}" @delData="delProduct"></DelModal>
  </div>
</template>

<script>
import Pagination from '@/components/Pagination.vue';
import ProductModal from '@/components/ProductModal.vue';
import DelModal from '@/components/DelModal.vue';

export default {
  components: {
    Pagination,
    ProductModal,
    DelModal
  },
  data(){
    return {
      products: [],
      tempProduct: {},
      pagination: {},
      isNew: '',
    }
  },
  methods:{
    getProducts(page=1){
      const loader = this.$loading.show();

      const { VITE_API, VITE_API_PATH } = import.meta.env;
      const url = `${VITE_API}/api/${VITE_API_PATH}/admin/products?page=${page}`;
      this.$http.get(url)
      .then(res => {
        this.products = res.data.products;
        this.pagination = res.data.pagination;
      })
      .catch(err => {
        alert(`取得產品失敗，錯誤代碼：${err.response.status}`);
      })
      .finally(() => loader.hide());
    },
    openModal(type, item = {}){
      this.tempProduct = {...item};
      
      if (type === 'del'){
        this.$refs.delModal.openModal();
        return
      } else if (type === 'new'){
        this.isNew = true;
        this.$refs.productModal.resetForm();
      } else if (type === 'edit'){
        this.isNew = false;
      }
      this.$refs.productModal.openModal();
    },
    updateProd(prodData, prodId){
      const loader = this.$loading.show();
      const { VITE_API, VITE_API_PATH } = import.meta.env;
      let url = `${VITE_API}/api/${VITE_API_PATH}/admin/product`;
      let method = 'post';
      let text = '新增';

      if (this.isNew === false){
        url += `/${prodId}`;
        method = 'put';
        text = '編輯';
      }

      this.$http[method](url, {data: {...prodData}})
      .then(res => {
        setTimeout(() => alert(`${res.data.message}`), 1000);
        this.$refs.productModal.hideModal();
        this.getProducts();
      })
      .catch(err => {
        alert(`${text}產品失敗，錯誤代碼：${err.response.status}`);
      })
      .finally(() => loader.hide());
    },
    delProduct(prodId){
      const loader = this.$loading.show();
      const { VITE_API, VITE_API_PATH } = import.meta.env;
      const url = `${VITE_API}/api/${VITE_API_PATH}/admin/product/${prodId}`;

      this.$http.delete(url)
      .then(res => {
        setTimeout(() => alert(`${res.data.message}`), 1000);
        this.$refs.delModal.hideModal();
        this.getProducts();
      })
      .catch(err => {
        alert(`刪除產品失敗，錯誤代碼：${err.response.status}`);
      })
      .finally(() => loader.hide());
    }
  },
  mounted(){
    this.getProducts();
  }
}
</script>