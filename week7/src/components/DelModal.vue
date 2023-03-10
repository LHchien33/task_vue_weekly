<template>

<div ref="modal" class="modal fade" data-bs-keyboard="false" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content border-0">
      <div class="modal-header bg-danger">
        <h5 class="modal-title text-light" id="productModalLabel">
          <span>刪除產品</span>
        </h5>
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>是否刪除 <span class="text-danger">{{ temp.title }}</span> 商品（刪除後將無法恢復）</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">取消</button>
        <button type="button" class="btn btn-danger" @click="$emit('delProduct', temp.id)">確認刪除</button>
      </div>
    </div>
  </div>
</div>

</template>

<script>
import modalMixin from '../mixins/modalMixin.vue';

export default {
  mixins: [modalMixin],
  emits: ['delProduct'],
  props: ['temp'],
  data(){
    return {
      modal: {},
    }
  }
}


</script>