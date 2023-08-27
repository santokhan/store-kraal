<template>
  <RouterLink :to="props.to" class="px-3 py-2 w-full text-start hover:bg-chatgpt-500 rounded-lg flex items-center gap-2">
    <slot></slot>
  </RouterLink>
</template>

<script lang="ts" setup>
import { RouterLink } from 'vue-router'

const props = defineProps<{ to: string }>()
</script>