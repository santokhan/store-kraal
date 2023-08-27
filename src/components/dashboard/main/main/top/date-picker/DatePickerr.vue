<template>
  <div class="relative">
    <button type="button" for="datePicker" @click="expandDatePicker = !expandDatePicker" ref="toggler" :class="[
      'rounded-lg h-8 text-sm sm:text-base bg-transparent text-gray-500 border px-3 z-5 font-medium',
      'hover:border-kraal-blue-500 hover:text-kraal-blue-500 focus:border-kraal-blue-500 focus:text-kraal-blue-500',
    ]">
      Today
    </button>


    <!-- Dropdown Form -->
    <form v-if="expandDatePicker" @submit="handleSubmit" ref="dropdown" :class='[
      "z-10 bg-white rounded-xl border shadow-xl shadow-gray-200 px-4 py-3 space-y-4 drop",
      "w-60 absolute right-0 top-10 transition-transform ease-in-out",
    ]'>
      <label for="datePicker"><span class="px-1 font-semibold">Filter by</span></label>
      <div class="space-y-1 flex items-center gap-2">
        <label for="datePicker"><span class="px-1">Date</span></label>
        <DateInput v-model="date" />
      </div>
      <div class="space-y-1 flex items-center gap-2">
        <label for="datePicker"><span class="px-1">To</span></label>
        <DateInput v-model="date" />
      </div>
      <div class="flex">
        <!-- This button will hide dropdown -->
        <FilterSubmit/>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { onClickOutside } from "@vueuse/core";
import { ref } from "vue";
import DateInput from "./DateInput.vue";
import FilterSubmit from "../../../../../shared/dashboard/card/FilterSubmit.vue";

const props = defineProps<{ handleFilterForm: (date: string) => void }>()

const expandDatePicker = ref(false);
const dropdown = ref<null | HTMLElement>(null)
const toggler = ref<null | HTMLElement>(null)
const formattedDate = new Date().toLocaleDateString('en-US').replaceAll("/", "-");
const date = ref<string>(formattedDate)

function handleSubmit(e: null | Event) {
  e?.preventDefault();
  expandDatePicker.value = false;

  // lifting state up to filter statements
  props.handleFilterForm(date.value)
}

onClickOutside(dropdown, () => {
  expandDatePicker.value = false;
}, { ignore: [toggler] })
</script>

<style scoped>
.drop {
  animation: drop 150ms ease-in-out forwards;
  transform-origin: top right;
}

@keyframes drop {
  0% {
    transform: scale(.75);
  }

  80% {
    transform: scale(1.1);
  }

  100% {
    transform: scale(1);
  }
}
</style>
