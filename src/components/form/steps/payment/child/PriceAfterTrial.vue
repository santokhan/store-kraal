<script lang="ts" setup>
import { RouterLink } from "vue-router";
//
import MobileView from "../../../layouts/MobileView.vue";
import rhombus from "../../../../../assets/image/icon/rhombus.png";
import QNextButton from "../../layout/QNextButton.vue";
</script>

<template>
  <MobileView>
    <div class="w-full py-4">
      <div class="flex justify-between border-b py-2">
        <div class="uppercase font-semibold">Price After Trial</div>
      </div>
      <div class="flex justify-between border-b py-3">
        <div>2-month plan</div>
        <div class="text-end space-y-1">
          <div>$144</div>
          <div class="text-sm text-noom-stone-500">Includes VAT</div>
          <div class="text-sm">Equal to $64.50/month</div>
        </div>
      </div>
      <div class="flex items-center gap-2 py-4">
        <div class="text-center text-sm">*Billed on cancelled beforehand.</div>
      </div>
    </div>
  </MobileView>
</template>
