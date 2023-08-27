<script setup lang="ts">
import Text from "./Text.vue";
import BlueText from "./BlueText.vue";
//
const { index }: any = defineProps({ index: Number });
</script>

<template>
  <div class="flex justify-evenly">
    <div
      class="max-w-[92px] w-full flex justify-center text-xl text-kraal-blue-500"
    >
      <i v-if="index === 0" class="fa fa-caret-down"></i>
    </div>
    <div
      class="max-w-[92px] w-full flex justify-center text-xl text-kraal-blue-500"
    >
      <i v-if="index === 1" class="fa fa-caret-down"></i>
    </div>
    <div
      class="max-w-[92px] w-full flex justify-center text-xl text-kraal-blue-500"
    >
      <i v-if="index === 2" class="fa fa-caret-down"></i>
    </div>
    <div
      class="max-w-[92px] w-full flex justify-center text-xl text-kraal-blue-500"
    >
      <i v-if="index === 3" class="fa fa-caret-down"></i>
    </div>
  </div>

  <Text v-if="index === 0"
    >This option will help us support those who <br />
    need the lowest trial prices!
    <BlueText>Amazing! Thank you! Option 1</BlueText></Text
  >
  <Text v-if="index === 1"
    >This option will help us support those who <br />
    need the lowest trial prices!
    <BlueText>Amazing! Thank you! Option 2</BlueText></Text
  >
  <Text v-if="index === 2"
    >This option will help us support those who <br />
    need the lowest trial prices!
    <BlueText>Amazing! Thank you! Option 3</BlueText></Text
  >
  <Text v-if="index === 3"
    >This option will help us support those who <br />
    need the lowest trial prices!
    <BlueText>Amazing! Thank you! Option 4</BlueText></Text
  >
</template>
