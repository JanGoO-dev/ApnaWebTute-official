<template>
  <header class="text-gray-400 bg-apna-dark">
    <div
      class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center"
    >
      <apna-logo />
      <apna-nav />
    </div>
  </header>
</template>

<script>
import ApnaLogo from "./child-components/ApnaLogo.vue";
import ApnaNav from "./child-components/ApnaNav.vue";

export default {
  components: {
    ApnaLogo,
    ApnaNav,
  },
};
</script>