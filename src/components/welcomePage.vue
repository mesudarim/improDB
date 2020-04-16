<template >
  <div>
    <div class="container position-relative">
      <div xs12 sm6 offset-sm3>
        <div>
          <div primary-title class="p-3">3 - 2 - 1 - IMPRO!</div>
        </div>
        <div>
          <div
            primary-title
            class="p-3"
          >Donne moi ton nom camarade, que l'on puisse commencer à rigoler!</div>
        </div>
        <div class="py-3">
          <input
            name="userName"
            label="Nom et Prénom"
            id="userName"
            v-model="userName"
            required
            class="center fullWidth"
          />
        </div>

        <button
          class="fullWidth colorBtn btn font-weight-bold"
          style="background-color: green"
          @click="onSignin()"
        >Départ</button>

        <div row v-if="error">
          <app-alert @dismissed="onDismissed" :text="error.message"></app-alert>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      yourName: false,
      confirmNameAndGroup: false,
      userName: "",
      myStyle: {
        color: this.groupColorEnglish
      }
    };
  },
  mounted() {
    let userName = localStorage.getItem("idImproUserName");
    console.log("[mounted] userName", userName);
    if (userName) {
      this.$store.dispatch("fetchSubjects");
      this.$router.push("/admin");
    }
  },
  computed: {
    error() {
      return this.$store.getters.error;
    },
    loading() {
      return this.$store.getters.loading;
    }
  },

  methods: {
    onSignin() {
      // this.$store.dispatch("fetchSubjects");
      // this.$store.dispatch("fetchQuestions");

      if (this.userName === "admin") {
        this.$router.push("/admin");
      } else {
        this.$router.push("/admin");
        this.$store.dispatch("createNewUser", {
          userName: this.userName
        });
      }
    },
    onDismissed() {
      this.$store.dispatch("clearError");
    }
  }
};
</script>

<style scoped>
.myModal {
  min-height: 340px;
  width: 320px;
  border-radius: 10px;
  display: block;
  margin: 0px auto;
  margin-top: calc(50vh - 170px);
  background-color: white;
}
.over {
  position: absolute;
  top: 0px;
  font-size: 18px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
}
.colorBtn {
  border-radius: 36px;
  height: 56px;
  color: white;
}
.fullWidth {
  width: 95%;
  display: block;
  margin: 0px auto;
}
.center {
  display: block;
  margin: 0px auto;
}
.container {
  margin-top: 16px;
  background-color: rgba(248, 242, 242, 0.2);
  font-size: 20px;
  height: calc(100vh - 82px);
}
/*This is the code to make the spinner spin*/
.custom-loader {
  animation: loader 1s infinite;
  display: flex;
}
@-moz-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-o-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>



