<template>
  <div>{{ props.list.value[0].message }}</div>
</template>

<script lang="ts" setup>
const props = defineProps<{ list: { value: any[] } }>();
</script>
