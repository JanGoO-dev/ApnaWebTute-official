<template>
  <header id="apna-navbar" class="z-10 text-gray-400 bg-apna-dark">
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

<style>
.slide-down-animation,
.slide-up-animation {
  position: fixed;
  top: -90px;
  left: 0;
  right: 0;
}

.slide-down-animation {
  animation: slide-down 1s forwards;
}

@keyframes slide-down {
  0% {
    top: -90px;
  }
  100% {
    top: 0;
  }
}

.slide-up-animation {
  animation: slide-up 1s forwards;
}

@keyframes slide-up {
  0% {
    top: 0;
  }
  100% {
    top: -90px;
  }
}
</style>