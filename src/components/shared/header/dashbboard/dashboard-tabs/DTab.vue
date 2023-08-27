<script lang="ts" setup>
const { tab, handleTab, index }: any = defineProps({
    tab: Number,
    handleTab: Function,
    index: Number,
});

function liftingState() {
    handleTab(tab);
}

function tabStyle(condition: boolean) {
    return condition ? "bg-kraal-blue-500 text-white " : "hover:bg-gray-200 ";
}
</script>

<template>
    <button type="button" @click="liftingState" :class="
        'px-5 h-10 border text-base border-transparent rounded-full whitespace-nowrap shadow-default ' +
        'flex gap-3 items-center ' +
        tabStyle(tab === index)
    ">
        <slot></slot>
    </button>
</template>
