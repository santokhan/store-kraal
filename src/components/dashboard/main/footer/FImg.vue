<template>
  <div class="w-[20px] h-[20px] rounded-full overflow-hidden flex justify-center items-center shadow-lg"
    :style="{ background: color }">
    <img class="w-full h-full object-cover mt-1 hidden" :src="src" alt="card" />
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({ src: String, color: String });
</script>
