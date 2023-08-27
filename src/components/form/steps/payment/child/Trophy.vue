<script lang="ts" setup>//
import trophy from "../../../../../assets/image/trophy.png";
import rhombus from "../../../../../assets/image/icon/rhombus.png";
</script>

<template>
  <div class="flex items-start gap-2 py-7">
    <img :src="trophy" alt="trophy" class="h-8 object-contain mt-2" />
    <ul class="px-4 space-y-1">
      <li class="flex items-start gap-2">
        <img :src="rhombus" alt="rhombus" class="mt-2" />
        <div>Lose 1 kg by April 1</div>
      </li>
      <li class="flex items-start gap-2">
        <img :src="rhombus" alt="rhombus" class="mt-2" />
        <div>
          Continue developing healthy habits to keep the weight off after reaching your
          goal
        </div>
      </li>
    </ul>
  </div>
</template>
