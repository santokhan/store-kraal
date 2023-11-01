<template>
    <button type="button" :class="[
        'min-h-[6rem] rounded-lg p-4 space-y-4 border-t border-t-white/30 grid place-items-center',
        'bg-chatgpt-400 hover:bg-kraal-purple-500/80']" title="Add new">
        <div class="w-8 h-8 grid place-items-center overflow-hidden">
            <i class="fa fa-plus text-xl" aria-hidden="true"></i>
        </div>
    </button>
</template>