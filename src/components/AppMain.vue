<script>
import AppMainSC from "./subComponentMain/AppMainSC.vue";
import AppFormSC from "./subComponentMain/AppFormSC.vue";
export default {
  data() {
    return {
      title: "MAIN",
    };
  },

  // 	methods:{
  // 		myMethods(){
  // 			...
  // 		},
  // 	},

  components: {
    AppMainSC,
    AppFormSC,
  },

  // 	props:{
  // 		passaggioInfo: stringa,
  //  	 },
};
</script>

<template>
  <AppMainSC />
  <AppFormSC />
</template>

<style lang="scss" scoped></style>
