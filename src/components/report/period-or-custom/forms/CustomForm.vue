<template>
    <form
        class="flex flex-col lg:flex-row gap-3 lg:gap-5 items-start lg:items-center rounded-xl drop transition-transform ease-in-out px-4 lg:px-6 pb-6"
        @submit="handleSubmit">
        <label for="datePicker"><span class="font-bold whitespace-nowrap">Filter by date</span></label>
        <div class="flex items-center gap-2 lg:gap-5">
            <div class="px-1">From</div>
            <div class="w-full flex items-center gap-2">
                <input type="date" id="datePicker" required
                    class="w-36 lg:w-44 border px-2 p-1 rounded-lg bg-gray-100 focus:outline-none focus:border focus:border-kraal-blue-500">
            </div>
        </div>
        <div class="flex items-center gap-2 lg:gap-5">
            <div class="px-1">To</div>
            <div class="flex items-center gap-5">
                <input type="date" id="datePicker" required
                    class="w-36 lg:w-44 border px-2 p-1 rounded-lg bg-gray-100 focus:outline-none focus:border focus:border-kraal-blue-500">
            </div>
        </div>
        <FilterSubmit />
    </form>
</template>

<script setup lang="ts">
import FilterSubmit from '../../../shared/dashboard/card/FilterSubmit.vue';

function handleSubmit(e: Event) {
    e.preventDefault();
}
</script>

<style scoped></style>