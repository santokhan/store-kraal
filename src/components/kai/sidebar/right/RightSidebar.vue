<template>
    <Container :view="viewType">
        <List_Grid :listView="list_view" :gridView="grid_view" :view="viewType" />
        <BTN :text="grbi(0)" :view="viewType" @click="handleAI"><i class="fa fa-cog text-2xl" aria-hidden="true"></i></BTN>
        <BTN :text="grbi(1)" :view="viewType"><i class="fa fa-video text-2xl" aria-hidden="true"></i></BTN>
        <BTN :text="grbi(2)" :view="viewType"><i class="fa fa-code text-2xl" aria-hidden="true"></i></BTN>
        <BTN :text="grbi(3)" :view="viewType"><i class="fa fa-tasks text-2xl" aria-hidden="true"></i></BTN>
        <BTN :text="grbi(4)" :view="viewType"><i class="fa fa-upload text-2xl" aria-hidden="true"></i></BTN>
        <BTN :text="grbi(5)" :view="viewType"><i class="fa fa-info text-2xl" aria-hidden="true"></i></BTN>
        <AddItem :view="viewType" @click="handleAdd" />
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
import BTN from './box-buttons/BoxButton.vue';
import AddFeatureModal from './modals/AddFeatureModal.vue';
import List_Grid from './list-or-grid/List_Grid.vue';

const modalAI = ref<boolean>(false)
const modalAdd = ref<boolean>(false)

function handleAI() { modalAI.value = !modalAI.value }
function handleAdd() { modalAdd.value = !modalAdd.value }

// Switching view
const viewType = ref<string>('GRID')
function list_view() { viewType.value = 'LIST' }
function grid_view() { viewType.value = 'GRID' }
</script>
