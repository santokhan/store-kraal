<template>
  <tr class="text-start text-sm">
    <td class="text-sm text-slate-600 lg:text-base">
      <div class="flex gap-2 items-center py-1 ml-3">
        <div class="h-3 w-3"></div>{{ props.label }}
      </div>
    </td>
    <td class="flex gap-8 lg:gap-12 justify-end font-medium text-gray-600 py-[6px]">${{ props.amount }}</td>
  </tr>
</template>

<script lang="ts" setup>
const props = defineProps<{ label: string; amount: string }>()
</script>