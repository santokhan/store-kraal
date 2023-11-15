<template>
    <div class="space-y-6">
        <div class="flex items-center justify-between text-gray-100 rounded">
            <button type="button" class="grid place-items-center w-8 h-8 text-indigo-500"><i
                    class="fa fa-arrow-left"></i></button>
            <div class="">October 2023</div>
            <button type="button" class="grid place-items-center w-8 h-8 text-indigo-500"><i
                    class="fa fa-arrow-right"></i></button>
        </div>
        <ul class="space-y-3">
            <Item />
            <Item />
            <Item />
            <Item />
        </ul>
    </div>
</template>

<script setup lang="ts">
import Item from './list/Item.vue'
</script>

<style scoped></style>