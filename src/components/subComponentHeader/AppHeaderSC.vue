<script>
export default {
  data() {
    return {
      title: "Header SubComponent",
      logo: "/src/assets/icon/Raggruppa_150.png",
      logoMini: "/src/assets/icon/Raggruppa_78.png",
      isMobile: false,
      window: null,
    };
  },

  methods: {
    checkIsMobile() {
      this.window = window.innerWidth;
      if (this.window <= 750) {
        this.isMobile = true;
        return;
      }
      this.isMobile = false;
      return;
    },
  },

  // components: {
  //	MyComponent,
  // },
  created() {
    window.addEventListener("resize", this.checkIsMobile);
    this.checkIsMobile();
  },

  // 	props:{
  // 		passaggioInfo: stringa,
  //  	 },
};
</script>

<template>
  <div class="bg">
    <div class="container container-sm p-3">
      <div class="row justify-content-between align-items-center">
        <!-- logo -->
        <div class="col-6">
          <img
            :src="isMobile ? logoMini : logo"
            class="img-fluid w-50"
            alt="logo"
          />
        </div>
        <!-- nav full-->
        <div v-show="!isMobile" class="col-4">
          <ul class="d-flex gap-5">
            <li class="col-auto"><a href="#">FAQ</a></li>
            <li class="col-auto"><a href="#">Registrati</a></li>
            <li class="col-auto"><a href="#" class="btn-around">Accedi</a></li>
          </ul>
        </div>
        <!-- nav mobile -->
        <div v-show="isMobile" class="dropdown col-4">
          <div
            class="text-end"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <font-awesome-icon icon="fa-solid fa-bars" class="fa-2x" />
          </div>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">FAQ</a></li>
            <li><a class="dropdown-item" href="#">Registrati</a></li>
            <li><a class="dropdown-item" href="#">Accedi</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
// MIXINS
@use "../../style/subStyle/mixins.scss" as *;
// VARIABLE
@use "../../style/subStyle/variable.scss" as *;

.bg {
  color: $text-primary;
  background-color: $bg-color-red;

  &.debug {
    border: 2px dashed red;
  }

  .btn-around {
    border: 2px solid white;

    &:hover {
      border: 2px solid white;
      background-color: white;
      color: $text-secondary;
    }
  }
}
</style>
