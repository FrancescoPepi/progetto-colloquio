<script>
import { store } from "../../data/store";
import axios from "axios";

export default {
  data() {
    return {
      store,
      img: "/src/assets/img/dolci_scoperte.png",
      title: "Main SubComponent",
      emailtoSend: "",
      consenso1: false,
      consenso2: false,
      EndPoint: "https://extp.ubiqubit.it/api/v1/user/sendEmail",
      showError: false,
    };
  },

  methods: {
    tsFunction() {
      const currentDate = new Date();
      return currentDate.getTime();
    },
    async submit() {
      const timeStamp = this.tsFunction();

      // save credentials on store
      this.store.email = this.emailtoSend;
      this.store.consenso1 = this.consenso1;
      this.store.consenso2 = this.consenso2;
      this.store.timeStamp = timeStamp;

      const body = {
        project: "24009",
        key: "eb9863574385eb26c58c2e48d05fbf1",
        mode: "staging",
        emailToSend: "registration",
        receiver: this.emailtoSend,
        email: {
          customReplacement: {
            USER_INFO: "CRYPTED",
          },
        },
        crypted: {
          email: this.emailtoSend,
          agreement1_player: this.consent1 == true ? "1" : "0",
          agreement2_player: this.consent2 == true ? "1" : "0",
          agreement3_player: "0",
          agreement4_player: "0",
          timestamp: timeStamp,
        },
      };
      try {
        const res = await axios.post(this.EndPoint, JSON.stringify(body), {
          headers: {
            Authorization:
              "Bearer 8491|mHMImxFWrDqLbpDUarzja5X3OBUvSojYXR72qUd01b7a0cbf",
            "Content-Type": "application/json",
          },
        });
        console.log("risposta", res.status);
        if (res && res.status == 200) {
          this.$emit("modal");
          console.log("registrazione mandata");
          this.showError = false;
          return { "status-code": 200 };
        } else {
          this.showError = true;
        }
      } catch (error) {
        this.showError = true;
        console.log("error ", error);
      }
    },
  },

  // components: {
  //	MyComponent,
  // },

  // 	props:{
  // 		passaggioInfo: stringa,
  //  	 },
};
</script>

<template>
  <div class="bg py-5">
    <div class="container-fluid py-5">
      <div class="row justify-content-center">
        <div class="text-body col-11 col-sm-4 px-3 px-sm-0 my-auto">
          <!-- form -->
          <form
            action="https://extp.ubiqubit.it/api/v1/user/sendEmail"
            method="post"
          >
            <!-- Email -->
            <div v-show="showError" class="alert alert-danger" role="alert">
              Controlla bene i campi
            </div>
            <div class="form-floating mb-3">
              <input
                v-model="emailtoSend"
                type="email"
                class="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label for="floatingInput">Email</label>
            </div>
            <!-- checkBox 1 -->
            <div class="mb-3">
              <div class="col-sm-10">
                <div class="form-check">
                  <input
                    v-model="consenso1"
                    class="form-check-input"
                    type="checkbox"
                    id="gridCheck1"
                  />
                  <label class="form-check-label" for="gridCheck1">
                    Consenso 1
                  </label>
                </div>
              </div>
            </div>
            <!-- checkBox 2 -->
            <div class="mb-3">
              <div class="col-sm-10">
                <div class="form-check">
                  <input
                    v-model="consenso2"
                    class="form-check-input"
                    type="checkbox"
                    id="gridCheck2"
                  />
                  <label class="form-check-label" for="gridCheck2">
                    Consenso 2
                  </label>
                </div>
              </div>
            </div>
            <!-- button submit -->
            <div>
              <div @click="submit" class="btn-around mx-auto">INVIA</div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../style/subStyle/mixins.scss" as *;
// VARIABLE
@use "../../style/subStyle/variable.scss" as *;

.bg {
  min-height: 450px;
  position: relative;
  color: white;
  overflow-x: hidden;

  &.debug {
    border: 2px dashed red;
  }

  &::after {
    content: "";
    position: absolute;
    z-index: -2;
    top: -35%;
    left: -40%;
    width: 180%;
    height: 40%;
    background-color: $bg-color-ciano;
    background-size: cover;
    border-radius: 100%;
  }

  .container-fluid {
    min-height: 450px;

    .row {
      min-height: 450px;
    }

    .btn-around {
      background-color: $bg-color-red;
      border: 2px solid $bg-color-red;

      &:hover {
        border: 2px solid $bg-color-red;
        background-color: rgb(218, 163, 163);
      }
    }

    &::after {
      content: "";
      position: absolute;
      z-index: -2;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: url(/src/assets/img/Unione2.png);
      background-size: cover;
      background-position: bottom;
    }
  }
}
</style>
