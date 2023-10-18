<script lang="ts" setup>
const { message }: any = defineProps({ message: String });
</script>

<template>
  <div v-if="message" :class="[
    'text-sm bg-orange-50 text-gray-500 p-1 rounded-lg flex justify-start items-start gap-2 border border-orange-100'
  ]">
    <span :class="[
      'bg-orange-300 max-w-[20px] w-full max-h-5 h-full flex justify-center items-center rounded-full text-white'
    ]">!</span>
    {{ message }}
  </div>
</template>
