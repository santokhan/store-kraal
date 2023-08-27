<template>
  <div class="bg-gray-100 h-[100dvh]">
    <HeaderSimplified />
    <QContainer>
      <QMain>
        <form
          class="form-box text-slate-700"
          data-title="form"
          @submit.prevent="nextForm"
        >
          <div class="space-y-3">
            <h3 class="font-bold text-xl pb-4 border-b mb-3">Let's get started</h3>
            <label for="bought">
              Think of something you bought or paid for recently that made you smile.
            </label>
            <input
              type="text"
              class="input-default"
              maxlength="50"
              placeholder="Answer here"
              id="bought"
              v-model="answer.a"
            />
            <Warning :message="warn.a" />
          </div>
          <div class="space-y-3">
            <label for="happy">Why did it make you happy?</label>
            <input
              type="text"
              class="input-default"
              maxlength="100"
              placeholder="Answer here"
              id="happy"
              v-model="answer.b"
            />
            <Warning :message="warn.b" />
          </div>
          <div class="space-y-3">
            <label for="spend">How much did you spend?</label>
            <div class="relative">
              <div
                class="absolute top-1/2 -translate-y-1/2 translate-x-4 text-lg font-medium text-gray-400 z-20"
              >
                $
              </div>
              <input
                type="number"
                class="input-default pl-8"
                id="spend"
                step="0.01"
                @input="handleAmount"
                :value="answer.c"
                placeholder="0"
              />
            </div>
            <Warning :message="warn.c" />
          </div>
          <div class="space-y-3">
            <label for="initials">Add your initials</label>
            <input
              type="text"
              id="initials"
              class="input-default uppercase"
              maxlength="2"
              placeholder="AA"
              v-model="answer.d"
            />
            <Warning :message="warn.d" />
          </div>
          <QNextButton type="submit" :disabled="disabled" />
        </form>
      </QMain>
    </QContainer>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, watchEffect, Ref } from "vue";
import HeaderSimplified from "../../../../shared/header/HeaderSimplified.vue";
import QContainer from "../../layout/QContainer.vue";
import QMain from "../../layout/QMain.vue";
import Warning from "../../layout/warnings/Warning.vue";
import QNextButton from "../../layout/QNextButton.vue";
import { useFormDataStore } from "../../../../../stores/FormData";

interface Answers {
  a: string;
  b: string;
  c: number | string;
  d: string;
}
interface Warn {
  a: string;
  b: string;
  c: string;
  d: string;
}

const formData: any = useFormDataStore();
const props: any = defineProps({ openAnsView: Function });
const answer: Answers = reactive({ a: "", b: "", c: "", d: "" });
const warn: Warn = reactive({ a: "", b: "", c: "", d: "" });
const disabled: Ref<boolean> = ref(true);

function nextForm() {
  formData.updateAnswers("a", answer.a);
  formData.updateAnswers("b", answer.b);
  formData.updateAnswers("c", answer.c);
  formData.updateAnswers("d", answer.d);
  props.openAnsView();
}

// !Important
function handleAmount(e: any) {
  let dollar: number = e.target.value;
  let dollarStr: string = dollar.toString();
  const slice = parseInt(dollarStr.slice(0, 7));

  // Maximum character limit is 7
  if (dollarStr.length < 8) {
    answer.c = slice;
    warn.c = "";
  } else {
    e.target.value = slice;
    answer.c = slice;
    warn.c = "";
  }
}

watchEffect(() => {
  function lengthChecker(text: string, limit: number): string {
    return text.length >= limit ? `Maximum character limit is ${limit}.` : "";
  }
  warn.a = lengthChecker(answer.a, 50);
  warn.b = lengthChecker(answer.b, 100);

  function disabledChecker() {
    if (answer.a && answer.b && answer.d) {
      disabled.value = false;
    } else {
      disabled.value = true;
    }
  }
  disabledChecker();
});
</script>
