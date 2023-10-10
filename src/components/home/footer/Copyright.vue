<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 justify-center lg:justify-between items-center py-5 lg:py-8 gap-4">
    <div class="flex flex-wrap justify-center lg:justify-start gap-3 font-light">
      <a href="http://kraal.ai" :class="style">Login</a><span class="text-noom-stone-400">|</span>
      <a href="http://kraal.ai" :class="style">Terms and Conditions</a><span class="text-noom-stone-400">|</span>
      <a href="http://kraal.ai" :class="style">Privacy Policy </a>
    </div>
    <div class="w-full sm:w-auto font-light text-center lg:text-end">
      Copyright ® 2022 Kraal, Inc. All Rights Reserved
    </div>
  </div>
</template>

<script setup lang="ts">
const style: string = "underline-offset-4 decoration-2 hover:underline text-white whitespace-nowrap";
</script>
