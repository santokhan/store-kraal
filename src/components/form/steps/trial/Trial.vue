<script setup lang="ts">

import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
//
import active from "../../methods/active";
import GridContainer from "../layout/GridContainer.vue";
import QContainer from "../layout/QContainer.vue";
import QFooter from "../layout/QFooter.vue";
import QHeader from "../layout/QHeader.vue";
import QHead from "../layout/QHead.vue";
import QMain from "../layout/QMain.vue";
import QNextButton from "../layout/QNextButton.vue";
import QProgressBar from "../layout/QProgressBar.vue";
import QRowButton from "../layout/QRowButton.vue";
import QSubTitle from "../layout/QSubTitle.vue";
import QTitle from "../layout/QTitle.vue";
import MobileView from "../../layouts/MobileView.vue";
//
import { useFormDataStore } from "../../../../stores/FormData";
import QCheckBox from "../layout/QCheckBox.vue";
import QRange from "../layout/QRange.vue";
import { setData, setDataSingle } from "../../methods/Form";
import DropDown from "./dropdown/DropDown.vue";
import Animate from "../../animation/Animate.vue";
import CreatePDFFile from "../../../pdf-generator/CreatePDF";
const router: any = useRouter();
const formData: any = useFormDataStore();
const dropdown: any = reactive({ index: null });
const { id, back, next }: any = defineProps({
  id: Number,
  back: Function,
  next: Function,
});

const isAnimate: any = ref({ value: true });
function handleState() {
  isAnimate.value = false;
}

const arr = [5, 10, 15, 20];

function compare() {
  arr.forEach((e, i) => {
    if (formData.trial === e) {
      dropdown.index = i;
      return;
    }
  });
}
function prevForm() {
  back();
}
function nextForm() {
  setTimeout(() => {
    next();
  }, 150);
}

function handleClick(arrItem:any) {
  formData.updateTrial(arrItem);
  compare();
}

const activeClass = (trialState:any, item:any) =>
  trialState === item
    ? "bg-kraal-blue-500 text-white "
    : "bg-secondary-500 hover:bg-secondary-700 ";
</script>

<template>
  <Animate v-if="isAnimate" :handleState="handleState" />

  <div v-else>
    <div class="bg-secondary500">
      <MobileView :class="'bg-transparent'">
        <QHead :prevForm="prevForm"></QHead>
        <div>
          <div class="flex justify-end py-2">
            <span>{{ formData.user.name.firstname || "John Doe" }}</span>
          </div>
          <hr />
          <div class="py-5">
            <QTitle>Try Kraal Go for a week</QTitle>
            <QSubTitle>
              Money shouldn't stand in the way of finding an approach that
              finally adapts to your specific needs, espacially in light of the
              global health crisis.
            </QSubTitle>
            <QSubTitle class="mt-3">
              <span class="font-semibold">
                It costs us approximately $10* to offer 7-day trial.
              </span>
              Please pick an amount that's reasonable for you.
            </QSubTitle>
          </div>
        </div>
      </MobileView>
    </div>
    <MobileView>
      <div class="pt-8 w-full">
        <QTitle>Select a price for your 7-day trial</QTitle>
        <div class="flex justify-center pt-4">
          <div
            v-for="(item, i) of arr"
            :key="i"
            class="w-full grid gap-1 overflow-hidden"
          >
            <button
              type="button"
              @click="
                () => {
                  handleClick(item);
                }
              "
              :class="
                'text-lg font-normal text-center capitalize-first mx-[3px] ' +
                'transition-colors ease-out duration-200 ' +
                'max-w-[92px] w-full h-[60px] px-4 group rounded-lg border-secondary-500 ' +
                activeClass(formData.trialState, item)
              "
            >
              ${{ item }}
            </button>
          </div>
        </div>

        <DropDown :index="dropdown.index"></DropDown>

        <QNextButton
          :nextForm="nextForm"
          :disabled="formData.trialState ? false : true"
          :class="'mt-10'"
        />
      </div>
    </MobileView>
  </div>
</template>
