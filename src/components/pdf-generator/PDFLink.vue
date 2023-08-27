<script lang="ts" setup>const { to } :any= defineProps({ to: String });
</script>

<template>
  <a :href="to" class="text-kraal-blue-500 hover:underline">
    <slot></slot>
  </a>
</template>
