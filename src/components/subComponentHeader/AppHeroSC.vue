<script>

export default {
  data() {
    return {
      text: "Dolci Scoperte",
      subText: "concorso"
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
  <div class="bg">
    <div class="container-fluid text-center py-5">
      <div class="row"></div>
      <div class="opacity-50">{{ subText.toUpperCase() }}</div>
      <div class="fs-1">{{ text }}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../style/subStyle/mixins.scss" as *;
// VARIABLE
@use "../../style/subStyle/variable.scss" as *;

.bg {
  position: relative;
  color: white;

  .container-fluid::before {
    content: "";
    position: absolute;
    z-index: -1;
    bottom: 0%;
    left: 0%;
    transform: translate(-25%);
    width: 200%;
    height: 200%;
    background-color: $bg-color-red;
    background-size: cover;
    border-radius: 100%;
  }


  &.debug {
    border: 2px dashed black;
  }
}
</style>
