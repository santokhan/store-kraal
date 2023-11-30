<script setup lang="ts">
/**
 * Simple button component
 * We have @click="handeClick" on top of this
 */

type Props = {
    flip?: boolean;
    isOpen: boolean;
}
const props = defineProps<Props>()
</script>


<template>
    <button type="button" :class="['relative w-6', props.flip ? '-scale-x-100' : '']">
        <svg class='w-full fill-chatgpt-600' viewBox="0 0 40 160" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M6.35572e-07 160L7.62939e-06 -5.56315e-06C5.88094e-06 40 40 40 40 80C40 120 2.38403e-06 120 6.35572e-07 160Z"
                fill="fillColor" />
        </svg>
        <div class="absolute inset-0 grid place-items-center pr-1">
            <i :class="[
                'fa fa-angle-left transition-transform linear text-white relative',
                props.isOpen ? 'scale-x-100' : '-scale-x-100'
            ]"></i>
        </div>
    </button>
</template>
