<script>
import { store } from "../data/store";
import axios from "axios";
import AppMain from "../components/AppMain.vue";

export default {
  data() {
    return {
      store,
    };
  },

  methods: {
    async checkToken() {
      const token = this.$route.params.slug;
      const endPoint = "https://extp.ubiqubit.it/api/v1/user/checkToken";
      const body = {
        project: "24009",
        key: "eb9863574385eb26c58c2e48d05fbf1",
        mode: "staging",
        token: token,
      };
      let responce = [
        {
          email: store.email,
          agreement1_player: store.consenso1,
          agreement2_player: store.consenso2,
          agreement3_player: "0",
          agreement4_player: "0",
          timestamp: store.timeStamp,
        },
      ];
      const responceJson = JSON.stringify(responce);
      try {
        const res = await axios.post(endPoint, JSON.stringify(body), {
          headers: {
            Authorization:
              "Bearer 8491|mHMImxFWrDqLbpDUarzja5X3OBUvSojYXR72qUd01b7a0cbf",
            "Content-Type": "application/json",
          },
        });
        console.log("risposta", res);
        if (res && res.status == 200) {
          console.log("successo");
          return {
            responceJson,
          };
        }
      } catch (error) {
        console.log("error ", error);
      }
    },
  },
  components: {
    AppMain,
  },
  mounted() {
    this.checkToken();
  },
};
</script>
<template>
  <h1 class="text-center">PAGE TOKEN</h1>
</template>

<style lang="scss" scoped></style>
