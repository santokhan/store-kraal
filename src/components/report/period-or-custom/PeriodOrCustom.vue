<template>
    <div class="flex">
        <div class="bg-white text-gray-600 border rounded-xl">
            <div class="flex items-center gap-4 p-4 lg:p-6"><i class="fa fa-filter"></i>
                <button type="button"
                    :class="['text-lg font-medium', 'flex items-center gap-2', 'transition-all ease-in-out', 'hover:underline', activeForm === PERIOD ? 'text-kraal-blue-500' : '']"
                    @click="() => { handleForm(PERIOD) }">Period</button>
                |
                <button type="button"
                    :class="['text-lg font-medium', 'flex items-center gap-2', 'transition-all ease-in-out', 'hover:underline', activeForm === CUSTOM ? 'text-kraal-blue-500' : '']"
                    @click="() => { handleForm(CUSTOM) }">Custom</button>
            </div>

            <PeriodForm v-if="activeForm === PERIOD" />
            <CustomForm v-if="activeForm === CUSTOM" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import PeriodForm from './forms/PeriodForm.vue';
import CustomForm from './forms/CustomForm.vue';

// 2 types of form `period` | `custom`
const CUSTOM = 'custom', PERIOD = 'period';
const activeForm = ref<string>("")

function handleForm(formName: string) {
    if (formName === activeForm.value) {
        activeForm.value = "" 
    } else {
        activeForm.value = formName
    }
}
</script>

<style scoped></style>