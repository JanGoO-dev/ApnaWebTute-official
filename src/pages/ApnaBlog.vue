<template>
  <h1 class="container mx-auto pl-6 mt-12 -m-10 text-gray-400 text-6xl">
    <span class="ml-60 font-extralight">Recent </span>
    <span class="font-extrabold text-green-500">Blog </span>
    <span class="font-extralight">Posts</span>
  </h1>
  <apna-post-card />
</template>

<script>
import ApnaPostCard from "../components/Post/ApnaPostCard.vue";
export default {
  components: { ApnaPostCard },
};
</script>