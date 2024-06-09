<script>
import AppMainSC from "./subComponentMain/AppMainSC.vue";
import AppFormSC from "./subComponentMain/AppFormSC.vue";
import AppModalSC from "./subComponentMain/AppModalSC.vue";

export default {
  data() {
    return {};
  },

  methods: {
    callModal() {
      this.$refs.modalComponent.showModal();
    },
  },

  components: {
    AppMainSC,
    AppFormSC,
    AppModalSC,
  },
};
</script>

<template>
  <AppMainSC />
  <AppFormSC @modal="callModal" />
  <AppModalSC ref="modalComponent" />
</template>

<style lang="scss" scoped></style>
