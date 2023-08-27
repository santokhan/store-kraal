<template>
  <div
    :class="
      'bg-chatgpt-500 text-gray-100 px-4 py-2 ' +
      'border-b border-gray-500 ' +
      'w-full min-h-12 h-12 lg:h-14 z-50 '
    "
  >
    <div
      :class="'flex justify-between items-center ' + 'max-w-4xl mx-auto w-full h-full '"
    >
      <button
        type="button"
        class="rounded-md w-7 h-7 flex justify-center items-center border border-gray-300 bg-transparent text-gray-300 hover:border-white hover:text-white focus:border-white focus:text-white"
      >
        <i class="fas fa-bars px-2"></i>
      </button>

      <label
        for="chatInput"
        class="rounded-md w-7 h-7 flex justify-center items-center border border-gray-300 bg-transparent text-gray-300 hover:border-white hover:text-white focus:border-white focus:text-white"
      >
        <svg
          class="w-[14px]"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M6 14V8H0V6H6V0H8V6H14V8H8V14H6Z" fill="currentColor"></path>
        </svg>
      </label>
    </div>
  </div>
</template>

<script lang="ts" setup></script>
