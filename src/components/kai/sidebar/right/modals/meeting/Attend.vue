<template>
    <div class="space-y-6">
        <div class="flex items-center justify-between text-gray-100 rounded">
            <button @click="() => { monthInput = handleDate(monthInput, 'prev') }" type="button"
                class="grid place-items-center w-8 h-8 text-kraal-purple-500"><i class="fa fa-arrow-left"></i></button>
            <div class="flex items-center gap-2 relative">
                {{ renderMonth(monthInput) }}
                <div class="w-5 h-5 relative overflow-hidden">
                    <svg class="w-full h-full" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M20.8088 9.9088L3.40939 9.77507C3.2434 9.7738 3.10832 9.90681 3.10704 10.0728L3.04594 18.0225C3.03057 20.0225 4.02286 21.0301 6.0228 21.0455L18.0224 21.1377C20.0224 21.1531 21.03 20.1608 21.0454 18.1609L21.1065 10.2111C21.1078 10.0452 20.9748 9.91008 20.8088 9.9088ZM16.0677 19.1527C15.9206 19.2975 15.728 19.37 15.536 19.3686C15.344 19.3671 15.1525 19.2926 15.0076 19.1445L13.4705 17.5836C12.8906 17.9571 12.202 18.1769 11.463 18.1712C9.44108 18.1557 7.80878 16.4981 7.82432 14.4761C7.83985 12.4552 9.49744 10.8219 11.5194 10.8374C13.5403 10.853 15.1726 12.5106 15.1571 14.5325C15.1514 15.2725 14.9221 15.9576 14.5397 16.5317L16.0778 18.0936C16.3665 18.3879 16.3629 18.8619 16.0677 19.1527ZM21.1261 7.66117L21.1227 8.11111C21.1214 8.27711 20.9863 8.41012 20.8203 8.40884L3.42092 8.27512C3.25492 8.27384 3.12191 8.13877 3.12318 7.97277L3.12664 7.52283C3.14201 5.52289 4.14967 4.53061 6.14961 4.54598L7.39957 4.55558L7.4111 3.05563C7.41425 2.64564 7.75686 2.30826 8.16684 2.31142C8.57683 2.31457 8.91421 2.65717 8.91106 3.06716L8.89953 4.56711L15.3993 4.61707L15.4109 3.11711C15.414 2.70713 15.7566 2.36975 16.1666 2.3729C16.5766 2.37605 16.914 2.71865 16.9108 3.12864L16.8993 4.6286L18.1493 4.6382C20.1492 4.65358 21.1415 5.66123 21.1261 7.66117ZM13.6562 14.521C13.647 15.7159 12.6675 16.6804 11.4736 16.6712C10.2786 16.6621 9.31411 15.6826 9.3233 14.4877C9.33248 13.2927 10.3119 12.3282 11.5069 12.3374C12.7008 12.3466 13.6654 13.326 13.6562 14.521Z"
                            fill="white" />
                    </svg>
                    <input type="month" id="monthInput" name="monthInput" v-model="monthInput"
                        class="focus:outline-none w-5 absolute inset-0 opacity-0">
                </div>
            </div>
            <button @click="() => { monthInput = handleDate(monthInput, 'next') }" type="button"
                class="grid place-items-center w-8 h-8 text-kraal-purple-500"><i class="fa fa-arrow-right"></i></button>
        </div>
        <ul class="space-y-3">
            <li v-for="(item, index) in meetingList" :key="index" :data="item"
                class="flex items-center justify-between px-4 py-2 bg-modal-very-dark rounded-xl">
                <div class="space-y-1">
                    <h5 class="text-white font-medium">{{ item.title }}</h5>
                    <p class="text-xs text-[#904FFB]">{{ item.createdAt }}</p>
                </div>
                <div class="flex items-center justify-between gap-4">
                    <span class="ml-3 text-sm font-medium text-gray-300">{{ item.label }}</span>
                    <label class="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="" class="sr-only peer">
                        <div
                            class="w-11 h-6 bg-chatgpt-400 peer-focus:outline-none rounded-full peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-kraal-purple-500">
                        </div>
                    </label>
                </div>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { meetingList } from './meeting';
const monthInput = ref("2023-07");

function handleDate(monthInput: string, payload: 'prev' | 'next'): string {
    const date = new Date(monthInput);
    if (payload === 'next') {
        date.setMonth(date.getMonth() + 1);
    } else {
        date.setMonth(date.getMonth() - 1);
    }
    let m = date.getMonth();
    const monthList = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']
    return [date.getFullYear(), monthList[m]].join("-");
}

function renderMonth(month: string): string {
    const date = new Date(month)
    return [date.toLocaleString('en-US', { month: 'short' }), date.getFullYear()].join(" ")
}
</script>