<script>
import { Modal } from "bootstrap";

const myModal = null;
export default {
  data() {
    return {
      // mymodal: null,
      token: "",
      showNext: false,
    };
  },
  methods: {
    showModal() {
      this.myModal.toggle();
    },
    // clouseModel(){
    //   this.myModal.d
    // }
    // navigateToRoute() {
    //   this.$router.push({ name: "play", params: { slug: this.token } });
    // },
  },
  // watch: {
  //   visible() {
  //     console.log("test", this.visible);
  //     this.myModal = new Modal(document.getElementById("exampleModal"));
  //     this.showModal();
  //   },
  // },
  mounted() {
    this.myModal = new Modal(document.getElementById("exampleModal"));
  },
  // components: {
  //	MyComponent,
  // },

  // props: {
  //   visible: Function,
  // },
};
</script>

<template>
  <!-- Modal -->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">
            Pagina di Verifica del Token
          </h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <h3>Verifica il tuo token</h3>
          <p>Inserisici il token che hai ricevuto nella email!</p>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label"
              >Token...</label
            >
            <textarea
              v-model="token"
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="1"
            ></textarea>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <router-link
            :to="{ name: 'play', params: { slug: this.token } }"
            class="btn btn-primary"
            @click="showModal"
          >
            Verifica
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.btn {
  cursor: pointer;
}
</style>
