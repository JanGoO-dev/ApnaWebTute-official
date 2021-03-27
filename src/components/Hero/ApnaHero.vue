<template>
  <section>
    <div class="flex flex-col justify-center items-center relative">
      <apna-hero-image />
      <apna-hero-text />
    </div>
  </section>
</template>

<script>
import ApnaHeroImage from "./child-components/ApnaHeroImage.vue";
import ApnaHeroText from "./child-components/ApnaHeroText.vue";

export default {
  components: {
    ApnaHeroImage,
    ApnaHeroText,
  },
};
</script>