<script setup lang="ts">
import Copyright from "./Copyright.vue";
import FLink from "./FLink.vue";
import { RouterLink } from "vue-router";
import LTitle from "./LTitle.vue";
import LContainer from "./LContainer.vue";
import LBox from "./LBox.vue";

import Social from "./child/Social.vue";

import CreatePDFFile from "../../pdf-generator/CreatePDF";
import Kraal from "../../icons/kraal.vue";

function handlePDF() {
  CreatePDFFile((doc) => {
    doc.save("kraal.pdf");
  });
}

function handleDownloadPDF() {
  window.open("/pdf", "_blank", "width=793.92,height=1122.24");
}

const len = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
</script>

<template>
  <footer class="bg-kraal-dark-600">
    <div class="text-white text-sm px-4 lg:px-6">
      <div class="container mx-auto">
        <div class="flex flex-wrap justify-between pt-6 sm:pt-10 lg:pt-20">
          <div
            class="w-full md:w-1/2 lg:w-1/4 pb-6 sm:items-start mb-2 hidden gap-2 sm:flex-col justify-between items-center">
            <div class="text-4xl lg:text-5xl text-white">
              <Kraal class="h-8 lg:h-12" />
            </div>
            <Social />
          </div>
          <LContainer>
            <LTitle>company</LTitle>
            <LBox>
              <FLink href="http://kraal.ai">about us</FLink>
              <FLink href="http://kraal.ai">press</FLink>
              <FLink href="http://kraal.ai">blog</FLink>
            </LBox>
          </LContainer>
          <LContainer>
            <LTitle>resources</LTitle>
            <LBox>
              <FLink href="http://kraal.ai">help</FLink>
              <LBox>
                <RouterLink to="/payment"
                  class="block py-2 text-white font-normal capitalize hover:underline decoration-2 underline-offset-4 text-base">
                  payment</RouterLink>
                <RouterLink to="/dashboard"
                  class="block py-2 text-white font-normal capitalize hover:underline decoration-2 underline-offset-4 text-base">
                  dashboard</RouterLink>
              </LBox>
            </LBox>
          </LContainer>
        </div>
        <Copyright></Copyright>
      </div>
    </div>
    <div class="bg-white w-full" v-for="(item, index) in len.reverse()" :key="index" :style="{
      height: 0.75 * index + 'px',
      marginTop: 1.1 * item + 'px',
    }"></div>
  </footer>
</template>
