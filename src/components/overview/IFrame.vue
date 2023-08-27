<template>
  <div class="p-4" v-if="loading">
    <iframe
      :src="props.src"
      frameborder="0"
      width="380"
      height="720"
      class="mobile-frame scrollbar-mobile"
    >
    </iframe>
  </div>
</template>

<script lang="ts" setup>
import { Ref, ref, watchEffect } from "vue";

const props = defineProps({ src: String, timer: Number });
const loading: Ref<boolean> = ref(false);

watchEffect(() => {
  setTimeout(() => {
    loading.value = true;
  }, props.timer || 0);
});
</script>

<style scoped>
.mobile-frame {
  border: 4px solid black;
  overflow-y: auto;
  background-color: white;
  border-radius: 2rem;
}

::-webkit-scrollbar {
  display: none;
}
</style>
