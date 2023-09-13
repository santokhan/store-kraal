<template>
  <!-- Do not use parent div in this instance -->
  <ChatMain v-if="!props.hidden" />

  <Typewriter />

  <ChatFooter v-if="!props.hidden" />
</template>

<script lang="ts" setup>
import ChatFooter from "../chat-footer/ChatFooter.vue";
import Typewriter from "../typewriter/Typewriter.vue";
import ChatMain from "./chat-main/ChatMain.vue";

interface Props { hidden: boolean }
const props = defineProps<Props>();
</script>
