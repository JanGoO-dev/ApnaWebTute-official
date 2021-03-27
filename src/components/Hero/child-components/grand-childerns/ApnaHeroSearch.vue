<template>
  <div class="relative mr-0 lg:w-2/3 xl:w-1/2 w-2/3 md:w-full text-left">
    <input
      type="text"
      id="hero-field"
      name="hero-field"
      placeholder="Search Blog [ctrl + k]"
      class="w-full bg-gray-800 rounded-md rounded-r-none border bg-opacity-40 border-gray-700 focus:ring-1 focus:ring-purple-900 focus:bg-transparent focus:border-transparent focus:shadow-xl text-base outline-none text-gray-100 py-3.5 px-5 leading-8 transition-colors duration-200 ease-in-out"
    />
  </div>
  <button
    class="inline-flex border border-gray-700 text-white bg-gray-700 py-5 pl-2 pr-5 focus:outline-none hover:bg-purple-400 shadow-xl rounded-md rounded-l-none text-lg"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      aria-hidden="true"
      role="img"
      class="iconify iconify--teenyicons w-5 h-5 ml-3"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 15 15"
    >
      <g fill="none">
        <path
          d="M14.5 14.5l-4-4m-4 2a6 6 0 1 1 0-12a6 6 0 0 1 0 12z"
          stroke="currentColor"
        ></path>
      </g>
    </svg>
  </button>
</template>