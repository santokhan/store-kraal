<script lang="ts" setup>
import { watch } from "vue";
import { RouterView, useRoute } from "vue-router";

const route = useRoute()
watch(() => route.path, () => { window.scrollTo(0, 0) })
</script>

<template>
  <RouterView :key="$route.path" />
</template>
