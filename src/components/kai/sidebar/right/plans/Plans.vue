<template>
    <Menu as="div" class="relative inline-block text-left">
        <div>
            <MenuButton
                class="text-white bg-purple-500 hover:bg-purple-600 font-medium rounded-lg px-5 py-3 focus:outline-none flex gap-2 items-center">
                <i class="pi pi-box w-4 h-4"></i>
                <span>Get premium</span>
            </MenuButton>
        </div>

        <transition enter-active-class="transition duration-100 ease-out" enter-from-class="transform scale-95 opacity-0"
            enter-to-class="transform scale-100 opacity-100" leave-active-class="transition duration-75 ease-in"
            leave-from-class="transform scale-100 opacity-100" leave-to-class="transform scale-95 opacity-0">
            <MenuItems
                class="absolute+ left-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black/5 focus:outline-none">
                <div class="space-y-4 p-4 rounded-lg bg-chatgpt-500">
                    <div class="flex items-start gap-3">
                        <div class="pt-[2px]">
                            <input id="Basic" aria-describedby="small-description" name="plan" type="radio" class="">
                        </div>
                        <label class="" for="Basic">
                            <h5 class="font-semibold text-sm text-white">Basic</h5>
                            <p id="small-description" class="text-sm text-gray-300 mt-1">Basic features</p>
                        </label>
                    </div>
                    <div class="flex items-start gap-3">
                        <div class="pt-[2px]">
                            <input id="Premium" aria-describedby="medium-description" name="plan" type="radio" class="">
                        </div>
                        <label class="" for="Premium">
                            <h5 class="font-semibold text-sm text-white">Premium</h5>
                            <p id="medium-description" class="text-sm text-gray-300 mt-1">Premium features</p>
                        </label>
                    </div>
                    <div class="">
                        <button type="button"
                            class="text-white bg-purple-500 hover:bg-purple-600 font-medium rounded-lg px-5 py-2.5 focus:outline-none text-sm w-full">
                            Upgrade to plus
                        </button>
                    </div>
                </div>
            </MenuItems>
        </transition>
    </Menu>
</template>

<script setup lang="ts">
import { Menu, MenuButton, MenuItems } from "@headlessui/vue"
import { ChevronDownIcon } from "@heroicons/vue/24/outline";
</script>

<style scoped></style>