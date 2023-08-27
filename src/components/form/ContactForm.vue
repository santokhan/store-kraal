<template>
    <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-2">
        <div class="max-w-md w-full space-y-8">
            <div class="flex flex-col items-center">
                <img src="../../assets/image/girl-workplace.svg" alt="Monet Style Illustration" class="h-50 w-auto" />
                <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
                    Get in touch
                </h2>
                <p class="text-center text-sm text-gray-600">
                    We would love to hear from you.
                </p>
            </div>
            <form class="mt-8 space-y-6" @submit.prevent="submitForm" v-if="!state.submitted">
                <input type="hidden" name="remember" value="true" />
                <div class="rounded-md shadow-sm -space-y-px">
                    <div>
                        <label for="email-address" class="sr-only">Email address</label>
                        <input id="email-address" name="email" type="email" v-model="state.form.email" autocomplete="email"
                            required
                            class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="Email address" />
                    </div>
                    <div>
                        <label for="message" class="sr-only">Message</label>
                        <textarea id="message" name="message" v-model="state.form.message" required :maxlength="500"
                            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            placeholder="Your message"></textarea>
                        <p class="mt-2 text-sm text-gray-500">{{ 500 - state.form.message.length }} characters left
                        </p>
                    </div>
                </div>
                <div>
                    <button type="submit" :disabled="state.submitting"
                        class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <span v-if="state.submitting" class="animate-spin mr-2">
                            <!-- Add a loading spinner animation here -->
                        </span>
                        Send
                    </button>
                </div>
            </form>
            <div v-else>
                <p v-if="state.success" class="text-green-500">Form submitted successfully!</p>
                <p v-else-if="state.error" class="text-red-500">Form submission failed. Please try again later.</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

const state: any = reactive({
    form: { email: '', message: '' },
    submitting: false,
    submitted: false,
    success: false,
    error: false,
})

async function submitForm() {
    try {
        state.submitting = true;
        console.log('Form submitted', state.form);
        // TODO: Implement form submission logic (e.g., make HTTP request)
        // Simulating a successful form submission
        await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulating an asynchronous action
        state.success = true;
        state.submitted = true;
        state.form = {
            email: '',
            message: '',
        };
    } catch (error) {
        console.error('Form submission error', error)
        state.error = true;
        state.submitted = true;
    } finally {
        state.submitting = false;
    }
}
</script>