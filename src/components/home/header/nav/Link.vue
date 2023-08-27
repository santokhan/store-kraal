<script lang="ts" setup>
const { href } :any= defineProps({ href: String });
</script>

<template>
  <a
    :href="href || ''"
    class="block mx-1 brown-ll font-medium hover:underline hover:decoration-2 hover:underline-offset-4 text-sm"
  >
    <slot></slot>
  </a>
</template>
