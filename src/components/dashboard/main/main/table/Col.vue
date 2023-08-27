<template>
  <td class="text-sm text-slate-600 lg:text-base flex gap-2 items-center py-1 ml-2 lg:m-0">
    <Ellipse :bg="data[2]" class="w-3" />
    {{ data[0] }}
  </td>
  <td class="text-gray-600 py-[5px] text-sm lg:text-base text-end w-20">
    {{ props.data[1][0] }}
  </td>
  <td class="text-gray-600 py-[5px] text-sm lg:text-base text-end w-20">
    {{ props.data[1][1] }}
  </td>
</template> 

<script lang="ts" setup>
import Ellipse from '../../../../icons/ellipse.vue';

const props = defineProps<{ data: any[] }>();
</script>
