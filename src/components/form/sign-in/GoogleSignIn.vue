<template>
  <button
    type="button"
    disabled="true"
    class="mx-3 my-5 w-full flex justify-center items-center gap-2 bg-white h-14 px-4 rounded-xl disabled:bg-gray-200"
    data-title="Google Sign In"
  >
    <Google class="h-7" />
    <p class="text-md font-medium">Sign in with Google</p>
  </button>
</template>

<script lang="ts" setup>
import Google from "./Google.vue";
</script>
