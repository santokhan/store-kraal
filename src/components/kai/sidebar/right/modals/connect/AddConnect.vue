<template>
    <div class="bg-[#343541] hover:bg-[#343541]/80 p-4 grid place-items-center gap-2 rounded-xl text-center">
        <div class="grid place-items-center gap-4">
            <PlusIcon class="w-8 h-8 object-contain" />
            <div class="">
                <h4 class="font-medium">Add</h4>
                <p class="text-xs text-[#8A96BC]">New API</p>
            </div>
        </div>
    </div>
</template>
 
<script setup lang="ts">
import { PlusIcon } from '@heroicons/vue/24/outline';
</script>
 
 