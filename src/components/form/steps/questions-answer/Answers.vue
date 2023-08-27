<template>
  <HeaderSimplified />
  <MobileView>
    <AnsMainV1 />
    <FixedBottomSpace />
    <FixedBottom>
      <QNextButtonBlue :nextForm="props.next"></QNextButtonBlue>
    </FixedBottom>
  </MobileView>
</template>

<script lang="ts" setup>
import FixedBottom from "../layout/FixedBottom.vue";
import QNextButtonBlue from "../layout/QNextButtonBlue.vue";
import MobileView from "../../layouts/MobileView.vue";
import AnsMainV1 from "./AnsMainV1.vue";
import AnsMainV2 from "./AnsMainV2.vue";
import FixedBottomSpace from "../../../shared/footer/FixedBottomSpace.vue";
import HeaderSimplified from "../../../shared/header/HeaderSimplified.vue";

const props: any = defineProps<{ id: Number; back: Function; next: Function }>();
</script>
