<template>
    <div class="bg-gray-50">
        <div class="mx-auto max-w-screen-xl h-screen px-4 grid place-items-center">
            <div
                class="bg-svg w-full max-w-2xl mx-auto p-6 lg:py-12 bg- white grid place-items-center text-center bord er border-gray-200 rounded-lg shado w relative">
                <div
                    class="w-20 lg:w-24 h-20 lg:h-24 bg-gray -50 rounded-full grid place-items-center p-4 absolute -top-10 lg:-top-12">
                    <KraalIcon class="text-kraal-blue-500" />
                </div>
                <div class="max-w-lg flex flex-col items-center">
                    <h5 class="mt-6 mb-5 text-2xl font-semibold tracking-tight text-gray-700">Please verify your email</h5>
                    <p class="mb-5 font-normal text-gray-500">
                        You are almost there! We send an e-mail to {{ email || "doe@example.com" }}
                    </p>
                    <p class="mb-5 font-normal text-gray-500">
                        Just click on the link in that e-mail to complete your sign up.
                        If you do not see it, you may need to check your spam folder.
                    </p>
                    <div class="mb-4">
                        <p class="mb-4 font-normal text-gray-500">Still can't find the e-mail?</p>
                        <div class="mb-4">
                            <a href="#"
                                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-kraal-blue-700 rounded-lg hover:bg-kraal-blue-800 focus:ring-4 focus:outline-none focus:ring-kraal-blue-300">
                                Resend Email
                            </a>
                        </div>
                        <p class="font-normal text-gray-500">Need help? <a href=""
                                class="text-kraal-blue-500 underline">Contact Us</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import KraalIcon from '../../components/icons/kraal.v2.vue'

const email = ref<string>()
</script>

<style scope>
.top-brand-shadow {
    box-shadow: inset 0 -1px 2px #00000010
}

.bg-svg {
    background-image: url(../../assets/image/cfo/bg/verify-email.svg);
    background-position-x: center;
    background-position-y: top;
    background-size: contain;
    background-repeat: no-repeat;
}
</style>
