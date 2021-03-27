<template>
  <div
    class="md:border-l-8 md:pl-8 border-0 pl-0 w-full md:w-2/3 flex flex-col md:justify-start justify-center absolute"
  >
    <h1 class="sm:text-3xl text-2xl mb-6 md:text-left text-center text-white">
      <span>
        <span class="font-extralight">Hi, this is </span
        ><span class="font-extrabold uppercase">Asad Ali</span>
      </span>
      <br />
      <span class="xl:text-6xl md:text-4xl text-3xl"
        >
        <span class="font-extralight">Welcome to </span>
        <span class="uppercase font-extrabold">Apna</span>
        <span class="font-extralight text-md text-4xl">WebTute</span>
      </span>
    </h1>
    <div class="flex w-full md:justify-start justify-center items-end">
      <apna-hero-search />
    </div>
  </div>
</template>

<script>
import ApnaHeroSearch from "./grand-childerns/ApnaHeroSearch.vue";

export default {
  components: {
    ApnaHeroSearch
  }
}
</script>