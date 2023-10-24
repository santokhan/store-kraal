<template>
    <input type="file" multiple="true" @change="handleChange" title="Maximum file size is 25MB"
        :accept="validFileTypes.join(',')" class="opacity-0 absolute z-10 w-full h-full left-0 top-0">
</template>

<script setup lang="ts">
import { ref } from "vue";

const props = defineProps<{ handleFile: (files: FileList) => void }>()

const MAX_FILE_SIZE_MB = 25
const MAX_FILE_SIZE_BYTE = MAX_FILE_SIZE_MB * 1024 * 1024; // 25 MB
const INVALID_FILE_MSG = `Invalid file type or size. Ensure files are below ${MAX_FILE_SIZE_MB}MB and of the correct type.`;

const validFileTypes = [
    'image/jpeg',
    'image/jpg',
    'image/png',
    'image/webp',
    'application/pdf',
    'application/msword', // DOC
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document', // DOCX
    'application/vnd.ms-excel', // XLS
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', // XLSX
    'text/csv' // CSV
]

function handleChange(e: Event) {
    if (e) {
        const inputEle = e.target as HTMLInputElement;
        const files = inputEle.files;
        if (files) {
            props.handleFile(files);
        }
    }
}
</script>
