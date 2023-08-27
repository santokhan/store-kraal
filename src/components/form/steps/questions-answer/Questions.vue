<template>
  <div class="bg-gray-100">
    <HeaderSimplified />
    <QContainer>
      <QMain>
        <form class="form-box" @submit.prevent="nextForm">
          <div class="space-y-2">
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
          <div class="space-y-2">
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
          <div class="space-y-2">
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
          <div class="space-y-2">
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
import QContainer from "../layout/QContainer.vue";
import QMain from "../layout/QMain.vue";
import QNextButton from "../layout/QNextButton.vue";
import { useFormDataStore } from "../../../../stores/FormData";
import Warning from "../layout/warnings/Warning.vue";
import HeaderSimplified from "../../../shared/header/HeaderSimplified.vue";

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
interface Props {
  id: number;
  back: () => void;
  next: () => void;
}

const formData: any = useFormDataStore();
const props = defineProps<Props>();
const answer: Answers = reactive({ a: "", b: "", c: "", d: "" });
const warn: Warn = reactive({ a: "", b: "", c: "", d: "" });
const disabled: Ref<boolean> = ref(true);

function nextForm() {
  formData.updateAnswers("a", answer.a);
  formData.updateAnswers("b", answer.b);
  formData.updateAnswers("c", answer.c);
  formData.updateAnswers("d", answer.d);
  props.next();
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

// function handleInitial(e: any) {
//   const value: string = e.target.toUpperCase() || "";

//   const regex: any = /^[A-Z]*$.{0,2}/g;

//   if (value.match(regex)) {
//     warn.d = "";
//     answer.d = value.slice(0, 2);
//   } else {
//     warn.d = "The answer should include letters only.";
//     answer.d = value.slice(0, 2);
//   }
// }

watchEffect(() => {
  function lengthChecker(text: string, limit: number): string {
    return text.length >= limit ? `Maximum character limit is ${limit}.` : "";
  }
  warn.a = lengthChecker(answer.a, 50);
  warn.b = lengthChecker(answer.b, 100);

  // function initialLengthChecker(text: string, limit: number): string {
  //   if (text.length >= limit) {
  //     return `Maximum character limit is ${limit}.`;
  //   } else {
  //     const regex = /[0-9]/g;

  //     if (text.match(regex)) {
  //       return "Initial should be include letter only";
  //     } else {
  //       return "";
  //     }
  //   }
  // }
  // warn.d = initialLengthChecker(answer.d, 2);

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
