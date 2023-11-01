<template>
    <Container>
        <BoxButton :text="grbi(0)" @click="handleAI"><i class="fa fa-cog text-2xl" aria-hidden="true"></i></BoxButton>
        <BoxButton :text="grbi(1)"><i class="fa fa-video text-2xl" aria-hidden="true"></i></BoxButton>
        <BoxButton :text="grbi(2)"><i class="fa fa-code text-2xl" aria-hidden="true"></i></BoxButton>
        <BoxButton :text="grbi(3)"><i class="fa fa-tasks text-2xl" aria-hidden="true"></i></BoxButton>
        <BoxButton :text="grbi(4)"><i class="fa fa-upload text-2xl" aria-hidden="true"></i></BoxButton>
        <BoxButton :text="grbi(5)"><i class="fa fa-info text-2xl" aria-hidden="true"></i></BoxButton>
        <AddItem @click="handleAdd" />
        <AISettingsModal :isOpen="modalAI" :handleModal="handleAI" />
        <AddFeatureModal :isOpen="modalAdd" :handleModal="handleAdd" />
    </Container>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Container from './Container.vue';
import { get_right_bar_item as grbi } from './sidebarItem';
import AddItem from './box-buttons/AddItem.vue';
import AISettingsModal from './modals/AISettingsModal.vue';
import BoxButton from './box-buttons/BoxButton.vue';
import AddFeatureModal from './modals/AddFeatureModal.vue';

const modalAI = ref<boolean>(false)
const modalAdd = ref<boolean>(false)

function handleAI() { modalAI.value = !modalAI.value }
function handleAdd() { modalAdd.value = !modalAdd.value }
</script>
