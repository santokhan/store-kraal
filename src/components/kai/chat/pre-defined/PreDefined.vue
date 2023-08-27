<template>
  <div
    class="max-w-3xl mx-auto grid place-items-center h-full w-full px-4 py-12 space-y-16"
  >
    <div><Kraal class="w-28"></Kraal></div>
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 justify-center">
      <div v-for="(arr, ind) in questions" :key="ind" class="space-y-4 text-center py-4">
        <h5 class="text-lg font-semibold">{{ titles[ind] }}</h5>
        <button
          type="button"
          class="bg-white/5 w-full rounded-md p-3 text-white text-sm hover:bg-stone-900"
          v-for="(e, i) in arr"
          :key="i"
        >
          "{{ e }}"
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Kraal from "../../../icons/kraal.vue";

const props: any = defineProps({ handlePreQues: Function });
const titles = ["Examples", "Capabilities", "Limitations"];
const questions = [
  [
    "Explain quantum computing in simple terms",
    "Got any creative ideas for a 10 year old’s birthday?",
    "How do I make an HTTP request in Javascript?",
  ],
  [
    "Remembers what user said earlier in the conversation",
    "Allows user to provide follow-up corrections",
    "Trained to decline inappropriate requests",
  ],
  [
    "May occasionally generate incorrect information",
    "May occasionally produce harmful instructions or biased content",
    "Limited knowledge of world and events after 2021",
  ],
];

// let organizeQues = questions.map((e) => {
//   return [e[0], e[1], e[2]];
// });
</script>
