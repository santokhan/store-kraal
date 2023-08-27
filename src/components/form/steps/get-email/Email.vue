<template>
  <div class="h-[100dvh] relative overflow-auto bg-gray-50">
    <QContainer>
      <QHead :prevForm="back" />
      <QMain>
        <form @submit.prevent="nextForm" class="form-box">
          <div class="mb-6 gap-2 items-center relative">
            <label for="email">
              <QTitle class="text-slate-700"
                >Enter your email To see how Kraal works to help you grow your net
                worth.</QTitle
              >
            </label>
            <div class="relative">
              <input
                type="email"
                id="email"
                placeholder="Smth@mail.co"
                @input="handleChange"
                class="input-default"
                title="Your email address"
                autocomplete="true"
                :value="email"
              />
              <label
                for="email"
                :class="
                  'block mb-2 text-sm font-medium text-noom-text-900 ' +
                  'absolute right-4 top-1/2 -translate-y-1/2 '
                "
                ><i class="fa fa-envelope text-xl text-gray-500" aria-hidden="true"></i>
              </label>
            </div>
          </div>
          <QNextButton :nextForm="nextForm" :disabled="disabled.value" />
        </form>
      </QMain>
    </QContainer>

    <i
      class="fa fa-envelope text-kraal-blue-500 text-[5rem] rotate-45 absolute left-0 bottom-0 opacity-50"
      aria-hidden="true"
    ></i>
  </div>
</template>

<script setup lang="ts">
import { Ref, reactive, ref, watchEffect } from "vue";
import QContainer from "../layout/QContainer.vue";
import QMain from "../layout/QMain.vue";
import QNextButton from "../layout/QNextButton.vue";
import QTitle from "../layout/QTitle.vue";
import { useFormDataStore } from "../../../../stores/FormData";
import MailChecker from "../../methods/MailChecker";
import QHead from "../layout/QHead.vue";

const formData: any = useFormDataStore();
const email: Ref<string> = ref(formData.user.email);
const disabled: { value: boolean } = reactive({ value: true });
const props = defineProps<{
  id: number;
  back: () => void;
  next: () => void;
}>();

function handleChange(e: any) {
  email.value = e.target.value;
}

function nextForm() {
  formData.$patch({ email: email.value });
  formData.$patch({ user: { email: email.value } });
  props.next();
}

watchEffect(() => {
  disabled.value = !MailChecker(email.value);
});
</script>
