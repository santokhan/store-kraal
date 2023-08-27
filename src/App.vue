<script lang="ts" setup>
import { RouterView } from "vue-router";
</script>

<template>
  <div class="cheyenne text-noom-text">
    <RouterView :key="$route.path" />
  </div>
</template>
