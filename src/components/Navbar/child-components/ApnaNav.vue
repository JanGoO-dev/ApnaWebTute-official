<template>
  <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center space-x-4">
    <router-link
      v-for="(route, index) in availableRoutes"
      :key="index"
      :to="route.path"
      class="cursor-pointer md:mt-0 mt-4 text-gray-200 hover:text-green-400"
      >{{ route.name }}</router-link
    >
  </nav>
</template>

<script>
import { computed } from "vue";
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();

    const availableRoutes = computed(() => {
      return router.options.routes;
    });

    return { availableRoutes };
  },
};
</script>