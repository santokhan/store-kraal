<script lang="ts" setup>
import Bill from "../../../icons/bill.vue";
import Cogs from "../../../icons/cogs.vue";
import Docs from "../../../icons/docs.vue";
import Home from "../../../icons/home.vue";
import Logout from "../../../icons/logout.vue";
import NavItem from "./NavItem.vue";
import { Ref, ref } from "vue";

const index: Ref<number> = ref(1);
function handleTab(n: number) {
  index.value = n;
}


</script>

<template>
  <div class="flex h-full flex-col justify-between font-medium pt-8 pb-5 px-2">
    <nav class="mx-auto flex flex-col items-center gap-2">
      <NavItem :tab="1" :handleTab="handleTab" :index="index"
        ><Home class="w-5"
      /></NavItem>
      <NavItem :tab="2" :handleTab="handleTab" :index="index"
        ><Cogs class="w-5"
      /></NavItem>
      <NavItem :tab="3" :handleTab="handleTab" :index="index"
        ><Bill class="w-5"
      /></NavItem>
      <NavItem :tab="4" :handleTab="handleTab" :index="index"
        ><Docs class="w-5"
      /></NavItem>
      <NavItem :tab="5" :handleTab="handleTab" :index="index"
        ><Logout class="w-5"/></NavItem>
    </nav>
  </div>
</template>
