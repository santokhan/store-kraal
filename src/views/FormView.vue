<template>
  <QuesOrAns v-if="id === 1" :id="id" :back="back" :next="next" />
  <InfoCFO v-else-if="id === 2" :id="id" :back="back" :next="next" />
  <DataPrivacy v-else-if="id === 3" :id="id" :back="back" :next="next" />
  <Hopes v-else-if="id === 4" :id="id" :back="back" :next="next" />
  <Debt v-else-if="id === 5" :id="id" :back="back" :next="next" />
  <Age v-else-if="id === 6" :id="id" :back="back" :next="next" />
  <Status v-else-if="id === 7" :id="id" :back="back" :next="next" />

  <!-- <IQA v-else-if="id === 8" :id="id" :back="back" :next="next" /> -->
  <!-- <IQB v-else-if="id === 9" :id="id" :back="back" :next="next" /> -->
  <!-- <IQC v-else-if="id === 10" :id="id" :back="back" :next="next" /> -->
  <!-- <IQD v-else-if="id === 11" :id="id" :back="back" :next="next" /> -->
  <!-- <IQE v-else-if="id === 12" :id="id" :back="back" :next="next" /> -->
  <!-- <IQF v-else-if="id === 13" :id="id" :back="back" :next="next" /> -->
  <!-- <IQG v-else-if="id === 14" :id="id" :back="back" :next="next" /> -->
  <!-- <IQH v-else-if="id === 15" :id="id" :back="back" :next="next" /> -->

  <Email v-else-if="id === 8" :id="id" :back="back" :next="next" />
  <Report v-else-if="id === 9" :id="id" :back="back" :next="next" />
  <Name v-else-if="id === 10" :id="id" :back="back" :next="next" />
  <Phone v-else-if="id === 11" :id="id" :back="back" :next="next" />
  <!-- Protected routes -->
  <Account v-else-if="id === 12" :id="id" :back="back" :next="next" />
  <Linked v-else-if="id === 13" :id="id" :back="back" :next="next" />
  <Loading v-else-if="id === 14" :id="id" :back="back" :next="next" />
  <ChatGPT v-else-if="id === 15" :id="id" :back="back" :next="next" />

  <!-- <Dashboard v-else-if="id === 16" :id="id" :back="back" :next="next" /> -->
  <!-- <PDF v-else-if="id === 17" :id="id" :back="back" :next="next" /> -->
  <!-- <Payment v-else-if="id === 18" :id="id" :back="back" :next="next" /> -->
</template>

<script lang="ts" setup>
/**
 * This FormView file will act like a nested route
 * It will route using id `'form/:id'`
 */
import { useRoute, useRouter } from "vue-router";
import QuesOrAns from "../components/form/steps/questions-or-answer/QuesOrAns.vue";
// info
import DataPrivacy from "../components/form/steps/info/DataPrivacy.vue";
import InfoCFO from "../components/form/steps/info/info-cfo/InfoCFO.vue";
import Hopes from "../components/form/steps/profile/Hopes.vue";
import Debt from "../components/form/steps/profile/Debt.vue";
import Age from "../components/form/steps/profile/AgeGroup.vue";
import Status from "../components/form/steps/profile/Employment.vue";
// signup
import Email from "../components/form/steps/get-email/Email.vue";
import Report from "../components/form/steps/profile/Report.vue";
import Name from "../components/form/steps/user/FullName.vue";
import Phone from "../components/form/steps/user/PhoneNumber.vue";
import Loading from "../components/pdf-generator/Loading.vue";
import Account from "../components/form/steps/account/linking/AccountLinking.vue";
import Linked from "../components/form/steps/account/linked-account/LinkedAccount.vue";
import ChatGPT from "../components/chatgpt/ChatGPT.vue";

// most important
const route: any = useRoute();
const router: any = useRouter();
// custom route
const id: any = parseInt(route.params.id);
function back() {
  if (id > 1) {
    // form page decrement `/form/${id - 1}`
    router.push(`/form/${id - 1}`);
  } else {
    // back to `'/'` if id < 1
    router.replace("/");
  }
}
function next() {
  function continueBtnDelay() {
    setTimeout(() => {
      // redirect to route `/form/${id + 1}` after click continue
      router.push(`/form/${id + 1}`);
    }, 125);
  }
  continueBtnDelay();
}
</script>
