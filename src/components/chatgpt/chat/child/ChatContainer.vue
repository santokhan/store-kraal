<template>
  <div :class="robotStyle()">
    <div class="mx-auto max-w-4xl px-4 py-6">
      <div class="flex gap-3 items-start whitespace-pre-wrap lg:px-4">
        <slot></slot>
      </div>
      <LikeDislike v-if="robot" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import LikeDislike from "../users/feedback/LikeDislike.vue";

const props = defineProps<{ robot?: boolean }>();

function robotStyle(): string {
  return props.robot ? "bg-chatgpt-400 border-t border-gray-900/50" : "";
}
</script>
