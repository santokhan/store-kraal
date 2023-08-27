<script setup lang="ts">
import { useRouter } from "vue-router";
import Modal from "../components/dashboard/modal/Modal.vue";
import Container from "../components/form/layouts/Container.vue";
import QHead from "../components/form/steps/layout/QHead.vue";
import QHeader from "../components/form/steps/layout/QHeader.vue";
import QMain from "../components/form/steps/layout/QMain.vue";
import Kraal from "../components/icons/kraal.vue";

const router = useRouter();

function nextPage() {
  router.replace("/dashboard");
}
</script>

<template>
  <Modal></Modal>

  <div class="bg-gray-50 h-screen">
    <Container>
      <div class="w-full text-noom-text-900">
        <div class="flex justify-between py-4">
          <div><Kraal class="h-6" /></div>
          <button
            type="button"
            class="w-5 hover:text-kraal-blue-700 focus-within:scale-90"
            @click="nextPage"
          >
            <svg
              width="23"
              height="22"
              viewBox="0 0 23 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2.84467 2.09467C4.17914 0.760201 6.17603 0.25 8.75 0.25H14.75C17.324 0.25 19.3209 0.760201 20.6553 2.09467C21.9898 3.42914 22.5 5.42603 22.5 8V14C22.5 16.574 21.9898 18.5709 20.6553 19.9053C19.3209 21.2398 17.324 21.75 14.75 21.75H8.75C6.17603 21.75 4.17914 21.2398 2.84467 19.9053C1.5102 18.5709 1 16.574 1 14V8C1 5.42603 1.5102 3.42914 2.84467 2.09467ZM3.90533 3.15533C2.9898 4.07086 2.5 5.57397 2.5 8V14C2.5 16.426 2.9898 17.9291 3.90533 18.8447C4.82086 19.7602 6.32397 20.25 8.75 20.25H14.75C17.176 20.25 18.6791 19.7602 19.5947 18.8447C20.5102 17.9291 21 16.426 21 14V8C21 5.57397 20.5102 4.07086 19.5947 3.15533C18.6791 2.2398 17.176 1.75 14.75 1.75H8.75C6.32397 1.75 4.82086 2.2398 3.90533 3.15533ZM8.38965 7.63971C8.68254 7.34682 9.15741 7.34682 9.45031 7.63971L11.75 9.93937L14.0497 7.63971C14.3426 7.34682 14.8174 7.34682 15.1103 7.63971C15.4032 7.93261 15.4032 8.40748 15.1103 8.70037L12.8107 11L15.1103 13.2997C15.4032 13.5926 15.4032 14.0674 15.1103 14.3603C14.8174 14.6532 14.3426 14.6532 14.0497 14.3603L11.75 12.0607L9.45031 14.3603C9.15741 14.6532 8.68254 14.6532 8.38965 14.3603C8.09676 14.0674 8.09676 13.5926 8.38965 13.2997L10.6893 11L8.38965 8.70037C8.09676 8.40748 8.09676 7.93261 8.38965 7.63971Z"
                fill="currentColor"
                stroke="currentColor"
                stroke-width="0.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </Container>
    <Container>
      <div class="w-full">
        <div class="w-full">
          <div class="text-xl my-6 font-semibold">Smart Brevity Report</div>
        </div>
        <div class="space-y-3">
          <div
            class="bg-white p-4 space-y-2 rounded-lg shadow-lg shadow-noom-text-900/5 hover:shadow-none"
          >
            <div class="bg-gray-50 p-2 rounded-full"></div>
            <div class="bg-gray-50 p-2 rounded-full w-1/2"></div>
          </div>
          <div
            class="bg-white p-4 space-y-2 rounded-lg shadow-lg shadow-noom-text-900/5 hover:shadow-none"
          >
            <div class="bg-gray-50 p-2 rounded-full"></div>
            <div class="bg-gray-50 p-2 rounded-full w-1/2"></div>
          </div>
          <div
            class="bg-white p-4 space-y-2 rounded-lg shadow-lg shadow-noom-text-900/5 hover:shadow-none"
          >
            <div class="bg-gray-50 p-2 rounded-full"></div>
            <div class="bg-gray-50 p-2 rounded-full w-1/2"></div>
          </div>
          <div
            class="bg-white p-4 space-y-2 rounded-lg shadow-lg shadow-noom-text-900/5 hover:shadow-none"
          >
            <div class="bg-gray-50 p-2 rounded-full"></div>
            <div class="bg-gray-50 p-2 rounded-full w-1/2"></div>
          </div>
          <div
            class="bg-white p-4 space-y-2 rounded-lg shadow-lg shadow-noom-text-900/5 hover:shadow-none"
          >
            <div class="bg-gray-50 p-2 rounded-full"></div>
            <div class="bg-gray-50 p-2 rounded-full w-1/2"></div>
          </div>
        </div>
      </div>
    </Container>
  </div>
</template>
