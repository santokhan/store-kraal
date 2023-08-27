<template>
  <button
    type="button"
    class="bg-kraal-blue-500 rounded-full px-2.5 py-[2px] text-white shadow-md"
    @click="handleRead"
  >
    <div class="flex justify-center items-center gap-1 text-sm">
      <span>Read more</span>
      <AngleDown class="w-3" :class="isOpen ? 'rotate-180' : ''" />
    </div>
  </button>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import AngleDown from "../../icons/angle-down.vue";

const isOpen = ref(false);

const props = defineProps<{
  handleLearnMore: Function;
}>();

function handleRead() {
  props.handleLearnMore();
  isOpen.value = !isOpen.value;
}
</script>
