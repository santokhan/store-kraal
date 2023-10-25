<script lang="ts" setup>
const props = defineProps({ message: String });
</script>

<style scoped>
.animate-error {
  animation-name: error;
  animation-duration: 250ms;
  animation-fill-mode: forwards;
  transform-origin: top left;
}

@keyframes error {
  0% {
    transform: scale(0.5);
  }

  100% {
    transform: scale(1);
  }
}
</style>

<template>
  <div v-if="message" :class="[
    'text-sm bg-orange-50/60 text-gray-500 p-1 rounded-lg border border-orange-300',
    'flex justify-start items-center gap-2',
    'animate-error'
  ]">
    <span :class="[
      'bg-orange-300 w-full h-full max-w-[20px] max-h-[20px] h-full rounded-full text-white',
      'flex justify-center items-center'
    ]">!</span>
    <span class="text-orange-300">{{ props.message }}</span>
  </div>
</template>