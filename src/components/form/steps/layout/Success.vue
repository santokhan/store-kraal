<script lang="ts" setup>
const { message }: any = defineProps({ message: String });
</script>

<template>
  <div
    class="text-sm bg-green-50 text-gray-500 p-1 rounded-lg flex justify-start items-center gap-2 border border-green-100"
    v-if="message"
  >
    <div
      class="bg-green-300 max-w-[20px] w-full max-h-5 h-full flex justify-center items-center rounded-full text-white"
    >
      !
    </div>
    {{ message }}
  </div>
</template>
