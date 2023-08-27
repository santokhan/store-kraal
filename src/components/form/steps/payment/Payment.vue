<script setup lang="ts">
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
//
import GridContainer from "../layout/GridContainer.vue";
import QContainer from "../layout/QContainer.vue";
import QFooter from "../layout/QFooter.vue";
import QHeader from "../layout/QHeader.vue";
import QMain from "../layout/QMain.vue";
import QNextButton from "../layout/QNextButton.vue";
import QProgressBar from "../layout/QProgressBar.vue";
import QRowButton from "../layout/QRowButton.vue";
import QSubTitle from "../layout/QSubTitle.vue";
import QTitle from "../layout/QTitle.vue";
import MobileView from "../../layouts/MobileView.vue";
//
import { useFormDataStore } from "../../../../stores/FormData";
import { setData, setDataSingle } from "../../methods/Form";
//
import Plan from "../payment/child/Plan.vue";
import Trophy from "../payment/child/Trophy.vue";
import PriceToday from "../payment/child/PriceToday.vue";
import PriceAfterTrial from "../payment/child/PriceAfterTrial.vue";
import Coupon from "../payment/child/Coupon.vue";
import FeaturedIn from "../payment/child/FeaturedIn.vue";
import Location from "../payment/child/Location.vue";
import Stripe from "../payment/child/Stripe.vue";
import Animate from "../../animation/Animate.vue";
import Subscription from "./child/Subscription.vue";

const router: any = useRouter();
const formData: any = useFormDataStore();
const showStripe: any = reactive({ value: false });
const { id, back, next }: any = defineProps({
  id: Number,
  back: Function,
  next: Function,
});

function prevForm() {
  back();
}

function nextForm() {
  showStripe.value = true;
  setTimeout(() => {
    router.replace("/dashboard");
  }, 150);
}
</script>

<template>
  <div>
    <MobileView>
      <QHeader :prevForm="prevForm" />
    </MobileView>
    <div
      class="text-noom-text-900 w-full flex flex-col items-center max-w-[432px] mx-auto"
    >
      <MobileView>
        <div class="w-full flex justify-end py-4 text-sm uppercase font-semibold">
          {{ formData.email || "aggnuk@gmail.com" }}
        </div>
      </MobileView>
    </div>
    <div class="bg-kraal-blue-500 w-full">
      <MobileView class="bg-transparent">
        <div class="w-full text-white text-2xl px-2 py-6">Start Your 14 - Day Trial</div>
      </MobileView>
    </div>
    <MobileView>
      <!-- <Trophy /> -->
      <!-- <Plan /> -->
      <div class="px-8 py-5">
        <ul class="list-decimal">
          <li>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis quasi,
            aperiam maxime, autem laboriosam cum p orro quisquam obcaecati asperiores, in
            totam optio reprehenderit id fugit? Laudantium quas ipsam deserunt eaque.
          </li>
          <li>Grab their attention: an effective bla bla bla</li>
        </ul>
      </div>
      <Subscription></Subscription>
      <hr class="w-full" />
      <PriceToday />
      <PriceAfterTrial />
      <Coupon />
      <!-- <Stripe/> -->
      <FeaturedIn />
      <QNextButton class="mt-4 mb-6 text-lg" :text="'Pay Now'"></QNextButton>
      <Location />
    </MobileView>
  </div>
</template>
