<template>
  <div class="flex justify-center items-center py-2">
    <button type="button" @click="authentication"
      class="text-gray-300 border-b text-sm flex justify-center items-center hover:text-white">
      <span>Go to dashboard</span>
      <ArrowRight class="w-4" />
    </button>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
import { useCurrentUser } from "vuefire";
import ArrowRight from "../../icons/arrow-right.vue";

const router = useRouter();

// nextForm or authentication
// function nextForm() {
//   const id = router.currentRoute.value.params.id;
//   if (typeof id == "string") {
//     const to = "/form/" + (parseInt(id) + 1);
//     router.replace(to);
//   }
// }

function authentication() {
  const currentUser = useCurrentUser();
  if (currentUser) {
    router.push("/dashboard");
  } else {
    router.push("/signin");
  }
}
</script>
