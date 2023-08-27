<script lang="ts" setup>import { reactive } from "vue";

const { value, setData, active, isActive } :any= defineProps({
  value: Number,
  setData: Function,
  active: String,
  isActive: Boolean,
});

const status = reactive({ isActive: false });
function updateData() {
  status.isActive = !status.isActive;
  setData(value);
}
</script>

<template>
  <button
    v-if="isActive"
    type="button"
    @click="updateData"
    :class="
      'w-24 flex justify-center items-center ' +
      'py-6 group border rounded-2xl capitalize text-xl ' +
      'transition-colors ease-out duration-200 ' +
      'bg-kraal-blue-500 text-white '
    "
  >
    <slot></slot>
    <div class="overflow-hidden group-hover:h-auto">{{ value }}</div>
  </button>
  <!--  -->
  <button
    v-else
    type="button"
    @click="updateData"
    :class="
      'w-24 flex justify-center items-center bg-secondary-500 border-secondary-500 ' +
        'py-6 group border rounded-2xl capitalize text-xl ' +
        'transition-colors ease-out duration-200 ' +
        'hover:bg-secondary-700 focus:bg-kraal-blue-500 focus:text-white ' +
        active || ''
    "
  >
    <slot></slot>
    <div class="overflow-hidden group-hover:h-auto">{{ value }}</div>
  </button>
</template>
