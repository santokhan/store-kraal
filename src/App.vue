<script lang="ts" setup>
import { RouterView } from "vue-router";
// console.log(import.meta.env)
</script>

<template>
  <RouterView :key="$route.path" />
</template>
