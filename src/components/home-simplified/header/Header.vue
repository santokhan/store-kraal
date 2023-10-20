<template>
  <div class="h-16 fixed w-full z-20 top-0 left-0 px-2 flex items-center bg-kraal-dark-600 text-white">
    <div class="max-w-screen-xl mx-auto w-full flex flex-wrap items-center justify-end px-4">
      <RouterLink to="/kraalai" type="button"
        class="text-gray-400 hover:text-white transition duration-300 ease-in-out font-semibold flex items-center gap-2">
        <UserPro class="w-6" /> {{ currentUserRef ? "" : "Login" }}
      </RouterLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onBeforeMount } from "vue";
import { RouterLink } from "vue-router";
import UserPro from "../../icons/user-pro.vue";
import { getCurrentUser } from "vuefire";

const currentUserRef = ref()
async function assign_user() {
  currentUserRef.value = await getCurrentUser()
  console.log(currentUserRef.value);
};
onBeforeMount(assign_user)
</script>
