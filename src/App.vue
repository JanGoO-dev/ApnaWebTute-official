<template>
  <apna-navbar />
  <router-view />
  <apna-footer />
</template>

<script>
import ApnaNavbar from "./components/Navbar/ApnaNavbar.vue";
import ApnaFooter from "./components/Footer/ApnaFooter.vue";

export default {
  components: {
    ApnaNavbar,
    ApnaFooter,
  },
};
</script>

<style>
</style>