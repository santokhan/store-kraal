<template>
    <div class="absolute bottom-4 right-4 w-8 h-8">
        <div v-if="isOpen"
            class="absolute bottom-full right-0 bg-chatgpt-600 text-gray-200 text-sm w-48 rounded-lg py-1 mb-1"
            ref="target">
            <NavLink to="/faqs">
                <IconBox><i class="fa fa-question-circle" aria-hidden="true"></i></IconBox>FAQs
            </NavLink>
        </div>
        <button type="button" @click="handleDropUp" ref="toggler"
            class="flex items-center justify-center w-full h-full bg-chatgpt-700 rounded-full text-gray-400">?</button>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import IconBox from '../sidebar/footer/IconBox.vue';
import NavLink from '../sidebar/footer/NavLink.vue';
import { onClickOutside } from '@vueuse/core';

const isOpen = ref(false)
const target = ref(null)
const toggler = ref(null)

function handleDropUp() {
    isOpen.value = !isOpen.value

    onClickOutside(target, () => { isOpen.value = false }, { ignore: [toggler] })
}
</script>

<style scoped></style>