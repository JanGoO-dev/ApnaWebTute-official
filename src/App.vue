<template>
  <apna-cursor />
  <apna-navbar />
  <router-view />
  <apna-footer />
</template>

<script>
import ApnaNavbar from "./components/Navbar/ApnaNavbar.vue";
import ApnaFooter from "./components/Footer/ApnaFooter.vue";
import ApnaCursor from './components/Cursor/ApnaCursor.vue';

export default {
  components: {
    ApnaNavbar,
    ApnaFooter,
    ApnaCursor,
  },
};
</script>

<style>
* {
  cursor: none !important;
}

/* #defaultCanvas0 {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9;
} */
</style>