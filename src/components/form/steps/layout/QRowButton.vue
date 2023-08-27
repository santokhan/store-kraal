<script setup lang="ts">
import { reactive, ref } from "vue";

const props: any = defineProps({
  value: String,
  setData: Function,
  active: String,
  isActive: Boolean,
  suffix: String,
});

const status: any = ref(false);
function updateData() {
  status.value = !status.value;
  props.setData(props.value);
}

function capitalizeFirst(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function styleOnActiveDeactive() {
  if (props.value && props.isActive) {
    return "bg-kraal-blue-500 border-kraal-blue-500 text-white ";
  } else if (props.value || props.isActive) {
    return (
      "bg-noom-select hover:bg-secondary-700 focus:bg-kraal-blue-500 focus:border-kraal-blue-500 focus:text-white " +
      props.active
    );
  } else {
    return "";
  }
}
</script>

<template>
  <button
    type="button"
    @click="updateData"
    :class="
      'w-full px-6 py-4 group rounded-2xl border text-center capitalize-first text-lg font-normal ' +
      'transition-colors ease-out duration-200 ' +
      styleOnActiveDeactive()
    "
  >
    {{ capitalizeFirst(props.value) }}{{ props.suffix }}
  </button>
</template>
