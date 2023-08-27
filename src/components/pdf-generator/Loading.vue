<template>
  <QContainer class="bg-transparent">
    <QHead :prevForm="props.back" />
    <QMain>
      <div class="w-full flex flex-col items-start space-y-5">
        <QTitle>
          KraalAI is the perfect complement to your finance team. Available 24/7!
        </QTitle>
        <div class="w-full flex justify-center pt-2">
          <img
            :src="FigmaUi"
            alt="kraal-girl"
            class="w-full h-72 object-contain overflow-hidden png-image-shadow px-8"
          />
        </div>
        <div class="text-center w-full h-4">
          {{ loadingMessage() }}
        </div>
        <div class="w-full py-4">
          <div
            class="w-full h-14 bg-kraal-blue-500/10 rounded-full overflow-hidden"
            title="loading range"
          >
            <div
              class="h-full flex justify-center items-center font-semibold text-white bg-kraal-blue-500 shadow rounded-full"
              :style="{ width: count + '%' }"
            >
              {{ count }}%
            </div>
          </div>
        </div>
        <div class="py-10"></div>
      </div>
      <FixedBottom v-if="count == 100">
        <QNextButton :nextForm="props.next"></QNextButton>
      </FixedBottom>
    </QMain>
  </QContainer>
</template>

<script lang="ts" setup>
import { watchEffect, ref } from "vue";
import QContainer from "../form/steps/layout/QContainer.vue";
import QHead from "../form/steps/layout/QHead.vue";
import QMain from "../form/steps/layout/QMain.vue";
import QNextButton from "../form/steps/layout/QNextButton.vue";
import QTitle from "../form/steps/layout/QTitle.vue";
import FigmaUi from "../../assets/image/figma-ui.png";
import { useFormDataStore } from "../../stores/FormData";
import FixedBottom from "../form/steps/layout/FixedBottom.vue";

const formData: any = useFormDataStore();
const props = defineProps<{
  id: number;
  back: () => void;
  next: () => void;
}>();

const disabled: any = ref(false);
const count: any = ref(0);
const process: string[] = [
  "Analyzing transactions",
  "Normalizing data",
  "Extracting information",
  "Building report",
  "Finalizing report",
];

// animation loading function
function loadingMessage(): string {
  if (0 < count.value && count.value <= 20) {
    return process[0];
  } else if (20 < count.value && count.value <= 40) {
    return process[1];
  } else if (40 < count.value && count.value <= 60) {
    return process[2];
  } else if (60 < count.value && count.value <= 80) {
    return process[3];
  } else if (80 < count.value && count.value < 100) {
    return process[4];
  } else {
    return "";
  }
}

watchEffect(() => {
  function loading(): void {
    if (formData.loading) {
      const interval = setInterval(() => {
        count.value = count.value + 1;
        if (count.value === 100) {
          clearInterval(interval);
          formData.$patch({ loading: false });
          // next();
        }
      }, 50);
    } else {
      count.value = 100;
      disabled.value = true;
    }
  }
  loading();
});
</script>
