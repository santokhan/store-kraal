<script lang="ts" setup>
import { useRouter } from "vue-router";
//
import QContainer from "../layout/QContainer.vue";
import QHead from "../layout/QHead.vue";
import QMain from "../layout/QMain.vue";
import QNextButton from "../layout/QNextButton.vue";
//
import FixedBottom from "../layout/FixedBottom.vue";

const { id, back, next }: any = defineProps({
  id: Number,
  back: Function,
  next: Function,
});
</script>

<template>
  <QContainer class="bg-transparent">
    <QHead :prevForm="back"> </QHead>
    <QMain>
      <div class="space-y-6">
        <p>
          We take the privacy and security of your data very seriously. Here's what you
          should know about how we handle your information:
        </p>
        <ul class="list-disc pl-5 space-y-5">
          <li>
            Your financial information is safe with us. We only access it when you give us
            permission to solve a problem. Our internal policies exceed industry standards
            to ensure the highest level of protection for your data. In the unlikely event
            of an emergency, only authorized employees can access your data, and we will
            notify you immediately.
          </li>
          <li>
            To safely retrieve your bank and credit card transactions data, we use Plaid,
            a highly secure third-party service provider that is trusted by some of the
            largest banks and financial institutions. We never connect directly to your
            bank or other financial accounts.
          </li>
          <li>
            We encrypt your data automatically both in transit and at rest. This means
            that your data is protected while it's being transmitted to us and while it's
            stored in our database. If our database were to be breached, your data would
            still be encrypted and protected.
          </li>
          <li>
            While no security plan can guarantee 100% safety, we take the responsibility
            of protecting your data very seriously. We promise to treat your data with the
            utmost care and protection, just as we would with our own data.
          </li>
        </ul>
        <p>
          We understand that trust is earned, and we're committed to earning yours. Thank
          you for considering Kraal.
        </p>
        <hr />
        <div class="space-y-2">
          <h5 class="font-semibold">Technologies:</h5>
          <ul class="space-y-2">
            <li>
              Acra -
              <a
                class="text-kraal-blue-500 hover:underline"
                href="https://www.cossacklabs.com/acra/#what-is-acra"
              >
                https://www.cossacklabs.com/acra/#what-is-acra
              </a>
            </li>
            <li>
              Plaid -
              <a
                class="text-kraal-blue-500 hover:underline"
                href="https://plaid.com/how-it-works-for-consumers/"
                >https://plaid.com/how-it-works-for-consumers/</a
              >
            </li>
            <li>
              Stripe -
              <a
                class="text-kraal-blue-500 hover:underline"
                href="https://stripe.com/customers"
                >https://stripe.com/customers</a
              >
            </li>
          </ul>
        </div>
      </div>
      <div class="py-4"></div>
      <FixedBottom>
        <QNextButton :nextForm="next" :class="'mt-8'"></QNextButton>
      </FixedBottom>
    </QMain>
  </QContainer>
</template>

<style scoped>
.main-img-animate {
  max-height: 500px;
  overflow: hidden;
  animation: drop 0.75s ease-in-out forwards;
}
@media (min-width: 576px) {
  .main-img-animate {
    max-height: none;
  }
}
@keyframes drop {
  0% {
    max-height: 100px;
  }
}
</style>
