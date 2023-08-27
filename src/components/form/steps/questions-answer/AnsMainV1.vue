<template>
  <div class="py-4"></div>

  <div class="">
    <p class="py-4">
      Can you think of something you bought recently that put a smile on your face?
    </p>
    <div class="space-y-1 h-[400px] overflow-y-auto rounded-xl">
      <div
        v-for="(ans, index) in newAnswerList"
        :key="index"
        :class="'w-full rounded-xl overflow-hidden px-5 py-4 min-h-[82px] shadow text-white space-y-2 '"
        :style="{ backgroundColor: color(colors, index) }"
      >
        <div class="text-white font-medium">${{ ans.c }}, {{ ans.d.toUpperCase() }}</div>
        <hr class="opacity-50" />
        <p class="text-gray-50 font-normal">{{ ans.a }}.{{ ans.b }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import QContainer from "../layout/QContainer.vue";
import QHeader from "../layout/QHeader.vue";
import QMain from "../layout/QMain.vue";
import QNextButton from "../layout/QNextButton.vue";
import { useRouter } from "vue-router";
import { useFormDataStore } from "../../../../stores/FormData";

interface AnswersList {
  a: string;
  b: string;
  c: number | string;
  d: string;
}

const router: any = useRouter();
const formData: any = useFormDataStore();

let answerObject = formData.answers;

const newAnswerList: AnswersList[] = [
  { ...answersValidation(answerObject) },
  {
    a: "I bought a new book from a local bookstore.",
    b: "It was a novel I had been wanting to read for months and finally found it there.",
    c: 15,
    d: "AB",
  },
  {
    a: "I bought a new set of paints from an art supply store.",
    b:
      "I had been wanting to experiment with different colors and techniques for a while, and finally found the perfect set.",
    c: 30,
    d: "CD",
  },
  {
    a: "I bought a new pair of running shoes from a sports store.",
    b: "I had been using the same old pair for years and they were getting worn out.",
    c: 80,
    d: "EF",
  },
  {
    a: "I bought a new board game from a toy store.",
    b: "I had been looking for a new game to play with my friends and found a fun one.",
    c: 25,
    d: "GH",
  },
  {
    a: "I bought a new guitar from a music store.",
    b: "I had been wanting to learn how to play for years and finally decided to start.",
    c: 25,
    d: "GH",
  },
  {
    a: "I bought a new guitar from a music store.",
    b: "I had been wanting to learn how to play for years and finally decided to start.",
    c: 90,
    d: "IJ",
  },
  {
    a: "I bought a new camera from an electronics store.",
    b:
      "I had been interested in photography for a while and wanted a better camera to capture my memories.",
    c: 70,
    d: "KL",
  },
  {
    a: "I bought a new pair of headphones from an online store.",
    b:
      "I had been using the same old pair for years and they were getting uncomfortable.",
    c: 50,
    d: "MN",
  },
  {
    a: "I bought a new yoga mat from a sports store.",
    b:
      "I had been practicing yoga for a while and wanted a better mat to improve my postures.",
    c: 20,
    d: "OP",
  },
  {
    a: "I bought a new set of cooking utensils from a kitchen supply store.",
    b: "I had been cooking more often at home and wanted better tools to make my meals.",
    c: 60,
    d: "QR",
  },
  {
    a: "I bought a new bike lock from a cycling store.",
    b:
      "I had been using an old one that was not very secure and finally found a better one.",
    c: 35,
    d: "ST",
  },
];

function answersValidation(obj: AnswersList): AnswersList {
  if (obj.a || obj.b || obj.c || obj.d) {
    return obj;
  } else {
    return {
      a: "I bought a new book from a local bookstore.",
      b:
        "It was a novel I had been wanting to read for months and finally found it there.",
      c: 15,
      d: "AB",
    };
  }
}

const colors: string[] = [
  "#3EB6C7",
  "#51ABD1",
  "#2D7DC7",
  "#745CD6",
  "#B45DAB",
  "#b45d76",
  "#cf5050",
  "#ff724c",
  "#ff9a32",
];

function color(colors: string[], index: number): string {
  if (colors.length <= index + 1) {
    colors = [...colors, ...colors];
  }
  return colors[index];
}
</script>
