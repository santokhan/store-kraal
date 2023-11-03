<template>
  <div class="bg-kraal-dark-600 relative text-base text-white" ref="homeView">
    <Header />
    <Main />
    <KraalAiFooter theme="" />
  </div>
</template>

<script lang="ts" setup>
import Header from "../components/home-simplified/header/Header.vue";
import Main from "../components/home-simplified/main/Main.vue";
import KraalAiFooter from "../components/shared/footer/KraalAiFooter.vue";
</script>
