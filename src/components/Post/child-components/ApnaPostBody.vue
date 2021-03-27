<template>
  <div
    @mouseover="detectHover(CI)"
    @mouseleave="resetHover()"
    class="p-12 xl:w-2/3 lg:w-5/6 md:w-full xl:hover:w-full flex flex-col items-start mx-auto rounded-xl border-2 hover:bg-gray-800 border-gray-600 hover:border-transparent transform hover:scale-105 transition duration-300 ease-in-out mb-8 shadow-lg cursor-pointer"
    :class="{ 'shadow-2xl': CI == HI }"
  >
    <span
      class="inline-block py-1 px-2 rounded bg-gray-800 text-gray-400 text-opacity-75 text-xs font-medium tracking-widest"
      >CATEGORY</span
    >
    <h2
      class="lg:text-5xl sm:text-4xl text-3xl font-bold text-blue-500 mt-4 mb-4 cursor-pointer hover:text-green-400"
    >
      Roof party normcore before they sold out, cornhole vape
    </h2>
    <p class="leading-relaxed mb-8 md:text-xl sm:text-lg text-sm text-justify cursor-text">
      Live-edge letterpress cliche, salvia fanny pack humblebrag narwhal
      portland. VHS man braid palo santo hoodie brunch trust fund. Bitters
      hashtag waistcoat fashion axe chia unicorn. Plaid fixie chambray 90's,
      slow-carb etsy tumeric. Cray pug you probably haven't heard of them
      hexagon kickstarter craft beer pork chic.
    </p>
    <div
      class="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-800 border-opacity-75 mt-auto w-full"
    >
      <a class="text-green-400 inline-flex items-center"
        >Learn More
        <svg
          class="w-4 h-4 ml-2"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M5 12h14"></path>
          <path d="M12 5l7 7-7 7"></path>
        </svg>
      </a>
      <span
        class="text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-400"
      >
        <svg
          class="w-4 h-4 mr-1"
          stroke="currentColor"
          stroke-width="2"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          viewBox="0 0 24 24"
        >
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
          <circle cx="12" cy="12" r="3"></circle></svg
        >1.2K
      </span>
      <span class="text-gray-400 inline-flex items-center leading-none text-sm">
        <svg
          class="w-4 h-4 mr-1"
          stroke="currentColor"
          stroke-width="2"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          viewBox="0 0 24 24"
        >
          <path
            d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"
          ></path></svg
        >6
      </span>
    </div>
    <a class="inline-flex items-center">
      <img
        alt="blog"
        src="https://dummyimage.com/104x104"
        class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
      />
      <span class="flex-grow flex flex-col pl-4">
        <span class="title-font font-medium text-white">Holden Caulfield</span>
        <span class="text-gray-500 text-xs tracking-widest mt-0.5"
          >UI DEVELOPER</span
        >
      </span>
    </a>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  props: {
    currentIndex: Number,
  },
  setup(props) {
    const CI = ref(props.currentIndex);
    const HI = ref(-1);

    function detectHover(index) {
        HI.value = index;
    }

    function resetHover() {
        HI.value = -1;
    }

    return {
      CI,
      HI,
      detectHover,
      resetHover
    };
  },
};
</script>

<style>
</style>