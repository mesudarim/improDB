<template>
  <div id="mainDiv">
    <nav
      class="navbar navbar-expand-lg navbar-light"
      style="background: rgba(160, 160, 160, 0.3);border-bottom: grey dashed 1px;"
    >
      <div
        v-text="title"
        class="navbar-brand"
        style="margin-left: calc(50vw - 60px);font-family: 'Rock Salt', cursive; color: white"
      ></div>
    </nav>
    <div style="min-height: calc(100vh - 56px); ">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "ID d'impro"
    };
  },
  computed: {
    user() {
      return this.$store.getters.user;
    }
  },
  name: "App"
};
</script>

<style media="screen">
#mainDiv {
  background-image: url("../static/img/scene.jpg") !important;
  background-size: cover;
  background-position: center;
  font-family: "Assistant", sans-serif;
  color: white;
}
#app {
  color: rgb(211, 211, 211);
  font-family: "Assistant", sans-serif;
}

@media screen and (max-width: 600px) {
}
</style>