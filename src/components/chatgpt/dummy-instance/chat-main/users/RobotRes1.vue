<template>
  <div class="bg-chatgpt-400 border-t border-gray-900/50">
    <ChatContainer :robot="true">
      <Profile user="robot" />
      <ChatText>
        <TypeWriter
          :text="res1(formData.user.name.firstname)"
          :finishTyping="handleFinish"
          :eleScrollTop="props.eleScrollTop"
        />
        <div v-if="isFinish" class="space-x-2 py-4 flex items-center">
          <RouterLink
            to="/form/12"
            class="text-noom-text-800 px-3 lg:px-3 h-8 flex justify-center items-center rounded-md bg-gray-300 hover:bg-white"
          >
            Link
          </RouterLink>
          <button
            type="button"
            @click="handleReport"
            class="text-noom-text-800 px-3 lg:px-3 h-8 flex justify-center items-center rounded-md bg-gray-300 hover:bg-white"
          >
            Done
          </button>
        </div>
        <div ref="planeIcon">
          <TypeWriter
            v-if="isDone"
            :text="res2(formData.user.name.firstname)"
            :finishTyping="() => {}"
            :eleScrollTop="props.eleScrollTop"
          />
        </div>
      </ChatText>
    </ChatContainer>
  </div>
</template>

<script lang="ts" setup>
import { RouterLink } from "vue-router";
import TypeWriter from "./TypeWriter.vue";
import { Ref, onMounted, ref, watchEffect } from "vue";
import { res1, res2 } from "./chatResponse";
import ChatContainer from "./ChatContainer.vue";
import Profile from "./Profile.vue";
import ChatText from "../ChatText.vue";
import { useFormDataStore } from "../../../../../stores/FormData";

const props: any = defineProps({ eleScrollTop: Function });
const formData: any = useFormDataStore();

const isFinish: Ref<boolean> = ref(false);
function handleFinish() {
  isFinish.value = true;
}

const isDone: Ref<boolean> = ref(false);
function handleReport() {
  isDone.value = true;
}
</script>
