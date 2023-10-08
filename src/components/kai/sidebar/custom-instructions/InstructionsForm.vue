<template>
    <div class="px-4 pb-4 pt-5 sm:p-6 flex items-center justify-between border-b border-black/10">
        <div class="flex">
            <div class="flex items-center">
                <div class="flex flex-col gap-1 text-center sm:text-left">
                    <h2 id="radix-:re:" as="h3" class="text-lg font-medium leading-6">
                        <div class="flex flex-row gap-2">Custom instructions<span data-state="closed"><svg
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" fill="none"
                                    class="h-6 w-6 flex-shrink-0 text-gray-500">
                                    <path
                                        d="M8.4375 8.4375L8.46825 8.4225C8.56442 8.37445 8.67235 8.35497 8.77925 8.36637C8.88615 8.37776 8.98755 8.41955 9.07143 8.48678C9.15532 8.55402 9.21818 8.64388 9.25257 8.74574C9.28697 8.8476 9.29145 8.95717 9.2655 9.0615L8.7345 11.1885C8.70836 11.2929 8.7127 11.4026 8.74702 11.5045C8.78133 11.6065 8.84418 11.6965 8.9281 11.7639C9.01202 11.8312 9.1135 11.8731 9.2205 11.8845C9.32749 11.8959 9.43551 11.8764 9.53175 11.8282L9.5625 11.8125M15.75 9C15.75 9.88642 15.5754 10.7642 15.2362 11.5831C14.897 12.4021 14.3998 13.1462 13.773 13.773C13.1462 14.3998 12.4021 14.897 11.5831 15.2362C10.7642 15.5754 9.88642 15.75 9 15.75C8.11358 15.75 7.23583 15.5754 6.41689 15.2362C5.59794 14.897 4.85382 14.3998 4.22703 13.773C3.60023 13.1462 3.10303 12.4021 2.76381 11.5831C2.42459 10.7642 2.25 9.88642 2.25 9C2.25 7.20979 2.96116 5.4929 4.22703 4.22703C5.4929 2.96116 7.20979 2.25 9 2.25C10.7902 2.25 12.5071 2.96116 13.773 4.22703C15.0388 5.4929 15.75 7.20979 15.75 9ZM9 6.1875H9.006V6.1935H9V6.1875Z"
                                        stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round"></path>
                                </svg></span>
                        </div>
                    </h2>
                </div>
            </div>
        </div>
    </div>
    <div class="p-4 sm:p-6 sm:pt-4">
        <p class="text-muted pb-3 pt-2 text-sm">What would you like ChatGPT to know about you
            to provide better responses?</p>
        <div class="mb-3"><textarea
                class="w-full	resize-none rounded p-4 placeholder:text-gray-300 border border-gray-100 focus:border-brand-green"
                rows="7" type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:r1d:"
                data-state="closed"></textarea>
            <div class="flex items-center justify-between px-1 text-xs text-gray-400">
                <div>0/1500</div><button class="flex items-center gap-1 text-gray-200"></button>
            </div>
        </div>
        <p class="text-muted py-3 text-sm">How would you like ChatGPT to respond?</p>
        <div><textarea
                class="w-full	resize-none rounded p-4 placeholder:text-gray-300 border border-gray-100 focus:border-brand-green"
                rows="7" type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:r1h:"
                data-state="closed"></textarea>
            <div class="flex items-center justify-between px-1 text-xs text-gray-400">
                <div>0/1500</div><button class="flex items-center gap-1 text-gray-200"></button>
            </div>
        </div>
        <div class="mt-5 sm:mt-4">
            <div class="flex flex-grow flex-col items-stretch justify-between gap-0 sm:flex-row sm:items-center sm:gap-3">
                <label class="mt-5 flex cursor-pointer flex-row justify-between gap-2 sm:mt-4">
                    <div class="self-center text-sm">Enable for new chats</div><button type="button" role="switch"
                        aria-checked="true" data-state="checked" value="on" aria-label="Disable chat preferences"
                        class="cursor-pointer bg-gray-200 radix-state-checked:bg-green-600 relative h-[25px] w-[42px] shrink-0 rounded-full"><span
                            data-state="checked"
                            class="flex h-[21px] w-[21px] items-center justify-center rounded-full translate-x-0.5 transition-transform duration-100 will-change-transform radix-state-checked:translate-x-[19px] bg-white shadow-[0_1px_2px_rgba(0,0,0,0.45)]"></span></button>
                </label>
                <div class="mt-5 flex flex-col gap-3 sm:mt-4 sm:flex-row">
                    <button type="button" class="h-10 px-4 text-gray-400 font-semibold rounded-lg border border-gray-400"
                        @click="props.handleCancel">Cancel</button>
                    <button type="button"
                        class="h-10 px-4 text-chatgpt-600 font-semibold rounded-lg bg-gray-400 hover:bg-gray-500">Save</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{ handleCancel: () => void }>()
</script>
