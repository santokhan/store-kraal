<script setup lang="ts">
const props:any = defineProps({ href: String });
</script>

<template>
  <a
    :href="props.href || 'https://kraal.ai'"
    class="block py-2 text-white font-normal text-base capitalize hover:underline decoration-2 underline-offset-4"
  >
    <slot></slot>
  </a>
</template>
