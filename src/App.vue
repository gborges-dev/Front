<template>
  <div id="app">
    <router-view />
    <Toast />
  </div>
</template>

<script>
import Toast from "primevue/toast";
export default {
  components: {
    Toast,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
