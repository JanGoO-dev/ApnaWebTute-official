<template>
  <apna-navbar />
  <router-view />
</template>

<script>
import ApnaNavbar from './components/Navbar/ApnaNavbar.vue'

export default {
  components: {
    ApnaNavbar
  }
}
</script>

<style>
</style>