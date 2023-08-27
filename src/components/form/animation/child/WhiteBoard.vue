<script setup lang="ts">
import { ref, watchEffect } from "vue";
import Kraal from "../../../icons/kraal.vue";
import getData from "../../../../firebase/read.data";

const welcomeText = ref('')
const { handleState }: any = defineProps({ handleState: Function });

async function welcomeName() {
  // read data from firestore
  await getData().then((data: any) => {
    // set state value from `Promise` using `.then()` on mount
    // read data from state that updated by `.then()`
    // try to read business-user and user both collections form firestore database
    const name = data?.firstName || data?.firstname || data?.nickname;
    if (name) {
      welcomeText.value = name + ', welcome to Kraal';
    } else {
      welcomeText.value = "Welcome to Kraal";
    }
  });
}
welcomeName();

const one = ref(false);
const two = ref(false);

watchEffect(() => {
  setTimeout(() => {
    one.value = true;

    setTimeout(() => {
      two.value = true;

      setTimeout(() => {
        handleState();
      }, 3 * 1000);
    }, 2 * 1000);
  }, 2 * 1000);
});
</script>

<template>
  <div class="w-full h-full absolute flex flex-col justify-center">
    <div class="flex flex-col gap-2 justify-center items-center">
      <div class="py-2">
        <Kraal class="h-12 logo-animation" />
      </div>
      <div class="text-gray-500 text-2xl font-semibold text-animation mb-20 pb-10"> {{ welcomeText }}</div>
    </div>
  </div>
</template>

<style scoped>
.logo-animation {
  width: 100%;
  text-align: center;
  opacity: 1;

  animation: text 2s ease-in forwards;
}

.text-animation {
  width: 100%;
  text-align: center;
  opacity: 1;
  visibility: visible;
  animation: text 5s ease-in forwards;
}

@keyframes text {
  0% {
    opacity: 0;
  }

  20% {
    opacity: 0;
  }

  50% {
    opacity: 0.5;
  }

  75% {
    opacity: 1;
  }

  95% {
    opacity: 1;
  }
}
</style>
