<template>
  <QuesOrAns v-if="id === 1" :id="id" :back="back" :next="next" />
  <InfoCFO v-else-if="id === 2" :id="id" :back="back" :next="next" />
  <DataPrivacy v-else-if="id === 3" :id="id" :back="back" :next="next" />
  <Hopes v-else-if="id === 4" :id="id" :back="back" :next="next" />
  <PPQ5 v-else-if="id === 5" :id="id" :back="back" :next="next" />
  <Age v-else-if="id === 6" :id="id" :back="back" :next="next" />
  <Status v-else-if="id === 7" :id="id" :back="back" :next="next" />

  <IQA v-else-if="id === 8" :id="id" :back="back" :next="next" />
  <IQB v-else-if="id === 9" :id="id" :back="back" :next="next" />
  <IQC v-else-if="id === 10" :id="id" :back="back" :next="next" />
  <IQD v-else-if="id === 11" :id="id" :back="back" :next="next" />
  <IQE v-else-if="id === 12" :id="id" :back="back" :next="next" />
  <IQF v-else-if="id === 13" :id="id" :back="back" :next="next" />
  <IQG v-else-if="id === 14" :id="id" :back="back" :next="next" />
  <IQH v-else-if="id === 15" :id="id" :back="back" :next="next" />

  <Email v-else-if="id === 8" :id="id" :back="back" :next="next" />
  <Report v-else-if="id === 9" :id="id" :back="back" :next="next" />
  <Name v-else-if="id === 10" :id="id" :back="back" :next="next" />
  <Phone v-else-if="id === 11" :id="id" :back="back" :next="next" />
  <Account v-else-if="id === 12" :id="id" :back="back" :next="next" />
  <Linked v-else-if="id === 13" :id="id" :back="back" :next="next" />
  <Loading v-else-if="id === 14" :id="id" :back="back" :next="next" />

  <ChatGPT v-else-if="id === 15" :id="id" :back="back" :next="next" />
  <Dashboard v-else-if="id === 16" :id="id" :back="back" :next="next" />
  <PDF v-else-if="id === 17" :id="id" :back="back" :next="next" />
  <Payment v-else-if="id === 18" :id="id" :back="back" :next="next" />
  <ChatGPT v-else-if="id === 19" :id="id" :back="back" :next="next" />
  <Chat v-else-if="id === 20" :id="id" :back="back" :next="next" />
</template>

<script lang="ts" setup>
/**
 * This FormView file will act like a nested route
 * Does't matter what is the name of this component inside it.
 * It will route using id (form/:id)
 */
import { useRoute, useRouter } from "vue-router";
// Hello
import InfoCFO from "../components/form/steps/info/info-cfo/InfoCFO.vue";
import Hopes from "../components/form/steps/profile/Hopes.vue";
import PPQ5 from "../components/form/steps/profile/Debt.vue";
import Age from "../components/form/steps/profile/AgeGroup.vue";
import Status from "../components/form/steps/profile/Employment.vue";
// get email
import Email from "../components/form/steps/get-email/Email.vue";
import Loading from "../components/pdf-generator/Loading.vue";
import Report from "../components/form/steps/profile/Report.vue";
// Income Flow
import IFQ1 from "../components/form/steps/mindset/Contribute.vue";
import IFQ2 from "../components/form/steps/mindset/RetirementPlan.vue";
import IFQ3 from "../components/form/steps/mindset/Typically.vue";
import IFQ4 from "../components/form/steps/mindset/Social.vue";
// financial
import FQ4 from "../components/form/steps/assets-debt/D.vue";
import FQ5 from "../components/form/steps/assets-debt/E.vue";
import FQ6 from "../components/form/steps/assets-debt/F.vue";
import FQ7 from "../components/form/steps/assets-debt/G.vue";
// assets-debt
import IQA from "../components/form/steps/assets-debt/A.vue";
import IQB from "../components/form/steps/assets-debt/B.vue";
import IQC from "../components/form/steps/assets-debt/C.vue";
import IQD from "../components/form/steps/assets-debt/D.vue";
import IQE from "../components/form/steps/assets-debt/E.vue";
import IQF from "../components/form/steps/assets-debt/F.vue";
import IQG from "../components/form/steps/assets-debt/G.vue";
import IQH from "../components/form/steps/assets-debt/H.vue";
import IQI from "../components/form/steps/assets-debt/I.vue";
// mindset
import MQ0 from "../components/form/steps/mindset/1.vue";
import MQ5 from "../components/form/steps/mindset/6.vue";
// payment
import Trial from "../components/form/steps/trial/Trial.vue";
import Payment from "../components/form/steps/payment/Payment.vue";
import Phone from "../components/form/steps/user/PhoneNumber.vue";
import Pass from "../components/form/steps/user/Password.vue";
import Name from "../components/form/steps/user/FullName.vue";
//
import Account from "../components/form/steps/account/linking/AccountLinking.vue";
import Linked from "../components/form/steps/account/linked-account/LinkedAccount.vue";
import PDF from "../components/pdf-generator/PDFGenerator.vue";
//
import DataPrivacy from "../components/form/steps/info/DataPrivacy.vue";
import Chat from "../components/chatgpt/chat/Chat.vue";
import QuesOrAns from "../components/form/steps/questions-or-answer/QuesOrAns.vue";
import ChatGPT from "../components/chatgpt/ChatGPT.vue";
import Dashboard from "./DashboardView.vue";

// most important
const route: any = useRoute();
const id: any = parseInt(route.params.id);
const router: any = useRouter();

function back() {
  if (id > 1) {
    router.push(`/complete-flow/${id - 1}`);
  } else {
    router.replace("/"); // back to home if id < 1
  }
}

function next() {
  function continueBtnDelay() {
    setTimeout(() => {
      router.push(`/complete-flow/${id + 1}`);
    }, 150);
  }
  continueBtnDelay();
}
</script>
