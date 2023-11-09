<template>
    <li class="bg-[#181A1C] rounded-xl overflow-hidden">
        <div class="flex items-center justify-between px-4 py-2 bg-[#3B3B3D]">
            <div class="flex items-center gap-3">
                <h5 class="text-white font-medium">Meeting Title</h5>
                <p class="text-gray-200 text-sm">Oct 20 2023</p>
            </div>
            <button type="button" class="flex gap-2 items-center text-sm font-medium text-gray-100 hover:text-gray-300 focus:text-indigo-500">
                <svg class="w-5" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M7.07196 15.182C7.47196 15.56 7.98594 15.749 8.49994 15.749C9.01394 15.749 9.52692 15.56 9.92792 15.182L16.2018 9.25403C16.7228 8.76203 16.8899 8.01301 16.6249 7.34601C16.3589 6.67901 15.726 6.24902 15.008 6.24902H13.165V2C13.165 1.035 12.38 0.25 11.415 0.25H5.41498C4.44998 0.25 3.66498 1.035 3.66498 2V6.25H1.99188C1.27388 6.25 0.639938 6.68098 0.374938 7.34698C0.109938 8.01398 0.276034 8.76203 0.798034 9.25403L7.07196 15.182ZM1.76996 7.901C1.79696 7.832 1.85786 7.75 1.99286 7.75H4.41595C4.61495 7.75 4.80598 7.67103 4.94598 7.53003C5.08598 7.38903 5.16595 7.199 5.16595 7V2C5.16595 1.862 5.27795 1.75 5.41595 1.75H11.416C11.554 1.75 11.666 1.862 11.666 2V7C11.666 7.199 11.7449 7.39003 11.8859 7.53003C12.0269 7.67103 12.217 7.75 12.416 7.75H15.009C15.144 7.75 15.2039 7.832 15.2319 7.901C15.2589 7.97 15.272 8.071 15.174 8.164L8.89984 14.092C8.67484 14.303 8.32797 14.303 8.10297 14.092L1.82904 8.164C1.72904 8.071 1.74196 7.97 1.76996 7.901ZM16.2499 19C16.2499 19.414 15.9139 19.75 15.4999 19.75H1.49994C1.08594 19.75 0.749938 19.414 0.749938 19C0.749938 18.586 1.08594 18.25 1.49994 18.25H15.4999C15.9139 18.25 16.2499 18.586 16.2499 19Z"
                        fill="currentColor" />
                </svg>
                Download
            </button>
        </div>
        <p class="text-sm text-[#8A96BC] p-4">
            In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form
            of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder
            before final copy is available.
        </p>
    </li>
</template>

<script setup lang="ts">
// defineProps<{ title: string, date: string, label: string, active: boolean }>()
</script>

<style scoped></style>