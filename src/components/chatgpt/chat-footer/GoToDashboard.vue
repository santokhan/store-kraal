<template>
  <div class="text-center pb-2">
    <button
      type="button"
      @click="authentication"
      class="text-gray-300 underline hover:text-white text-sm"
    >
      Go to dashboard
    </button>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
import { useCurrentUser } from "vuefire";

const router = useRouter();

// nextForm or authentication
function nextForm() {
  const id = router.currentRoute.value.params.id;
  if (typeof id == "string") {
    const to = "/form/" + (parseInt(id) + 1);
    router.replace(to);
  }
}

function authentication() {
  const currentUser = useCurrentUser();
  if (currentUser) {
    router.push("/dashboard");
  } else {
    router.push("/signin");
  }
}
</script>
