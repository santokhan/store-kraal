<template>
  <div class="h-16 fixed w-full z-20 top-0 left-0 px-2 flex items-center bg-kraal-dark-600 text-white">
    <div class="max-w-screen-xl mx-auto w-full flex flex-wrap items-center justify-end px-4">
      <button @click="goToLogin" type="button"
        class="text-gray-400 hover:text-white transition duration-300 ease-in-out font-semibold flex items-center gap-2">
        <UserPro class="w-6" /> Login
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from "vue";
import UserPro from "../../icons/user-pro.vue";

const dropdown: any = reactive({ status: "hidden" });
const props = defineProps<{ goToLogin: () => void }>();
</script>
