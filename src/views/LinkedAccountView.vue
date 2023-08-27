<script lang="ts" setup>
import { ref } from "vue";
import { useFormDataStore } from "../stores/FormData";
import QContainer from "../components/form/steps/layout/QContainer.vue";
import QHeader from "../components/form/steps/layout/QHeader.vue";
import QMain from "../components/form/steps/layout/QMain.vue";
import QNextButton from "../components/form/steps/layout/QNextButton.vue";
import Item from "../components/form/steps/account/linked-account/Item.vue";
import { useRouter } from "vue-router";

interface list {
    title: String;
    rate: number;
    url: string;
}

// function generatePDF() {
//   CreatePDFFile((doc) => {
//     doc.save("Kraal.pdf");
//   });
// }

// function handleChange(e: any) {
//   phone.value = e.target.value;
//   disabled.value = false;
// }
const router = useRouter();
const formData: any = useFormDataStore();
const phone: any = ref(0);
const disabled: any = ref(true);
const props: any = defineProps({
    back: Function,
    next: Function,
});

function back() {
    router.push('/account-linking');
}
function next() {
    router.push('/loading')
}
const list: list[] = [
    { title: "Bank of America checking", rate: 400, url: "" },
    { title: "Capital One Credit Card", rate: -890, url: "" },
    { title: "Yale student loans", rate: -70546, url: "" },
];
const sum: number = list.reduce((acc: number, counter: any) => acc + counter.rate, 0);
const firstname = formData.user.name.firstname;
const moneyBorder: string = sum > 0 ? "border-green-500" : "border-red-500";
const moneyText: string = sum > 0 ? "text-green-500" : "text-red-500";
</script>

<template>
    <div class="bg-gray-100 h-[100dvh]">
        <QContainer class="bg-transparent">
            <QHeader :prevForm="back" />
            <QMain>
                <div class="flex justify-center text-center">
                    <div :class="
                        'bg-white rounded-full w-36 h-36 border ' +
                        'flex flex-col items-center justify-center ' +
                        'shadow-default ' + moneyBorder
                    ">
                        <div class="text-lg font-semibold">
                            {{ firstname || "John Smith" }}
                        </div>
                        <div :class="'text-lg font-semibold ' + moneyText">
                            ${{ sum.toLocaleString() }}
                        </div>
                    </div>
                </div>
                <div class="py-3">
                    <div class="w-full my-2 text-lg font-medium flex items-center gap-2 text-gray-500">
                        <div class="whitespace-nowrap">Linked Accounts</div>
                        <div class="border-b border-gray-400 w-full"></div>
                    </div>
                    <Item v-for="(item, index) in list" :key="index" :amount="item.rate" :url="item.url">{{ item.title }}
                    </Item>
                </div>
                <QNextButton :nextForm="next" />
            </QMain>
        </QContainer>
    </div>
</template>
