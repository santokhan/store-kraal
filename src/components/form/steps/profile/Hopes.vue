<template>
  <QContainer>
    <QHeader :prevForm="props.back" :title="'Personal Profile'" />
    <QMain>
      <QTitle>What kind of hopes do you have for the future?</QTitle>
      <QCheckBox
        v-for="q in ques"
        :value="q"
        :setData="
          () => {
            updateData(q);
          }
        "
        :isActive="compare(formData.profile.hopesList, q)"
      />
      <QCheckBox
        :value="'none'"
        :setData="
          () => {
            updateData('none');
          }
        "
        :isActive="compare(formData.profile.hopesList, 'none')"
      />
      <FixedBottomSpace />
      <FixedBottom :disabled="disabled(formData.profile.hopesList)">
        <QNextButton
          :nextForm="props.next"
          :disabled="disabled(formData.profile.hopesList)"
        />
      </FixedBottom>
    </QMain>
  </QContainer>
</template>

<script lang="ts" setup>
import { useFormDataStore } from "../../../../stores/FormData";
import QContainer from "../layout/QContainer.vue";
import QHeader from "../layout/QHeader.vue";
import QMain from "../layout/QMain.vue";
import QNextButton from "../layout/QNextButton.vue";
import QCheckBox from "../layout/QCheckBox.vue";
import QTitle from "../layout/QTitle.vue";
import { compare, disabled } from "../../methods/Form";
import FixedBottom from "../layout/FixedBottom.vue";
import FixedBottomSpace from "../../../shared/footer/FixedBottomSpace.vue";

const formData: any = useFormDataStore();
const props: any = defineProps({ id: Number, back: Function, next: Function });

function updateData(q: any) {
  formData.updateProfileList("hopesList", q);
}

const ques: string[] = [
  "Being able to retire",
  "Buying a home",
  "Having a family",
  "Getting married",
  "Buying a card",
  "Getting out of high-interest debt",
  "Supporting family",
  "Renovating a home",
  "Starting a business",
  "Leaving an inheritance",
  "Donating to charity",
  "Other",
];
</script>
