<template>
  <div class="text-kraal-blue-500 h-[52px] shadow shadow-gray-100 flex items-center bg-white">
    <div class="max-w-screen-xl mx-auto w-full px-4 text-noom-text-900 flex justify-start items-center">
      <RouterLink to="/">
        <Kraal class="h-[32px] text-kraal-blue-500" />
      </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import Kraal from "../../icons/kraal.vue";
import { RouterLink } from "vue-router";

const props = defineProps<{ to?: string }>()
// 'bg-gradient-to-tr from-kraal-blue-500/20 to-kraal-blue-500/0 '
</script>