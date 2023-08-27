<template>
  <div class="flex justify-center">
    <div
      :class="
        'border shadow-lg shadow-gray-100 relative backdrop-blur-md bg-white/80 rounded-xl p-4 nuku ' +
        'flex items-center gap-2 '
      "
    >
      <div class="w-36">
        <img
          src="../../../../assets/image/cfo/nuku-aggor.png"
          alt="cfo"
          class="w-full h-full object-contain rounded-full overflow-hidden"
        />
      </div>

      <div class="w-auto space-y-1 px-">
        <h5 class="font-semibold text-lg flex gap-1">
          <span class="text-kraal-blue-500 font-bold">Nuku</span>
          <span class="text-noom-text-800">Aggor</span>
        </h5>
        <div class="">
          <p class="text-gray-500 leading-normal">Founder | CEO | CPA</p>
          <p class="text-gray-500 leading-normal">KPMG &amp; EY Alum</p>
        </div>
        <div class="pt-2">
          <ReadMore :handleLearnMore="props.handleContinue" :learnMoreIsOpen="false"/>
        </div>
      </div>
    </div>
  </div>

  <div class="space-y-6 text-justify" v-if="props.isContinue">
    <p>
      We take the privacy and security of your data very seriously. Here's what you should
      know about how we handle your information:
    </p>
    <ul class="list-disc pl-5 space-y-5">
      <li>
        Your financial information is safe with us. We only access it when you give us
        permission to solve a problem. Our internal policies exceed industry standards to
        ensure the highest level of protection for your data. In the unlikely event of an
        emergency, only authorized employees can access your data, and we will notify you
        immediately.
      </li>
      <li>
        To safely retrieve your bank and credit card transactions data, we use Plaid, a
        highly secure third-party service provider that is trusted by some of the largest
        banks and financial institutions. We never connect directly to your bank or other
        financial accounts.
      </li>
      <li>
        We encrypt your data automatically both in transit and at rest. This means that
        your data is protected while it's being transmitted to us and while it's stored in
        our database. If our database were to be breached, your data would still be
        encrypted and protected.
      </li>
      <li>
        While no security plan can guarantee 100% safety, we take the responsibility of
        protecting your data very seriously. We promise to treat your data with the utmost
        care and protection, just as we would with our own data.
      </li>
    </ul>
    <p>
      We understand that trust is earned, and we're committed to earning yours. Thank you
      for considering Kraal.
    </p>
    <div class="flex gap-2 border-t py-3">
      <h5 class="font-semibold">Technologies:</h5>
      <div class="flex items-center gap-3">
        <a
          class="text-kraal-blue-500 hover:underline"
          href="https://www.cossacklabs.com/acra/#what-is-acra"
          >Acra</a
        ><span class="leading-none opacity-50">|</span>
        <a
          class="text-kraal-blue-500 hover:underline"
          href="https://plaid.com/how-it-works-for-consumers/"
          >Plaid</a
        ><span class="leading-none opacity-50">|</span>
        <a class="text-kraal-blue-500 hover:underline" href="https://stripe.com/customers"
          >Stripe</a
        >
      </div>
    </div>
  </div>

  <div class="py-4"></div>
</template>

<script lang="ts" setup>
import AngleDown from "../../../icons/angle-down.vue";
import ReadMore from "../../../shared/button/ReadMore.vue";

const props = defineProps<{ handleContinue: Function; isContinue: Boolean }>();
</script>

<style scoped>
.nuku {
  animation-name: nuku;
  animation-duration: 0.3s;
  animation-delay: 0.2s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
  transform-origin: top;

  transform: scale(0);
  opacity: 0;
}
@keyframes nuku {
  95% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
</style>
