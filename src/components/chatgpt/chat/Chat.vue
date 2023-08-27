<template>
  <div class="fixed left-0 top-0 right-0 bottom-0 bg-chatgpt-500 z-50">
    <div class="flex flex-col justify-between h-full">
      <ChatHeader />

      <div ref="chatMain" class="h-full overflow-y-auto text-white">
        <RobotRes1 :eleScrollTop="eleScrollTop" />
        <ChatUser v-if="userInput1">{{ userInput1 }}</ChatUser>
        <RobotResReport v-if="userInput1" :eleScrollTop="eleScrollTop" />
      </div>

      <div
        :class="`max-w-4xl mx-auto mt-auto h-auto w-full 
        bg-chatgpt-500 border-t xl:border-none border-white/20 px-4 py-2`"
      >
        <ChatInput :handleList="handleList" />
        <div class="text-center">
          <button
            type="button"
            @click="nextForm"
            class="text-gray-300 underline hover:text-white text-sm"
          >
            Go to dashboard
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, Ref } from "vue";
import ChatHeader from "./header/ChatHeader.vue";
import ChatInput from "./child/ChatInput.vue";
import ChatUser from "./users/ChatUser.vue";
import { data } from "./response";
import { useFormDataStore } from "../../../stores/FormData";
import RobotRes1 from "./users/RobotRes1.vue";
import RobotResReport from "./users/RobotResReport.vue";
import { useRouter } from "vue-router";

const router = useRouter();

interface Response {
  question: string;
  answer: string;
}

const props = defineProps<{
  id: number;
  back: () => void;
  next: () => void;
}>();

function nextForm() {
  router.replace("/signin");
}

const chatMain: any = ref(null);
// Will be called on typewriter
function eleScrollTop() {
  const ele = chatMain.value;
  const rect = ele.getBoundingClientRect();
  ele.scrollTop += rect.height;
}

const userInput1: Ref<string> = ref("");
function handleList(data: string) {
  // search(data);

  if (!userInput1.value) {
    userInput1.value = data;
  }
}

function filterQuestion(question: string): string {
  let text = question.trim();

  if (text.includes("?")) {
    text.replaceAll(/[?]/g, "");
  } else if (text.includes(",")) {
    text.replaceAll(/[,]/g, "");
  }

  return text.toLowerCase();
}
// function search(question: string) {
//   data.then((data) => {
//     const firebaseResponse = data[0].response;

//     let update = firebaseResponse.filter((e: Response) => {
//       if (e.question == filterQuestion(question)) {
//         return true;
//       } else {
//         return false;
//       }
//     });

//     if (update.length === 0) {
//       update = [
//         {
//           question: question,
//           answer: `Hi ${formData.user.name.firstname || "Nuku"}
// I’m K.AI. You can call me Kai.
// Here are your linked accounts.
//  • Bank of America 455666’
//  • Yale debt
//  • US bank loan.

// If we are missing checking, savings, credit card accounts you haven’t linked, please link them now.
// `,
//         },
//       ];
//     }

//     const crntArray = dbAnsList.value;
//     dbAnsList.value = [...crntArray, ...update];
//   });
// }
</script>

<style scoped>
/* Most important */
.chat-screen {
  height: -webkit-fill-available !important;
}
@media (min-width: 576px) {
  .chat-screen {
    height: 100vh !important;
  }
}
</style>
