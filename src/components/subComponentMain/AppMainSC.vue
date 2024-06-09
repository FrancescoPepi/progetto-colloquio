<script>
import { store } from "../../data/store";

export default {
  data() {
    return {
      store,
      img: "/src/assets/img/dolci_scoperte.png",
      title: "Main SubComponent",
    };
  },

  // 	methods:{
  // 		myMethods(){
  // 			...
  // 		},
  // 	},

  // components: {
  //	MyComponent,
  // },

  // 	props:{
  // 		passaggioInfo: stringa,
  //  	 },
};
</script>

<template>
  <div class="container-fluid container-sm">
    <div class="row">
      <div class="col-12 col-sm-7 px-sm-5 px-5 text-center text-sm-start">
        <img :src="img" class="w-100" alt="img dolci scoperte" />
      </div>
      <div
        class="col-12 col-sm-5 px-sm-5 px-5 text-center text-sm-start text-hero align-self-center"
      >
        <span>Viaggia alla scoperta della </span>
        <span>terza isola Eridania </span>
        <span>ricca di novità, fantastici premi e </span>
        <span>DOLCI SCOPERTE!</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../style/subStyle/mixins.scss" as *;
// VARIABLE
@use "../../style/subStyle/variable.scss" as *;

.container-fluid {
  color: white;

  &.debug {
    border: 2px dashed red;
  }

  .text-hero {
    font-weight: 900;
    font-size: 1.8rem;
    line-height: 2rem;

    & :nth-child(2n + 1) {
      color: $text-secondary;
    }

    & :nth-child(2n) {
      color: $text-third;
    }
  }
}
</style>
