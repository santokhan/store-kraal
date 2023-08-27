<script lang="ts" setup>
import { ref } from "vue";

const { handleChange, index }: any = defineProps({
  handleChange: Function,
});

const answer = ref("");
function clearInput() {
  answer.value = "";
}

function handleInput(e: any) {
  answer.value = e.target.value;
  handleChange(answer.value);
}
</script>

<template>
  <div class="relative">
    <input
      type="text"
      name="answer"
      placeholder="Answer here"
      required="true"
      @input="handleInput"
      :value="answer"
      class="input-default"
      title="Question & answer"
    />
    <button
      v-if="answer.length > 0"
      @click="clearInput"
      type="button"
      class="absolute right-4 top-1/2 -translate-y-1/2 hidden"
    >
      <svg
        width="25"
        height="24"
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.5 22C18 22 22.5 17.5 22.5 12C22.5 6.5 18 2 12.5 2C7 2 2.5 6.5 2.5 12C2.5 17.5 7 22 12.5 22Z"
          stroke="#888888"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M9.66992 14.8299L15.3299 9.16992"
          stroke="#888888"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M15.3299 14.8299L9.66992 9.16992"
          stroke="#888888"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
  </div>
</template>
