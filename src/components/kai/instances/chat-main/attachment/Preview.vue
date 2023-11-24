<template>
    <div :title="props.file.name" class="min-w-[10.5rem] h-[2.75rem] bg-chatgpt-500 text-gray-400 relative">
        <button type="button" @click="() => { removeFiles(props.i) }"
            class="absolute -top-1.5 -right-1.5 w-[1rem] h-[1rem] overflow-hidden bg-chatgpt-600 border rounded-full flex justify-center items-center"><svg
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                class="w-5 h-5 rotate-45">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
            </svg></button>
        <div class="w-full h-full rounded-lg border border-gray-600 overflow-hidden flex items-center">
            <div class="aspect-square h-full flex items-center justify-center bg-kraal-blue-500 text-white">
                <i class="fa fa-file text-xl"></i>
            </div>
            <div class="px-2">
                <div class="whitespace-nowrap text-sm font-bold">{{ fileName(props.file.name) }} </div>
                <div class="text-xs">{{ BYTEtoKB(props.file.size) }}</div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { BYTEtoKB, fileName } from '../attachment-preview';

type Props = {
    file: {
        name: string, size: number
    },
    i: number
    removeFiles: (i: number) => void
}
const props = defineProps<Props>()
</script>