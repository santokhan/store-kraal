<script lang="ts" setup>
import MintSlider from "./MintSlider.vue";
import MobileView from "../../layouts/MobileView.vue";
import QHeader from "../layout/QHeader.vue";
import QNextButton from "../layout/QNextButton.vue";
import { useRouter } from "vue-router";
import FixedBottom from "../layout/FixedBottom.vue";
import QSubTitle from "../layout/QSubTitle.vue";
import mobileImg from "../../../../assets/image/mint-security/mobile.png";
import desktopImg from "../../../../assets/image/mint-security/desktop.png";

const router: any = useRouter();
const { handleMintSecurityInfo }: any = defineProps({
  handleMintSecurityInfo: Function,
});

// function prevForm() {
//   router.replace("/form/21");
// }
</script>

<template>
  <MobileView>
    <QHeader :prevForm="handleMintSecurityInfo" />
    <MintSlider />
    <div class="space-y-4">
      <div class="space-y-4 py-5">
        <div class="">
          <h2 class="text-xl font-semibold text-noom-gray-800 mb-2">
            We safeguard the mobile app
          </h2>
          <QSubTitle>
            We safeguard Mint with your own 4-digit code so only you can view your
            account. You can also enable Touch ID if you choose. If your mobile device is
            ever lost or stolen, you can delete all your account information remotely.
          </QSubTitle>
        </div>
        <div class="w-full flex justify-center">
          <img :src="mobileImg" alt="mobile" />
        </div>
      </div>
      <div class="space-y-4 py-5">
        <div class="">
          <h2 class="text-xl font-semibold text-noom-gray-800 mb-2">
            We safeguard the mobile app
          </h2>
          <QSubTitle>
            We safeguard Mint with your own 4-digit code so only you can view your
            account. You can also enable Touch ID if you choose. If your mobile device is
            ever lost or stolen, you can delete all your account information remotely.
          </QSubTitle>
        </div>
        <div class="w-full flex justify-center">
          <img :src="desktopImg" alt="desktop view" />
        </div>
      </div>
    </div>
    <div class="py-8"></div>
    <FixedBottom>
      <div class="w-full">
        <QNextButton :nextForm="handleMintSecurityInfo" text="Link Accounts" />
      </div>
    </FixedBottom>
  </MobileView>
</template>
