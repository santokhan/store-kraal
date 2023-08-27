<template>
  <button
    @click="props.goToLogin"
    :class="`appearance-none overflow-hidden w-full relative font-medium 
      rounded-xl px-12 h-[3.25rem] bg-white text-kraal-blue-500 parent
      flex gap-4 justify-center items-center btn`"
  >
    <div
      :class="`h-full flex justify-center items-center rounded-r-full text-base 
        arrow bg-noom-orange-500/10`"
    >
      <i class="fa fa-arrow-right" aria-hidden="true"></i>
    </div>
    <!-- <div class="text-lg font-semibold">Individual</div> -->
    <div class="text-lg font-medium">Get Individual</div>
  </button>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
import { useCurrentUser } from "vuefire";

const props = defineProps<{ goToLogin: () => void }>();

const router = useRouter();

// firebase
function getStarted() {
  const currentUser = useCurrentUser();
  if (currentUser) {
    router.replace("/dashboard");
  } else {
    router.replace("/form/1");
  }
}

/**
 `appearance-none border border-gray-200 overflow-hidden w-full relative font-medium 
  rounded-xl px-12 h-14 shadow-xl bg-white text-noom-orange-500 parent
  flex gap-4 justify-center items-center`
*/
</script>

<style scoped>
.arrow {
  position: absolute;
  top: 0;
  width: 64px;
  right: 100%;
}
.parent:hover .arrow {
  transform: translateX(100%);
  animation: arrow 0.2s ease-in-out forwards;
  opacity: 1;
}
@keyframes arrow {
  0% {
    transform: translateX(0%);
    opacity: 0;
  }
}

.btn {
  box-shadow: inset 2px 2px 4px rgba(255, 255, 255, 0.1),
    inset -2px -2px 4px rgba(0, 0, 0, 0.1);
}
</style>
