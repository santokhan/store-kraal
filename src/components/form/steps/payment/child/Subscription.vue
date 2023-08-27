<script lang="ts" setup>import QSubTitle from "../../layout/QSubTitle.vue";
import QTitle from "../../layout/QTitle.vue";
</script>

<template>
  <div class="" title="Section Subscription">
    <div class="flex flex-col items-center text-center py-4">
      <QTitle class="mb-1 text-[1.25rem]">Get Member Access</QTitle>
      <QSubTitle>Unlock Kraal 2023</QSubTitle>
      <QSubTitle>Plus 3 months free data link</QSubTitle>
      <button
        type="button"
        :class="
          'appearance-none overflow-hidden relative font-medium rounded-lg px-6 py-2 my-2 ' +
          'flex gap-4 items-center justify-center ' +
          'text-white bg-kraal-blue-500 '
        "
      >
        Subscribe
      </button>
    </div>
  </div>
</template>
