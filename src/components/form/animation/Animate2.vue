<script lang="ts" setup>import { reactive } from "vue";
//
import GreenBoard from "./child/GreenBoard.vue";
import WhiteBoard from "./child/WhiteBoard.vue";

const { handleState } :any= defineProps({ handleState: Function });

const state = reactive({ greenBoard: false });

setTimeout(() => {
  state.greenBoard = true;
}, 4500);
</script>

<template>
  <div class="w-full h-screen bg-white overflow-hidden fixed z-50">
    <WhiteBoard />
    <GreenBoard v-if="state.greenBoard" :handleState="handleState" />
  </div>
</template>
