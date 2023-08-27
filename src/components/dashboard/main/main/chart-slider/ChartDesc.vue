<script lang="ts" setup>const { spent, average } :any= defineProps({ spent: String, average: String });
</script>

<template>
  <div class="text-sm lg:text-base">${{ spent }} of ${{ average }} average spent</div>
</template>
