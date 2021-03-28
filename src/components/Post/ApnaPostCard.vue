<template>
  <section class="text-gray-400 bg-apna-light body-font overflow-hidden">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-col">
        <apna-post-body :currentIndex="index" v-for="(post, index) in 6" :key="index" />
      </div>
    </div>
  </section>
</template>

<script>
import ApnaPostBody from "./child-components/ApnaPostBody.vue";

export default {
  components: { ApnaPostBody },
};
</script>

<style>
</style>