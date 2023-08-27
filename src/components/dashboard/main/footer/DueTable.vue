<template>
    <div v-if="props.dueData?.length">
        <Row v-for="(item, i) of props.dueData" :key="i">
            <Ellipse :bg="dueColors[i]" />


            <div class="w-full space-y-1 py-[0.6rem]">
                <Title>{{ item.vendor || item.lender }}</Title>
                <Desc>{{ dateFormatter(item.due_date) }}</Desc>
            </div>


            <Price>{{ item.amount }}</Price>
        </Row>
    </div>

    <div v-else class="bg-orange-100 w-min whitespace-nowrap px-2 text-sm rounded text-orange-800">Data not found on server
    </div>
</template>
  

<script lang="ts" setup>
// @ts-nocheck
// import { onMounted, ref } from "vue";
import Row from "./row/Row.vue";
import Price from "./row/FPrice.vue";
import Ellipse from "../../../icons/ellipse.vue";
import Title from "./row/RTitle.vue";
import Desc from "./row/RDesc.vue";
import { dateFormatter } from './formatter';
import randomColor from 'randomcolor';
import { dueColors } from "./dueColor";


interface Due {
    bill_type: string
    due_date: string
    amount: string
    vendor: string
}

const props = defineProps<{ dueData: Due[] }>()

// const dueJSON = ref<Due[]>([]);
// onMounted(() => {
//     async function requestDue() {
//         await fetch("/api/due.json").then(res => res.json())
//             .then(data => {
//                 dueJSON.value = data.bills;
//             }).catch((err) => {
//                 console.log(err)
//             })
//     }
//     requestDue();
// })
</script>
  