<template>
    <div class="relative overflow-hidden w-full h-20">
        <div class="triangle"></div>
    </div>
</template>

<style scoped>
.triangle {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 0;
    border-left: calc(100vw) solid transparent;
    border-top: 0 solid transparent;
    border-bottom: 70px solid white;
}
</style>
