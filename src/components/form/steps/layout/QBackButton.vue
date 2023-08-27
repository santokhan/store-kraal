<script lang="ts" setup>defineProps(['previousForm'])
</script>

<template>
    <button type="button"
        class="focus:outline-none text-noom-text-900 bg-primary-50 hover:bg-primary-200 focus:ring-4 focus:ring-primary-300 font-medium rounded-xl px-12 py-4 mb-2 flex gap-4 items-center"
        @click="previousForm">
        <!-- <i class="fa fa-arrow-left" aria-hidden="true"></i> Back -->
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd"
                d="M6.75 16H9a9.181 9.181 0 00-3.05-6.857H18V6.857H5.95A9.181 9.181 0 009 0H6.75c0 3.787-3.022 6.857-6.75 6.857v2.286c3.728 0 6.75 3.07 6.75 6.857z" fill="#000" />
        </svg>
    </button>
</template>