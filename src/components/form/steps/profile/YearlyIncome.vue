<script lang="ts" setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";
//
import active from "../../methods/active";
import GridContainer from "../layout/GridContainer.vue";
import QContainer from "../layout/QContainer.vue";
import QFooter from "../layout/QFooter.vue";
import QHeader from "../layout/QHeader.vue";
import QMain from "../layout/QMain.vue";
import QNextButton from "../layout/QNextButton.vue";
import QProgressBar from "../layout/QProgressBar.vue";
import QRowButton from "../layout/QRowButton.vue";
import QSubTitle from "../layout/QSubTitle.vue";
import QTitle from "../layout/QTitle.vue";
//
import { useFormDataStore } from "../../../../stores/FormData";

const formData: any = useFormDataStore();
const disabled = reactive({ value: true });
const data = reactive({ value: 0 });
const { id, back, next }: any = defineProps({
  id: Number,
  back: Function,
  next: Function,
});

function setData(e: any) {
  const value = e.target.value;
  formData.$patch({ profile: { income: value } });
  data.value = value;
}

const handleDisable = () => {
  disabled.value = false;
};
</script>

<template>
  <QContainer>
    <QHeader :prevForm="back" :title="'Personal profile'" />
    <QMain>
      <QTitle>What is your yearly income before taxes?</QTitle>
      <QSubTitle
        >This information helps determine a realistic Kraal plan.</QSubTitle
      >
      <form @submit.prevent="setData">
        <div class="mb-6 gap-2 items-center relative text-lg w-full">
          <label
            for="large-input"
            :class="
              'block mb-2 font-medium text-noom-text-900 ' +
              'absolute left-4 top-1/2 -translate-y-1/2 '
            "
            >$</label
          >
          <input
            type="number"
            inputmode="decimal"
            min="0"
            @change="setData"
            @input="handleDisable"
            title="Savings goal from $1M to $1.2M"
            :class="
              'block w-full px-8 py-4 max-w-md text-noom-text-900 rounded-lg border border-gray-300 ' +
              'sm:text-md ' +
              'bg-secondary-500 '
            "
          />
          <label
            for="large-input"
            :class="
              'block mb-2 font-medium text-noom-text-900 ' +
              'absolute right-4 top-1/2 -translate-y-1/2'
            "
            >USD</label
          >
        </div>
        <QNextButton :nextForm="next" :disabled="disabled.value" />
      </form>
    </QMain>
  </QContainer>
</template>
