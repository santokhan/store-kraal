<template>
    <div class="w-16 h-[26px]"><span class="loader"></span></div>
</template>

<style scoped>
.loader {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    display: block;
    margin: 8px 0;
    position: relative;
    color: rgba(255, 255, 255, 0.5);
    box-sizing: border-box;
    animation: animloader 2s linear infinite;
    /* box-shadow: 8px 0 0 -2px, 24px 0 0 -2px, -8px 0 0 -2px, -24px 0 0 -2px; */
    /* box-shadow: 16px 0 0 -2px, 32px 0 0 -2px, 48px 0 0 -2px; */
    background: transparent;
}

@keyframes animloader {
    0% {
        box-shadow: 16px 0 0 -2px, 32px 0 0 -2px, 48px 0 0 -2px;
    }

    25% {
        box-shadow: 16px 0 0 2px, 32px 0 0 -2px, 48px 0 0 -2px;
    }

    50% {
        box-shadow: 16px 0 0 -2px, 32px 0 0 2px, 48px 0 0 -2px;
    }

    75% {
        box-shadow: 16px 0 0 -2px, 32px 0 0 -2px, 48px 0 0 2px;
    }

    100% {
        box-shadow: 16px 0 0 -2px, 32px 0 0 -2px, 48px 0 0 -2px;
    }
}
</style>