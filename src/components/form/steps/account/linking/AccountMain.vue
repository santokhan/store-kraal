<script lang="ts" setup>
import { ref, watchEffect } from "vue";
import { useFormDataStore } from "../../../../../stores/FormData";
import QContainer from "../../layout/QContainer.vue";
import QHeader from "../../layout/QHeader.vue";
import QMain from "../../layout/QMain.vue";
import Link from "./Link.vue";
import DarkButton from "../../layout/DarkButton.vue";
import DarkButtonOutline from "../../layout/DarkButtonOutline.vue";
import Card from "../../../../icons/card.vue";
import Loans from "../../../../icons/loans.vue";
import Exchange from "../../../../icons/exchange.vue";
import Bank from "../../../../icons/bank.vue";

const formData: any = useFormDataStore();
const { id, back, next, handleMintSecurityInfo }: any = defineProps({
  id: Number,
  back: Function,
  next: Function,
  handleMintSecurityInfo: Function,
});

function prevForm() {
  back();
}
function nextForm() {
  next();
}

const disabled = ref(true);
function handleDisable() {
  disabled.value = !disabled.value;
}

// const isAnimate: any = ref({ value: true });
// function handleAnimate() {
//   isAnimate.value = false;
// }

const { firstname }: { firstname: string } = formData.user.name;
const list = [
  { title: "Bank of America checking", rate: 400, url: "" },
  { title: "Capital One Credit Card", rate: -890, url: "" },
  { title: "Yale student loans", rate: -70546, url: "" },
];
const sum = list.reduce((acc, counter) => acc + counter.rate, 0);
const moneyBorder = sum > 0 ? "border-green-500" : "border-red-500";
const moneyText = sum > 0 ? "text-green-500" : "text-red-500";

const popupIsOpen = ref(true);
function moveUpAndDown() {
  if (popupIsOpen.value) {
    popupIsOpen.value = false;
  } else {
    popupIsOpen.value = true;
  }
}

const moveStyles = ref("");
watchEffect(() => {
  function onClictOutSide() {
    document.addEventListener("click", (e: any) => {
      if (e.target.classList.contains("modal-popup") === false) {
        popupIsOpen.value = false;
      }
    });
  }
  onClictOutSide();

  function popUpStyle() {
    if (popupIsOpen.value) {
      moveStyles.value = "animate-pop-up ";
    } else {
      moveStyles.value = "animate-pop-down ";
    }
  }
  popUpStyle();
});
</script>

<template>
  <div>
    <!-- <Animate v-if="isAnimate" :handleState="handleAnimate" /> -->
    <div class="bg-gray-100 relative" >
      <QContainer>
        <QHeader :prevForm="prevForm" />
        <QMain>
          <div class="flex justify-center text-center hidden">
            <div
              :class="
                'bg-white rounded-full w-36 h-36 border ' +
                'flex flex-col items-center justify-center ' +
                'shadow-default ' +
                moneyBorder
              "
            >
              <div class="text-lg font-semibold">
                {{ firstname || "John Smith" }}
              </div>
              <div :class="'text-lg font-semibold ' + moneyText">
                ${{ sum.toLocaleString() }}
              </div>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-2 px-4 py-4 mt-12">
            <Link to=""><Bank />Bank Accounts</Link>
            <Link to=""><Card />Credit Card</Link>
            <Link to=""><Loans />Loans</Link>
            <Link to=""><Exchange />Others</Link>
          </div>
        </QMain>
      </QContainer>

      <div
        class="fixed left-0 top-0 w-full h-screen bg-black/10 z-10"
        v-if="popupIsOpen"
      ></div>
      <div
        :class="
          'fixed bottom-0 left-0 w-full border rounded-t-[32px] bg-white shadow-xl z-20 text-noom-text-800 modal-popup ' +
          moveStyles
        "
      >
        <div class="max-w-[432px] mx-auto px-1 py-3 modal-popup">
          <div class="flex justify-center modal-popup">
            <button @click="moveUpAndDown" type="button" class="modal-popup">
              <div
                class="block h-[6px] w-12 mx-auto rounded bg-gray-200 m-2 modal-popup"
              ></div>
            </button>
          </div>

          <div class="px-5 py-3 font-medium text-noom-text-700 modal-popup">
            To create your dashboard, let’s review your bank and credit
            transactions by clicking the "Link" button. For safety information,
            <button
              type="button"
              class="underline hover:no-underline modal-popup"
              @click="handleMintSecurityInfo"
            >
              click here.
            </button>
          </div>
          <div class="flex gap-4 justify-center px-4 mt-2 modal-popup">
            <DarkButtonOutline @click="nextForm">Done</DarkButtonOutline>
            <DarkButton @click="moveUpAndDown">Link</DarkButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.animate-pop-up {
  animation: popup 0.45s ease-out forwards;
}

@keyframes popup {
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0%);
  }
}

.animate-pop-down {
  animation: popdown 0.25s ease-in forwards;
}
@keyframes popdown {
  0% {
    transform: translateY(0%);
  }
  100% {
    transform: translateY(calc(100% - 48px));
  }
}
</style>
