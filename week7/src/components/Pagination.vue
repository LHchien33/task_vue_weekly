<template>
  <ul class="pagination">
    <li class="page-item" :class="{ 'disabled': !has_pre }">
      <a class="page-link" href="#" aria-label="Previous" @click.prevent="switchPage(current_page - 1)">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <template v-for="page in total_pages" :key="page">
      <li class="page-item" :class="{ 'active': page === current_page }">
        <a class="page-link" href="#"  @click.prevent="switchPage(page)">{{ page }}</a>
      </li>
    </template>
    <li class="page-item" :class="{ 'disabled': !has_next }">
      <a class="page-link" href="#" aria-label="Next" @click.prevent="switchPage(current_page + 1)">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['has_pre', 'total_pages', 'current_page','has_next'],
  emits: ['switchPage'],
  methods: {
    switchPage(page){
      if(page === this.current_page){
        return
      }
      this.$emit('switchPage', page)
    }
  }
}
</script>