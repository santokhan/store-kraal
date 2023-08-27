<script setup lang="ts">
import { reactive, ref, watchEffect } from "vue";
import { useRouter } from "vue-router";

const { next }:any = defineProps({ next: Function });

const open = reactive({ value: true });
const router = useRouter();

// const accept = () => {
//   open.value = false;
//   // router.replace('/form/21')
// };

const decline = () => {
  open.value = false;
};

function goToPDF() {
  next();
  // router.replace("./form/23");
}

const modalIsOpen = ref(false);
watchEffect(() => {
  setTimeout(() => {
    modalIsOpen.value = true;
  }, 240 * 1000)
})
</script>

<template>
  <div
    v-if="modalIsOpen"
    id="defaultModal"
    tabindex="-1"
    aria-hidden="true"
    :class="
      'fixed top-0 left-0 right-0 z-50 w-full h-screen ' +
      'px-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full bg-black/50 backdrop-blursm ' +
      'flex justify-center items-center '
    "
  >
    <div
      :class="
        'relative w-full h-full max-w-2xl md:h-auto ' +
        'flex justify-center items-center '
      "
    >
      <div
        class="relative bg-white rounded-2xl shadow p-8 space-y-5 flex flex-col items-center text-center"
      >
        <div class="flex items-start justify-between">
          <p class="text-xl font-semibold text-noom-text">Kraal Plan Draft - 1</p>
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
        <div class="">
          <p class="text-base leading-relaxed text-noom-text">
            Next we’ll write your 3 year strategic plan. We call it the Rich Plan.
          </p>
        </div>
        <div class="flex items-center border-gray-200 rounded-b">
          <button
            data-modal-hide="defaultModal"
            type="button"
            @click="goToPDF"
            :class="
              'text-white bg-kraal-blue-500 hover:bg-kraal-blue-700 font-semibold rounded-2xl text-base px-8 py-3 text-center ' +
              'shadow-lg shadow-kraal-blue-500/20 '
            "
          >
            Preview Plan
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
