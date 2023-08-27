<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import QContainer from "../../layout/QContainer.vue";
import QHeader from "../../layout/QHeader.vue";
import QMain from "../../layout/QMain.vue";
import QNextButton from "../../layout/QNextButton.vue";
import { useFormDataStore } from "../../../../../stores/FormData";
import Item from "./Item.vue";
import CreatePDF from "../../../../pdf-generator/CreatePDF";

function generatePDF() {
  CreatePDF((doc) => {
    doc.save("Kraal.pdf");
  });
}

const router: any = useRouter();
const formData: any = useFormDataStore();
const phone: any = ref(0);
const disabled: any = ref(true);
const { id, back, next }: any = defineProps({
  id: Number,
  back: Function,
  next: Function,
});

function handleChange(e: any) {
  phone.value = e.target.value;
  disabled.value = false;
}

function prevForm() {
  back();
}

function nextForm() {
  next();
}

interface list {
  title: String;
  rate: number;
  url: string;
}

const list: list[] = [
  { title: "Bank of America checking", rate: 400, url: "" },
  { title: "Capital One Credit Card", rate: -890, url: "" },
  { title: "Yale student loans", rate: -70546, url: "" },
];

const sum: number = list.reduce((acc: number, counter: any) => acc + counter.rate, 0);

interface name {
  firstname: string;
  lastname: string;
}

const { firstname, lastname }: name = formData.user.name;
const moneyBorder: string = sum > 0 ? "border-green-500" : "border-red-500";
const moneyText: string = sum > 0 ? "text-green-500" : "text-red-500";
</script>

<template>
  <div class="bg-gray-100 h-[100dvh]">
    <QContainer class="bg-transparent">
      <QHeader :prevForm="prevForm"></QHeader>
      <QMain>
        <div class="flex justify-center text-center">
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
        <div class="py-3">
          <div
            class="w-full my-2 text-lg font-medium flex items-center gap-2 text-gray-500"
          >
            <div class="whitespace-nowrap">Linked Accounts</div>
            <div class="border-b border-gray-400 w-full"></div>
          </div>
          <Item
            v-for="(item, index) in list"
            :key="index"
            :amount="item.rate"
            :url="item.url"
            >{{ item.title }}</Item
          >
        </div>
        <QNextButton :nextForm="nextForm"></QNextButton>
      </QMain>
    </QContainer>
  </div>
</template>
