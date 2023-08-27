<script lang="ts" setup>
import { reactive, ref, watchEffect } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

const open = reactive({ value: true });
const decline = () => {
  open.value = false;
};

function goToPayment() {
  return;
  router.replace("");
}

const isModalOpen = ref(false);
watchEffect(() => {
  const modalOpenningTime = 120 * 1000; // 1s = 1000ms
  setTimeout(() => {
    isModalOpen.value = true;
  }, modalOpenningTime);
});
</script>

<template>
  <div
    v-if="isModalOpen"
    id="defaultModal"
    tabindex="-1"
    aria-hidden="true"
    :class="
      'fixed top-0 left-0 right-0 z-50 w-full h-screen ' +
      'px-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full bg-black/80 backdrop-blur[2px] ' +
      'flex place-content-center '
    "
  >
    <div
      :class="
        'relative w-full h-full max-w-2xl md:h-auto ' +
        'flex place-items-center '
      "
    >
      <div
        class="w-full relative bg-kraal-blue-500 text-white rounded-[1.25rem] shadow p-1 space-y-1"
      >
        <div class="flex items-start justify-between rounded-t">
          <p
            class="text-2xl font-semibold text-noom-text w-full text-center py-4 drop-shadow"
          >
            Subscribe
          </p>
          <button
            type="button"
            @click="decline"
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-noom-text-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center hidden"
            data-modal-hide="defaultModal"
          >
            <svg
              aria-hidden="true"
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <div
          class="bg-white rounded-2xl text-noom-text-800 p-6 text-center space-y-1"
        >
          <p class="text-xl leading-relaxed text-noom-text font-medium">
            Subcribe Today For Only
          </p>
          <p class="leading-relaxed text-kraal-blue-500 text-4xl font-semibold">
            $5/weeks
          </p>
          <p class="text-sm leading-relaxed text-noom-text pb-2">
            Cancel beforehand
          </p>
          <div class="flex justify-center border-gray-200 rounded-b">
            <button
              data-modal-hide="defaultModal"
              type="button"
              @click="goToPayment"
              :class="
                'text-white bg-kraal-blue-500 hover:bg-kraal-blue-700 font-semibold rounded-2xl text-base px-8 py-3 text-center ' +
                'shadow-lg shadow-kraal-blue-500/20 '
              "
            >
              Pay Now
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
