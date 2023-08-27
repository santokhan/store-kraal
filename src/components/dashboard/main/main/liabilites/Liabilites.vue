<template>
  <div class="block lg:hidden">
    <table class="w-full">
      <thead>
        <Row>
          <th class="font-normal text-start" colspan="2">
            <ButtonWithAngle :toggle="toggle" :isClick="limit.set">{{ liabilities.header[0] }}</ButtonWithAngle>
          </th>
          <th class="font-medium text-end">-${{ liabilities.header[1] }}</th>
        </Row>
      </thead>
      <tbody>
        <Row v-if="limit.set" v-for="(row, i) of liabilities.list" :key="i">
          <Col :data="row" />
        </Row>
        <Row v-if="!limit.set">
          <Col :data="liabilities.list[0]" />
        </Row>
      </tbody>
    </table>
  </div>

  <!-- Desktop -->
  <div class="hidden lg:block">
    <table class="w-full">
      <thead>
        <tr class="text-start lg:text-base border-b mx-2">
          <th class="text-start font-medium capitalize" colspan="2">{{ liabilities.header[0] }}</th>
          <th class="text-end font-medium">-${{ liabilities.header[1] }}</th>
        </tr>
      </thead>
      <tbody>
        <Row v-for="(row, i) of liabilities.list" :key="i">
          <Col :data="row" />
        </Row>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from "vue";
import ButtonWithAngle from "../assets/ButtonWithAngle.vue";
import Col from "../table/Col.vue";
import Row from "../table/Row.vue";
import Table from "../table/Table.vue";
import { liabilities } from "../assetsLiabilities";

const limit = reactive({ set: false });

const toggle = () => {
  limit.set = limit.set === false ? true : false;
};
</script>
