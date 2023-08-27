<template>
    <div class="bg-white px-6 py-4 w-full h-full max-w-lg rounded-lg border shadow-sm space-y-1">
        <div class="font-medium text-gray-400 sm:text-lg">Income Statement</div>
        <!-- Version Label -->
        <div class="flex items-center justify-between py-2">
            <div class="text-gray-500 font-medium">
                Current Version: {{ currentPLVersionIndex + 1 }}
            </div>
            <button @click="cyclePLVersions" type="button" class="rounded-lg px-2 py-1 border flex items-center gap-2"
                title="Cycle Versions">
                <span class="leading-[1]">Next Version</span>
                <svg class="rotate-90" width="6" height="10" viewBox="0 0 6 10" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L5 5L1 9" stroke="currentColor" stroke-width="1.5" stroke- linecap="round"
                        stroke-linejoin="round"></path>
                </svg>
            </button>
        </div>
        <!-- P&L Version Section -->
        <div class="py-2">
            <component :is="currentPLVersionComponent" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import CF from '../cash-flow/CashFlow.vue';
import PL from '../pl-with-ts/PLWithTS.vue';
import BS from '../pl-with-ts/PLWithTS.vue';

const currentPLVersionIndex = ref(0)
const plVersions: any[] = [CF, PL, BS];

function currentPLVersionComponent() {
    return plVersions[currentPLVersionIndex.value];
}
function cyclePLVersions() {
    currentPLVersionIndex.value = (currentPLVersionIndex.value + 1) % plVersions.length;
}

// export default class Card extends Vue {
//     private currentPLVersionIndex: number = 0;
//     private plVersions: any[] = [CF, PLVersion2, PLVersion3];
//     private get currentPLVersionComponent(): any {
//         return this.plVersions[this.currentPLVersionIndex];
//     }
//     private cyclePLVersions(): void {
//         this.currentPLVersionIndex = (this.currentPLVersionIndex + 1) %
//             this.plVersions.length;
//     }
// }
</script>
