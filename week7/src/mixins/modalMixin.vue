<script>
import { Modal } from 'bootstrap'

export default {
  mounted(){
    this.modal = new Modal(this.$refs.modal);
  },
  methods: {
    openModal(){
      this.modal.show();
    },
    hideModal(){
      this.modal.hide();
    }
  }
}

</script>