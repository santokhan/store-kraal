<template>
    <div :class='[
        "w-full max-w-lg h-full max-h-[572px] overflow-auto",
        "bg-white rounded-xl shadow-xl shadow-gray-200 px-5 lg:px-6 pb-5"
    ]'>
        <slot></slot>
    </div>
</template>