<template>
  <div
    class="h-screen w-screen fixed left-0 top-0 flex justify-center items-center z-50 bg-[rgba(52,53,65,.9)]"
  >
    <form
      class="bg-[#202123] p-4 lg:p-6 m-4 rounded-lg w-full max-w-4xl space-y-4 lg:space-y-6"
    >
      <div class="flex justify-between">
        <div class="flex items-center">
          <div
            class="mr-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full sm:h-10 sm:w-10 bg-green-100"
          >
            <svg
              stroke="currentColor"
              fill="none"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-6 w-6 text-green-700"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"
              ></path>
            </svg>
          </div>
          <h3 class="text-lg font-medium leading-6 text-gray-200">
            Provide additional feedback
          </h3>
        </div>
        <button type="button" @click="props.handleFeedback">
          <Cross class="w-[14px] text-gray-200" />
        </button>
      </div>

      <textarea
        name="feedback"
        id="feedback"
        rows="3"
        class="w-full bg-chatgpt-500 rounded-lg resize-none px-3 py-2 outline outline-1 outline-white/50 focus:outline-2 focus:outline-white"
        placeholder="What do you like about the response"
      ></textarea>

      <div class="flex justify-end">
        <button
          type="button"
          class="bg-chatgpt-500 px-4 py-2 rounded outline outline-1 outline-white/50 focus:outline-2 focus:outline-white text-sm text-gray-300"
          @click="props.handleFeedback"
        >
          Submit feedback
        </button>
      </div>
    </form>
  </div>
</template>

<script lang="ts" setup>
import Cross from "../../../../../icons/cross.vue";

const props: any = defineProps({ handleFeedback: Function });
</script>
