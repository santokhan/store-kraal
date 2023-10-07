<template>
    <Container>
        <div v-for="(item, index) in list" :key="index"
            class="rounded-lg p-4 space-y-4 bg-kraal-purple-500">
            <div class=""><i class="fa fa-heart text-xl" aria-hidden="true"></i></div>
            <h5 class="font-medium">Follower-only Chat</h5>
        </div>
        <div class="rounded-lg grid place-items-center bg-chatgpt-400 hover:bg-kraal-purple-500">
            <div class=""><i class="fa fa-plus text-xl" aria-hidden="true"></i></div>
        </div>
    </Container>
</template>

<script setup lang="ts">
import Container from './Container.vue';
const list = [1, 2, 3, 4, 5, 6, 7];
</script>

<style scoped></style>