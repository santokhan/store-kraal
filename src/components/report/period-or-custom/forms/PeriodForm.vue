<template>
    <div class="px-4 lg:px-6 pb-6">
        <form class="rounded-xl drop transition-transform ease-in-out border  min-w-[228px] w-[228px] max-w-[228px] py-2"
            @submit="handleSubmit">
            <div class="flex items-center gap-4 px-2">
                <div class="pl-2 font-medium">Year</div>
                <div class="w-full flex items-center gap-2">
                    <select required v-model="year"
                        class="w-full border py-1 rounded-lg bg-gray-100 focus:outline-none focus:border focus:border-kraal-blue-500">
                        <option v-for="(item, index) in yearList()" :key="index" :value="item">{{ item }}</option>
                    </select>
                </div>
            </div>
            <div class="w-full grid grid-cols-4 gap-x-1 gap-y-4 mt-4 justify-start items-center px-2">
                <div class="w-full flex justify-center" v-for="(item, index) in customList" :key="index">
                    <button type="button" @click="activeCustom = item.toLowerCase()"
                        class="w-10 capitalize whitespace-nowrap"
                        :class="[activeCustom === item.toLowerCase() ? 'bg-kraal-blue-500 text-white rounded-lg' : '']">
                        {{ item }}</button>
                </div>
                <div class="col-span-4 flex justify-between items-center w-full">
                    <button type="button" @click="activeCustom = 'full-year'" class="px-2 capitalize whitespace-nowrap "
                        :class="[activeCustom === 'full-year' ? 'bg-kraal-blue-500 text-white rounded-lg' : '']">
                        Full Year</button>
                    <FilterSubmit />
                </div>
            </div>
        </form>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import FilterSubmit from '../../../shared/dashboard/card/FilterSubmit.vue';

const year = ref(new Date().getFullYear())
function yearList() {
    const list: number[] = []
    const max = new Date().getFullYear()
    const min = max - 50
    for (let i = min; i <= max; i++) {
        list.push(i)
    }
    return list;
}
const activeCustom = ref<string>("jan")
const customList = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Q1", "Q2", "Q3", "Q4"]

function handleSubmit(e: Event) {
    e.preventDefault()
}
</script>

<style scoped></style>