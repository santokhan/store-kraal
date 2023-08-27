<script lang="ts" setup>
import { reactive, watchEffect, ref } from "vue";
import { useRouter } from "vue-router";
//
import active from "../../methods/active";
import GridContainer from "../layout/GridContainer.vue";
import QContainer from "../layout/QContainer.vue";
import QFooter from "../layout/QFooter.vue";
import QHead from "../layout/QHead.vue";
import QMain from "../layout/QMain.vue";
import QNextButton from "../layout/QNextButton.vue";
import QProgressBar from "../layout/QProgressBar.vue";
import QRowButton from "../layout/QRowButton.vue";
import QSubTitle from "../layout/QSubTitle.vue";
import QTitle from "../layout/QTitle.vue";
//
import FigmaUi from "../../../../assets/image/figma-ui.png";
import { useFormDataStore } from "../../../../stores/FormData";

const formData: any = useFormDataStore();
const { id, back, next }: any = defineProps({
  id: Number,
  back: Function,
  next: Function,
});
const router: any = useRouter();

const prevForm = () => {
  back();
};
const nextForm = () => {
  next();
};

const disabled: any = ref(false);
const count: any = ref(0);
if (formData.loading) {
  const interval = setInterval(() => {
    count.value = count.value + 1;
    if (count.value === 100) {
      clearInterval(interval);
      formData.$patch({ loading: false });
      next();
    }
  }, 50);
} else {
  count.value = 100;
  disabled.value = true;
}
</script>

<template>
  <QContainer class="bg-transparent">
    <QHead :prevForm="prevForm"></QHead>
    <QMain>
      <div class="w-full flex flex-col items-start">
        <QTitle>
          Join the Kraal community and let’s build a more financially secure
          future together
        </QTitle>
        <div class="w-full flex justify-center">
          <img
            :src="FigmaUi"
            alt="kraal-girl"
            class="w-full sm:w-[200px] object-contain overflow-hidden png-image-shadow"
          />
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
      </div>
      <QNextButton
        :nextForm="nextForm"
        :class="'mt-8'"
        v-if="disabled"
      ></QNextButton>
    </QMain>
  </QContainer>
</template>
