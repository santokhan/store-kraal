<template>
    <section v-if="props.files.length > 0" class="w-full text-sm px-2">
        <ul class="w-full flex gap-2 overflow-x-auto border-t border-gray-500 pt-2">
            <li v-for="(file, i) in props.files" :key="i" :title="file.name"
                class="min-w-[10.5rem] w-[10.5rem] h-[2.75rem] flex items-center bg-chatgpt-500 text-gray-400 rounded-lg relative">
                <button type="button" @click="() => { handleFiles(i) }"
                    class="absolute -top-1.5 -right-1.5 w-[1.25rem] h-[1.25rem] overflow-hidden bg-chatgpt-600 border rounded-full flex justify-center items-center">
                    <i class="fa fa-plus rotate-45 text-xs"></i>
                </button>
                <div
                    class="w-[2.75rem] min-w-[2.75rem] h-[2.75rem] min-h-[2.75rem] flex items-center justify-center bg-chatgpt-600 text-chatgpt-800 rounded-l">
                    <i class="fa fa-file text-xl"></i>
                </div>
                <div class="px-2">
                    <div class="whitespace-nowrap font-bold">{{ fileName(file.name) }} </div>
                    <div class="text-xs">{{ BYTEtoKB(file.size) }}</div>
                </div>
            </li>
        </ul>
    </section>
</template>

<script lang="ts" setup>
const props = defineProps<{ files: any, handleFiles: (index: number) => void }>()

function fileName(name: string) {
    const max = 12
    if (name.length < max - 1) {
        return name
    } else {
        return `${name.slice(0, max)}...`
    }
}
function BYTEtoKB(BYTE: number) {
    const KB = BYTE / 1000

    if (KB < 1000) {
        return `${Math.round(KB)} KB`
    } else {
        const MB = KB / 1000
        return `${Math.round(MB)} MB`
    }
}
</script>