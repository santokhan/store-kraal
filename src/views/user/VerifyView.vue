<template>
    <div class="bg-gray-50">
        <div class="mx-auto max-w-screen-xl h-screen px-4 grid place-items-center">
            <div
                class="bg-svg w-full max-w-2xl mx-auto p-6 lg:py-12 bg- white grid place-items-center text-center bord er border-gray-200 relative overflow-visible shadow bg-white rounded-xl">
                <div class="w-32 lg:w-40 rounded-full grid place-items-center absolute bottom-full translate-y-1/2">
                    <KraalIcon class="w-full text-kraal-blue-500" />
                </div>
                <div class="max-w-lg flex flex-col items-center relative">
                    <h5 class="mt-6 mb-5 text-2xl font-semibold tracking-tight text-gray-700">Please verify your email</h5>
                    <p class="mb-5 font-normal text-gray-500" v-if="currentUser">
                        You are almost there! We sent an email to
                        <a href="https://mail.google.com/mail/u/0/"
                            class="text-kraal-blue-500 underline hover:text-kraal-blue-700">
                            {{ currentUser.email }}</a>
                    </p>
                    <p class="mb-5 font-normal text-gray-500">
                        Just click on the link in that email to complete your sign up.
                        If you do not see it, you may need to check your spam folder.
                    </p>
                    <div class="space-y-4">
                        <p class="font-normal text-gray-500">Still can't find the email?</p>
                        <div class="">
                            <button @click="resend" :class="[
                                'inline-flex items-center px-5 py-2.5 text-sm font-medium text-center rounded-lg',
                                'text-white bg-kraal-blue-500 hover:bg-kraal-blue-600'
                            ]">
                                {{ isSent ? "Email sent" : "Resend email" }}
                            </button>
                        </div>
                        <p class="font-normal text-gray-500 hidden">
                            Need help? <RouterLink to="/contact-us"
                                class="text-kraal-blue-500 underline hover:text-kraal-blue-700">
                                Contact Us
                            </RouterLink>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onBeforeMount, Ref } from "vue";
import KraalIcon from "../../components/icons/kraal.v2.vue";
import { LocationQueryValue, RouterLink, useRoute, useRouter } from "vue-router";
import * as firebase from "../../firebase/services";
import { getCurrentUser } from "vuefire";
import { User } from "firebase/auth";

const router = useRouter();
const route = useRoute();
const currentUser: Ref<User | null> = ref(null);

const isSent = ref<boolean>(false)

async function resend() {
    const sent = await firebase.sendEmailVerification();
    isSent.value = true;
}

async function redirect() {
    currentUser.value = await getCurrentUser() ?? null;

    if (currentUser.value && currentUser.value.emailVerified) {
        const redirect: LocationQueryValue | LocationQueryValue[] = route.query.redirect
        if (typeof redirect === 'string') {
            router.push(redirect);
        } else {
            // if redirect url not found
            router.push("/kraalai");
        }
    }
}

onBeforeMount(redirect)
</script>
