<template>
  <div
    :class="`profile lg:w-10 lg:h-10 bg-gray-200 rounded-full 
    flex justify-center items-center text-[#343541] lg:my-1 font-semibold`"
  >
    <i class="fa fa-user" v-if="props.user === 'robot'"></i>
  </div>
</template>

<script lang="ts" setup>
const props: any = defineProps({ user: String });
</script>

<style>
.profile {
  min-width: 2rem;
  min-height: 2rem;
  width: 2rem;
  height: 2rem;
}
</style>
