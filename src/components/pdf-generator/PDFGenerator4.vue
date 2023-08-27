<script lang="ts" setup>import { watchEffect, ref } from "vue";
import { useRouter } from "vue-router";
import PDFTitle from "./PDFTitle.vue";
import BorderedLeft from "./BorderedLeft.vue";
import PDFLink from "./PDFLink.vue";
import PDFContainer from "./PDFContainer.vue";
import CreatePDFFile from "./CreatePDF";
import QNextButton from "../form/steps/layout/QNextButton.vue";
import MobileView from "../form/layouts/MobileView.vue";
import QHeader from "../form/steps/layout/QHeader.vue";
import Modal from "./subscribe-modal/SubscribeModal.vue";

const router = useRouter();
const { id, back, next }:any =  defineProps({
  id: Number,
  back: Function,
  next: Function 
});

function prevForm() {
  back();
}

function nextForm() {
  next();
}
function saveAsPDF() {
  CreatePDFFile((doc) => {
    doc.save("Kraal.pdf");
  });
}
</script>

<template>
  <Modal />
  <div class="text-lg text-gray-600 pdf-main" id="PDFContent">
    <div class="h-[95vh] md:h-[11.69in] bg-kraal-dark-500 text-white first-page">
      <div class="w[8.27in] h-full flex flex-col justify-between px-4 md:px-20 py-4 md:py-20">
        <div>
          <p class="text-3xl lg:text-4xl mb-5">Smart Brevity 101</p>
          <p class="text-5xl lg:text-8xl leading-snug">
            How to make your point and have it heard
          </p>
        </div>
        <div class="w-full flex justify-end">
          <div class="text-white">
            <svg width="99" height="36" viewBox="0 0 99 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_104_2)">
                <mask id="mask0_104_2" style="mask-type: luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="99" height="36">
                  <path d="M99 0H0V36H99V0Z" fill="white" />
                </mask>
                <g mask="url(#mask0_104_2)">
                  <path d="M25.7061 21.0782V35.2176H32.9031V20.9756C32.9031 16.9866 34.8746 14.9669 38.8193 14.9669H41.2182V7.81976H40.2057C30.7707 7.81976 25.9208 12.2224 25.7061 21.0782Z"
                    fill="white" />
                  <path d="M95.5884 0H91.9104V35.2176H99V3.36673C99 1.55388 97.4544 0 95.5884 0Z" fill="white" />
                  <path
                    d="M78.0975 7.40611C71.5928 7.40611 67.9146 9.8916 67.0632 14.9669H74.1528C74.5248 13.672 75.9114 13.0515 78.4158 13.0515C81.348 13.0515 82.8399 13.8285 83.001 15.3823C83.001 16.884 81.4554 17.7634 78.4158 18.1267C73.329 18.6052 69.377 19.6375 67.4667 22.5672H67.4648C67.4648 22.5672 67.4574 22.5816 67.4501 22.5942L67.4481 22.5978C67.4352 22.6194 67.4148 22.6518 67.3908 22.6894C67.376 22.7164 67.3575 22.7452 67.3353 22.7776C67.0298 23.256 66.2523 24.3405 65.7248 23.9322C65.7119 23.9232 65.697 23.9125 65.6822 23.8981V22.5672H65.6748V14.9669C65.5157 9.8916 61.571 7.40611 53.789 7.40611C47.2842 7.40611 43.6061 9.8916 42.7547 14.9669H49.8443C50.2164 13.672 51.6029 13.0515 54.1074 13.0515C57.0395 13.0515 58.5315 13.8285 58.6925 15.3823C58.6925 16.884 57.1469 17.7634 54.1074 18.1267C46.9659 18.7995 42.0605 20.5602 41.9013 27.1371C41.9013 32.6224 45.7442 35.6475 51.4955 35.7859L51.4604 35.8255H59.7273C59.0682 35.6277 58.4852 35.3382 57.9743 34.9569C57.219 34.3957 56.6231 33.6385 56.1824 32.6998C56.1713 32.6746 56.1584 32.6512 56.1491 32.626C55.938 32.1801 55.7418 31.725 55.503 31.2934C55.4717 31.2358 55.4402 31.1782 55.4069 31.1226C55.1088 30.619 54.7275 30.2161 54.2351 29.9679C53.9685 29.8312 53.6669 29.7414 53.33 29.7054C52.7616 29.6478 52.1804 29.7934 51.6677 30.0939H51.6657C51.3252 30.2952 51.0161 30.5632 50.7606 30.8851C50.631 31.0488 50.5163 31.225 50.4162 31.4139C50.3015 31.6315 50.2016 31.8616 50.0498 32.1783C49.7444 31.7484 49.4279 31.3671 49.1649 30.9697C49.0743 30.8347 48.9891 30.6999 48.9132 30.5596C48.5763 29.9355 48.3431 29.3115 48.2246 28.6909L48.1635 28.2684C48.045 27.0993 48.3524 25.9483 49.176 24.8368C50.1738 23.4862 51.5159 22.5636 53.2281 22.2723C54.1092 22.1212 54.9959 22.1985 55.827 22.4557C56.984 22.8136 58.028 23.524 58.7832 24.4627C59.2571 25.0473 59.6162 25.7199 59.8199 26.4519C59.855 26.5723 59.8847 26.6947 59.9105 26.8188C60.0549 27.5202 60.0809 28.2036 59.9772 28.8672C59.8827 29.4715 59.6792 30.0633 59.3607 30.6405C59.0702 31.1692 58.8831 31.7358 58.911 32.3455C58.9443 33.1008 59.2089 33.7663 59.6217 34.3615C59.7588 34.5576 59.9105 34.7446 60.0753 34.9263C60.2993 35.1727 60.5565 35.376 60.8601 35.5216C60.849 35.5054 60.8379 35.4928 60.8268 35.4784C60.4899 35.0701 60.2418 34.6278 60.0698 34.1565C59.9031 33.7141 59.805 33.2448 59.7662 32.7591C59.7198 32.1873 59.7513 31.6297 59.8569 31.0848C59.9901 30.3834 60.2418 29.7036 60.6102 29.0506C60.6324 29.013 60.6546 28.9752 60.6806 28.9356C60.7343 28.8619 60.7898 28.7899 60.8508 28.7179C61.4469 28.0111 62.3133 27.4968 63.2573 27.3889C63.9459 27.3115 64.6826 27.4411 65.3657 27.4033C65.66 27.3871 65.9451 27.3421 66.2117 27.2343C66.2987 27.2001 66.3819 27.1605 66.4653 27.1119C66.8058 26.9142 67.0484 26.6227 67.289 26.3242C67.3853 26.2038 67.4814 26.085 67.5833 25.9699C67.7517 25.7775 67.9295 25.621 68.1479 25.4772C68.2442 25.4142 68.3478 25.3602 68.4552 25.3045C68.6625 25.1947 68.8716 25.0869 69.0198 24.9196C69.0438 24.8926 69.066 24.8602 69.0864 24.8206C69.1437 24.7146 69.1938 24.5743 69.2567 24.4573C69.3399 24.3027 69.4473 24.184 69.6288 24.2308C69.6288 24.2308 69.8861 24.2506 69.9342 24.4789V24.4825C69.9434 24.5923 69.9509 24.7002 69.9564 24.8062C69.9713 24.9088 69.9768 25.0131 69.9768 25.1139C69.9915 25.0851 70.6451 25.4664 70.7097 25.5166C71.1096 25.8135 71.3688 26.2288 71.502 26.7019C71.5113 26.7343 71.5224 26.7702 71.5317 26.8062C71.6502 27.2953 71.6946 27.8763 71.6372 28.369C71.6354 28.3888 71.6316 28.4068 71.6298 28.4266C71.6112 28.5561 71.4947 28.6803 71.3948 28.7575C71.2763 28.8457 71.1522 28.8834 70.9986 28.8924C70.6506 28.9104 70.2878 28.9302 69.9287 28.905C69.9287 28.905 69.6936 28.8511 69.3585 28.7413H69.3567C69.351 28.7755 69.3419 28.8151 69.3288 28.8529H69.3308C69.4584 28.9302 69.5565 28.986 69.6344 29.0292C69.3936 29.2521 69.2882 29.7 69.6602 29.7288C69.7638 29.736 69.8657 29.7288 69.9675 29.709C70.3896 29.6424 70.7894 29.4193 71.2244 29.5363C71.267 29.5471 71.3096 29.5597 71.3558 29.5794C71.5058 29.6406 71.6891 29.7556 71.7428 29.9211C71.7852 30.0579 71.6982 30.1747 71.5706 30.2287C71.4594 30.2754 71.3411 30.2898 71.2188 30.2952C71.1633 30.306 71.1059 30.315 71.0523 30.3204C70.9356 30.3312 70.8171 30.3312 70.6986 30.333C70.5432 30.369 70.4007 30.441 70.2618 30.5254C69.8768 30.7593 69.5214 31.0452 69.1548 31.3078C68.7902 31.5667 68.4051 31.842 67.9776 32.0056C67.9017 32.0344 67.824 32.0577 67.7444 32.0721C67.6925 32.0721 67.637 32.0595 67.5833 32.038C67.0242 31.824 66.3635 30.6441 66.306 30.5434C66.3246 30.6136 66.4911 31.1926 66.9465 31.7394C66.3857 31.4229 65.3435 31.5667 65.3435 31.5667C66.4596 31.6153 67.0317 32.0523 67.3094 32.394C67.3242 32.4822 67.3353 32.5704 67.3371 32.6602C67.3538 32.8923 67.3464 33.1278 67.3167 33.3562C67.289 33.5775 67.2408 33.7951 67.1669 34.009C67.0817 34.2465 66.9632 34.4677 66.8133 34.6692C66.7392 34.7734 66.6578 34.8705 66.5652 34.9587C66.5282 34.9965 66.3635 35.1115 66.395 35.1205C66.5523 35.1637 66.7854 35.3076 66.9354 35.41C67.1316 35.4334 67.3242 35.464 67.5185 35.4982C67.7295 35.5324 67.9313 35.6295 68.0757 35.8255H76.9961L76.961 35.7751C77.1942 35.7679 77.4311 35.7535 77.6699 35.7357C85.2927 35.2176 89.9834 31.851 89.9834 24.2901V14.9669C89.8242 9.8916 85.8795 7.40611 78.0975 7.40611ZM83.1066 23.979C83.1066 27.8637 80.7093 30.1423 76.7648 30.1423C74.525 30.1423 73.3532 29.1064 73.1921 26.9302C73.1921 24.9106 74.6322 23.6157 77.457 23.0977C79.5357 22.6842 81.4554 22.114 83.1066 21.4414V23.979Z"
                    fill="white" />
                  <path
                    d="M61.1175 35.8256L61.2915 35.9928C61.3377 35.9928 61.3803 35.9946 61.4229 35.9946C61.6025 35.9964 61.7838 35.9982 61.9634 36L61.721 35.8256L61.6118 35.7482C61.3322 35.7051 61.0841 35.6295 60.8601 35.5217C60.8916 35.5649 60.9269 35.6187 60.9824 35.6961L61.1175 35.8256Z"
                    fill="white" />
                  <path
                    d="M70.0601 27.29C70.0601 27.29 70.073 27.2971 70.0805 27.2971C70.197 27.3511 70.5636 27.4232 70.5636 27.4232C70.5636 27.4232 70.5672 27.3278 70.5137 27.2091C70.508 27.1947 70.5024 27.1821 70.4951 27.1677C70.4877 27.1515 70.4802 27.1371 70.4711 27.1209C70.4711 27.1173 70.4691 27.1155 70.4673 27.1119C70.4618 27.1029 70.4544 27.0922 70.4469 27.0832C70.4396 27.0742 70.4322 27.0635 70.4229 27.0545C70.4099 27.0383 70.3932 27.0238 70.3748 27.0094C70.3173 26.9518 70.2341 26.898 70.1267 26.8548C69.8732 26.7558 69.7769 26.7594 69.7454 26.7828L70.0028 26.9248C70.0212 26.932 70.0323 26.9411 70.0397 26.9447C69.9138 27.0563 69.986 27.2343 70.0619 27.29H70.0601Z"
                    fill="white" />
                  <path
                    d="M24.1863 8.74058H15.7194L7.03969 18.4074V3.34157C7.03969 1.5431 5.50513 0 3.6522 0H0V34.9659H7.03969V25.0419C7.03969 24.3207 7.40991 23.8585 8.15035 23.7039C9.04998 23.7039 9.9496 24.4753 10.8492 26.0185L15.825 34.9659H24.2919L14.5014 18.8191L24.1863 8.74058Z"
                    fill="white" />
                </g>
              </g>
              <defs>
                <clipPath id="clip0_104_2">
                  <rect width="99" height="36" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>

    <div>
      <PDFContainer>
        <p class="text-2xl">
          <b class="font-semibold">Smart Brevity is a communication formula</b> Kraal has
          been testing and perfecting for years.
        </p>
        <ul class="list-disc px-4 lg:px-8 space-y-2">
          <li>
            <b class="font-semibold">It was invented in a newsroom</b> — to elevate
            essential news, explain its impact, and deliver both in a concise and visual
            format
          </li>
          <li>
            <b class="font-semibold">Now hundreds of organizations trust it</b> — to boost
            engagement with staff, stakeholder, and member updates through a tool called
            <PDFLink to="http://kraal.ai">Kraal</PDFLink>.
          </li>
        </ul>
        <p>
          <b class="font-semibold">The big picture:</b> It works because it’s built on
          brain science. Smart Brevity leans into the modern ways people interact with
          information, then sets a structure to help make vital updates clearer and more
          memorable.
        </p>
      </PDFContainer>
      <PDFContainer>
        <PDFTitle>
          <h3>Why it matters</h3>
        </PDFTitle>
        <p>
          <b class="font-semibold">We’re living in a world with way too many words</b> —
          emailed, texted, tweeted words — making it harder to find and focus on what
          matters.
        </p>
        <ul class="list-disc px-4 lg:px-8 space-y-2">
          <li>We check our phones over 200 times a day</li>
          <li>We decide within 17 milliseconds if we like what we just clicked</li>
          <li>We spend less than 30 seconds, on average, reading whatever we do.</li>
        </ul>
        <p>
          <b class="font-semibold">People have totally changed</b> how they engage with
          communication — even when it’s essential to their jobs. Smart Brevity cuts
          through, tightening details to what’s new and necessary, organizing them in a
          way that’s efficient for an audience, and styling it in a way that’s easy to
          absorb.
        </p>
        <p>
          <b class="font-semibold">The bottom line:</b> Most Smart Brevity communications
          are about 50% shorter than traditional styles — with all the same important
          substance.
        </p>
      </PDFContainer>
      <PDFContainer>
        <PDFTitle>
          <h3>How it works</h3>
        </PDFTitle>
        <BorderedLeft>
          <p>
            <b class="font-semibold">1. Audience first — always</b>. Before you sit down
            to write, stand up to speak, or plug in to record, consider three things.
          </p>
          <ul class="list-disc px-4 lg:px-8 space-y-2">
            <li>
              What is the goal of your communication; | Who is your ideal reader or
              listener; | Who is a real person who fits that profile?
            </li>
          </ul>
          <p>
            Let that person guide the decisions you make. Keep only what’s new,
            interesting, or urgent to them. Cut anything that’s familiar.
          </p>
          <PDFLink to="http://kraal.ai">Learn to raise the bar on what readers need.</PDFLink>
        </BorderedLeft>
      </PDFContainer>
      <PDFContainer>
        <BorderedLeft>
          <p>
            <b class="font-semibold">2. Grab their attention.</b> An effective headline or
            subject line will make the difference between five clicks and 50,000. Focus on
            three things.
          </p>
          <ul class="list-disc px-4 lg:px-8 space-y-2">
            <li>Stay under 60 characters — people can read, remember, and repeat it</li>
            <li>Keep it concrete — people should learn something from it</li>
            <li>Stay conversational — people will move through it more quickly.</li>
          </ul>
          <p>
            This is your first chance to engage your audience and also your first chance
            to lose them.
          </p>
          <PDFLink to="http://kraal.ai">Learn how to craft an effective title or headline.</PDFLink>
        </BorderedLeft>
      </PDFContainer>
      <PDFContainer>
        <BorderedLeft>
          <p>
            <b class="font-semibold">3. Say “What’s new” and “Why it matters.”</b> Pick
            the most important detail you want readers to remember. Sum it up in one
            sentence, then say it first — always. It works because busy readers ask
            themselves two things when they see new information
          </p>
          <ul class="list-disc px-4 lg:px-8 space-y-2">
            <li>What is this?</li>
            <li>Is it relevant to me?</li>
          </ul>
          <p>
            The more clearly — and quickly — you answer those questions, the better chance
            you have at keeping your audience engaged.
          </p>
          <PDFLink to="http://kraal.ai">Learn to keep an audience hooked.</PDFLink>
        </BorderedLeft>
      </PDFContainer>
      <PDFContainer>
        <BorderedLeft>
          <p>
            <b class="font-semibold">4. Write like a human.</b> Imagine having coffee with
            the person you’re trying to reach. The same words you'd say to them are the
            ones you should write down.
          </p>
          <ul class="list-disc px-4 lg:px-8 space-y-2">
            <li>Studies show short, simple language equates to confidence.</li>
            <li>It’s also easier to consume and more memorable long-term.</li>
          </ul>
          <p>
            You can communicate with the full spectrum of human emotion, sophistication,
            and nuance in Smart Brevity, while saying it in a simple way.
          </p>
          <PDFLink to="http://kraal.ai">Learn the power of conversational writing.</PDFLink>
        </BorderedLeft>
      </PDFContainer>
      <PDFContainer>
        <BorderedLeft>
          <p>
            <b class="font-semibold">5. Stay scannable.</b> Some 60% to 80% of people will
            scan, not read, long passages of text, University of Maryland research found.
            But smart styling can break readers out of that fog.
          </p>
          <ul class="list-disc px-4 lg:px-8 space-y-2">
            <li>Short paragraphs, bolding, and bullets get readers farther, faster.</li>
            <li>Simple subject-verb-object sentences and punchy words help, too.</li>
          </ul>
          <p>
            The goal is to be frugal with words — so your end result is shorter and looks
            approachable even at a quick scan.
          </p>
          <PDFLink to="http://kraal.ai">Learn a smart way to cut read time.</PDFLink>
        </BorderedLeft>
      </PDFContainer>
      <PDFContainer>
        <BorderedLeft>
          <p>
            <b class="font-semibold">6. Stop when enough is enough.</b> Use as few words,
            sentences, and paragraphs as possible. The greatest gift that you can give to
            yourself — and others — is time.
            <PDFLink to="http://kraal.ai">Learn to radically rethink how you communicate.</PDFLink>
          </p>
          <p>
            <b class="font-semibold">The bottom line:</b> Smart Brevity is the art of
            being short, not shallow. If you apply these tips — and reflect on the urgent
            need for clarity and efficiency — your ideas will break through the noise and
            be heard.
          </p>
        </BorderedLeft>
      </PDFContainer>
      <PDFContainer>
        <PDFTitle>
          <h3>Go deeper</h3>
        </PDFTitle>
        <BorderedLeft>
          <p>
            For you: Get more tips and see real life examples of Smart Brevity in action
            in the book
            <PDFLink to="http://kraal.ai">Smart Brevity: The power of saying more with less.</PDFLink>
          </p>
          <p>
            <b class="font-semibold">For your organization:</b> See how Axios HQ is
            helping leaders everywhere use Smart Brevity to sharpen their most important
            workplace communications. <PDFLink to="http://kraal.ai">Learn more</PDFLink>.
          </p>
        </BorderedLeft>
      </PDFContainer>
    </div>
  </div>

  <MobileView>
    <div class="p-4 w-full flex flex-col gap-4">
      <button type="button" @click="saveAsPDF" class="block py-3 font-normal text-base text-center border-2 border-noom-text-800 text-noom-text-800 w-full rounded-lg">
        Save as pdf
      </button>
      <QNextButton :nextForm="nextForm"></QNextButton>
    </div>
  </MobileView>
</template>
