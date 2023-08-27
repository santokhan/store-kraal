<script lang="ts" setup>
import { reactive } from "vue";

const { value, setData }: any = defineProps({
  value: String,
  setData: Function,
});

const status = reactive({ isActive: false });
function updateData() {
  status.isActive = !status.isActive;
  setData(value);
}
</script>

<template>
  <button
    v-if="value"
    type="button"
    class="w-44 flex flex-col gap-8 py-8 px-6 items-center group shadow-xl border rounded-3xl capitalize"
    :class="
      status.isActive
        ? 'bg-primary-50 text-primary-500 shadow-primary-200/25 border-primary-500'
        : 'bg-white text-noom-text-900 border-gray-100'
    "
    @click="updateData"
  >
    <slot></slot>
    <div class="h-6 overflow-hidden group-hover:h-auto">{{ value }}</div>
  </button>
</template>
