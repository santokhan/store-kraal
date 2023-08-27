<template>
  <button class="menu-button__lines" @click="handleBars">
    <span
      class="menu-button__line menu-button__line--1"
      :style="{ transform: isOpen ? 'scaleX(0)' : '' }"
    ></span>
    <span
      class="menu-button__line menu-button__line--2"
      :style="{ transform: isOpen ? 'rotate(45deg)' : '' }"
    ></span>
    <span
      class="menu-button__line menu-button__line--3"
      :style="{ transform: isOpen ? 'rotate(-45deg)' : '' }"
    ></span>
    <span
      class="menu-button__line menu-button__line--4"
      :style="{ transform: isOpen ? 'scaleX(0)' : '' }"
    ></span>
  </button>
</template>

<script setup lang="ts">
import { ref } from "vue";

const props = defineProps<{ toggle: () => void }>();

const isOpen = ref<boolean>(false);
function handleBars() {
  isOpen.value = !isOpen.value;
  props.toggle();
}
</script>

<style scoped>
.menu-button__lines {
  position: relative;
  width: 28px;
  height: 20px;
}
.menu-button__line--1 {
  top: 0px;
}
.menu-button__line {
  display: block;
  position: absolute;
  width: 100%;
  height: 2px;
  left: 0%;
  background: #ffffff;
  transform: rotate(0deg);
  transition: 300ms;
  border-radius: 1rem;
}
.menu-button__line--2,
.menu-button__line--3 {
  top: calc(50% - 1px);
}

.menu-button__line--2,
.menu-button__line--3 {
  top: calc(50% - 1px);
}

.menu-button__line--4 {
  bottom: 0px;
}
</style>
