<template>
  <aside class="fixed left-0 top-16 flex lg:hidden bg-white py-6 border-r">
    <Nav :expand="true" />
  </aside>
</template>

<script lang="ts" setup>
import Nav from "../../../sidebar/nav/Nav.vue";
</script>

