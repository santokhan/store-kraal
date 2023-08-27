<template>
  <a
    :href="href"
    :class="`block mx-1 brown-ll font-medium text-sm 
    hover:underline hover:decoration-2 hover:underline-offset-4`"
  >
    <slot></slot>
  </a>
</template>

<script lang="ts" setup>
const props = defineProps<{ href: string }>();
const href = props.href || "";
</script>
