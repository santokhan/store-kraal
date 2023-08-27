<script lang="ts" setup>
import { reactive } from "vue";

const props: any = defineProps({
  value: String,
  setData: Function,
  isActive: Boolean,
});

const status: any = reactive({ isActive: false });
function updateData() {
  status.isActive = !status.isActive;
  props.setData();
}

function capitalizeFirst(str: string) {
  return (str = str.charAt(0).toUpperCase() + str.slice(1));
}

const activeBox = (bool: boolean): string => (bool ? "text-white bg-noom-green" : "");

const activeClass = (bool: boolean): string => (bool ? "text-noom-green bg-white" : "");
</script>

<template>
  <button
    v-if="isActive"
    type="button"
    @click="updateData"
    :class="
      'w-full flex items-center px-4 py-4 mx-0 group rounded-2xl border border-secondary-600 ' +
      'text-lg font-normal text-start capitalize-first ' +
      'bg-kraal-blue-500 text-white focus:bg-secondary-500 '
    "
  >
    <label class="flex items-center gap-3" for="kraal">
      <div
        title="chekcbox"
        :class="'w-5 h-5 p-2.5 rounded border flex justify-center items-center text-kraal-blue-500 bg-white '"
      >
        <i class="fa fa-check text-sm" :class="isActive ? 'check-animate' : ''"></i>
      </div>
      <span class="px-1">{{ capitalizeFirst(props.value) }}</span>
    </label>
  </button>
  <!--  -->
  <button
    v-else
    type="button"
    @click="updateData"
    :class="
      'group w-full flex items-center px-4 py-4 mx-0 group rounded-2xl border border-secondary-600 shadowlg shadow-gray-100 ' +
      'text-lg font-normal text-start capitalize-first ' +
      'bg-noom-select hover:bg-secondary-800 hover:border-secondary-500 ' +
      activeBox(isActive)
    "
  >
    <label class="flex items-center gap-3" for="kraal">
      <div
        :class="
          'w-5 h-5 p-2.5 rounded border border-secondary-800 flex justify-center items-center bg-white shadow-sm ' +
          activeClass(isActive)
        "
      ></div>
      <span class="px-1">{{ capitalizeFirst(props.value) }}</span>
    </label>
  </button>
</template>

<style scoped>
.check-animate {
  animation: check 0.1s ease-out forwards;
  transform: scale(1.1);
}
@keyframes check {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1.1);
  }
}
</style>
