<template>
  <!-- Mobile view with dropdown -->
  <div class="py-2 block lg:hidden px-6">
    <table class="w-full">
      <thead>
        <tr class="text-slate-800">
          <th class="font-medium text-start" colspan="2">
            <ButtonWithAngle :toggle="toggle" :isClick="limit.set">{{ props.data.header[0] }}</ButtonWithAngle>
          </th>
          <th class="font-medium text-end">${{ props.data.header[1] }}</th>
        </tr>
      </thead>
      <tbody>
        <tr class="text-start text-sm" v-if="limit.set" v-for="row of props.data.list">
          <Col :data="row" />
        </tr>
        <!-- 1 row for mobile -->
        <tr class="text-start text-sm" v-else>
          <Col :data="props.data.list[0]" />
        </tr>
      </tbody>
    </table>
  </div>

  <!-- Desktop View -->
  <div class="hidden lg:block px-6">
    <table class="w-full">
      <thead>
        <tr class="border-b text-slate-800">
          <th class="font-medium text-start capitalize" colspan="2">{{ props.data.header[0] }}</th>
          <th class="font-medium text-end">${{ props.data.header[1] }}</th>
        </tr>
      </thead>
      <tbody>
        <tr class="text-start text-sm" v-for="row of props.data.list">
          <Col :data="row" />
        </tr>
        <tr class="text-start text-sm" v-if="!limit.set">
          <Col :data="props.data.list[0]" />
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from "vue";
import Col from "../table/Col.vue";
import ButtonWithAngle from "./ButtonWithAngle.vue";
import { Assets } from "../assetsLiabilities";

const props = defineProps<{ data: Assets }>()

const limit = reactive({ set: false });
const toggle = () => {
  limit.set = limit.set === false ? true : false;
};
</script>