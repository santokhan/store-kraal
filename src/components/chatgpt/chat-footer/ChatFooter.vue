<template>
  <div class="h-auto w-full border-t xl:border-none border-white/20">
    <div :class="`max-w-4xl mx-auto mt-auto bg-chatgpt-500 px-4 pt-2`" title="footer">
      <ChatInput :handleSubmitedText="props.handleSubmitedText" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
import ChatInput from "./form/ChatInput.vue";
import { useCurrentUser } from "vuefire";

const router = useRouter();

const props = defineProps<{
  handleSubmitedText: (message: string) => void;
}>();

// redirect if logged in
function goToLogin() {
  const currentUser = useCurrentUser();
  if (currentUser) {
    router.push("/dashboard");
  } else {
    router.push("/signin");
  }
}
</script>
