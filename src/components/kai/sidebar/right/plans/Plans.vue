<template>
    <Menu as="div" class="relative inline-block text-left">
        <MenuButton type="button"
            class="text-white border border-gray-500 hover:bg-white/10 font-medium rounded-lg px-5 py-3 focus:outline-none flex gap-2 items-center focus:bg-transparent+">
            <span>{{ plans[activePlanIdx].title }}</span>
            <ChevronDownIcon class="w-5 h-5" />
        </MenuButton>

        <transition enter-active-class="transition duration-100 ease-out" enter-from-class="transform scale-95 opacity-0"
            enter-to-class="transform scale-100 opacity-100" leave-active-class="transition duration-75 ease-in"
            leave-from-class="transform scale-100 opacity-100" leave-to-class="transform scale-95 opacity-0" class="w-full">
            <MenuItems
                class="absolute+ left-0 mt-2 w-56+ w-full origin-top-right divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black/5">
                <div class="space-y-4 p-4 rounded-lg bg-chatgpt-500">
                    <div class="flex items-start gap-3" v-for="(plan, planIdx) in plans" :key="planIdx">
                        <div class="pt-[2px]">
                            <input :id="plan.title.replace(/\s/g, '')" name="plan" type="radio" class="h-4 w-4"
                                @change="() => { activePlanIdx = planIdx }" :checked="activePlanIdx === planIdx">
                        </div>
                        <label class="text-gray-300 hover:opacity-80" :for="plan.title.replace(/\s/g, '')">
                            <h5 class="font-semibold text-sm text-white">{{ plan.title }}</h5>
                            <p id="small-description" class="text-sm mt-1">{{ plan.description }}</p>
                        </label>
                    </div>
                    <div class="">
                        <button type="button"
                            class="text-white border border-gray-500 font-normal rounded-lg px-4 py-3 hover:bg-white/10 focus:bg-transparent text-sm w-full">
                            This model will incur additional rates
                        </button>
                    </div>
                </div>
            </MenuItems>
        </transition>
    </Menu>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Menu, MenuButton, MenuItems } from "@headlessui/vue"
import { ChevronDownIcon } from "@heroicons/vue/24/outline";

const plans = [
    {
        title: "Basic Model",
        description: "Limited features"
    },
    {
        title: "Advanced Model",
        description: "Premium features"
    },
]

const activePlanIdx = ref<number>(0);
</script>