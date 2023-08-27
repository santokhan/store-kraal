<template>
    <DBLayout>
        <div class="px-4 sm:px-12 py-6">
            <div class="mx-auto max-w-5xl flex flex-col flex-wrap items-center gap-10">
                <!-- Page Header -->
                <div class="w-full space-y-2">
                    <div class="text-3xl font-semibold">User Settings</div>
                    <p class="text-gray-600">{{ userData.email }}</p>
                </div>
                <!-- General Info -->
                <div class="bg-white rounded-lg shadow p-6 border border-gray-200 w-full">
                    <div class="border-b border-gray-200 pb-2 mb-4">
                        <h2 class="text-2xl font-semibold">Profile</h2>
                    </div>
                    <div class="mt-4 space-y-4" v-if="!userData.isEditing">
                        <div>
                            <dl class="space-y-2 mt-2 divide-y divide-gray-100">
                                <div class="grid grid-cols-2 py-2">
                                    <dt>Avatar:</dt>
                                    <dd>{{ userData.avatar }}</dd>
                                </div>
                                <div class="grid grid-cols-2 py-2 bg-gray-50">
                                    <dt>Name:</dt>
                                    <dd>{{ userData.firstName }} {{ userData.lastName }}</dd>
                                </div>
                                <div class="grid grid-cols-2 py-2">
                                    <dt>Email:</dt>
                                    <dd>{{ userData.email }}</dd>
                                </div>
                                <!-- <div class="grid grid-cols-2 py-2 bg-gray-50">
                                    <dt>Password:</dt>
                                    <dd>{{ userData.userPassword }}</dd>
                                </div> -->
                                <div class="grid grid-cols-2 py-2">
                                    <dt>Default team:</dt>
                                    <dd>{{ userData.defaultTeam }}</dd>
                                </div>
                            </dl>
                            <div class="mt-4">
                                <button class="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
                                    @click="toggleEdit">Edit settings</button>
                            </div>
                        </div>
                    </div>
                    <div class="mt-4 space-y-4" v-else>
                        <div>
                            <form @submit.prevent="updateUserSettings">
                                <div class="grid grid-cols-2 py-2">
                                    <dt>Avatar:</dt>
                                    <dd><input v-model="userData.avatar" type="text" /></dd>
                                </div>
                                <div class="grid grid-cols-2 py-2 bg-gray-50">
                                    <dt>Name:</dt>
                                    <dd><input v-model="userData.userName" type="text" /></dd>
                                </div>
                                <div class="grid grid-cols-2 py-2">
                                    <dt>Email:</dt>
                                    <dd><input v-model="userData.email" type="email" /></dd>
                                </div>
                                <!-- <div class="grid grid-cols-2 py-2 bg-gray-50">
                                    <dt>Password:</dt>
                                    <dd><input v-model="userData.userPassword" type="password" /></dd>
                                </div> -->
                                <div class="grid grid-cols-2 py-2">
                                    <dt>Default team:</dt>
                                    <dd><input v-model="userData.defaultTeam" type="text" /></dd>
                                </div>
                                <div class="mt-4">
                                    <button class="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
                                        type="submit">Save settings</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <!-- Connected Accounts -->
                <div class="bg-white rounded-lg shadow p-6 border border-gray-200 w-full">
                    <div class="border-b border-gray-200 pb-2 mb-4">
                        <h2 class="text-2xl font-semibold">Connected Accounts</h2>
                    </div>
                    <div class="mt-4">
                        <p>Connect your Kraal account to your accounting system, bank accounts,
                            credit card accounts, CRM and other supported business information systems.</p>
                        <div class="mt-4">
                            <button class="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">Edit
                                settings</button>
                        </div>
                    </div>
                </div>
                <!-- Security -->
                <div class="bg-white rounded-lg shadow p-6 border border-gray-200 w-full">
                    <div class="border-b border-gray-200 pb-2 mb-4">
                        <h2 class="text-2xl font-semibold">Security</h2>
                    </div>
                    <div class="mt-4">
                        <p>Enable two-factor authentication to add an extra layer of security to your
                            account. We support 2FA via SMA and Google Authenticator only.</p>
                        <div class="mt-4">
                            <button class="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">Enable two-factor
                                authentication</button>
                        </div>
                    </div>
                </div>
                <!-- Danger Zone -->
                <div class="w-full">
                    <h2 class="text-xl text-red-600 font-semibold">Danger zone</h2>
                    <p>Irreversible and destructive actions</p>

                    <div class="bg-white rounded-lg shadow p-6 mt-4 border border-gray-200">
                        <div class="border-b border-gray-200 pb-2 mb-4">
                            <h2 class="text-2xl font-semibold">Delete User</h2>
                        </div>
                        <p class="mt-4">
                            Once you delete your user, there is no going back. Please be certain.
                        </p>
                        <div class="mt-4">
                            <button class="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600">Delete User</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </DBLayout>
</template>

<script lang="ts" setup>
import { reactive } from "vue";
import DBLayout from "../components/shared/dashboard-layout/DBLayout.vue";
import { useRoute } from 'vue-router'
import getUserInfo from '../firebase/read.business.user'
import { getCurrentUser } from "vuefire";

const route = useRoute();
const path = route.path;

getCurrentUser().then(currenUser => {
    const email = currenUser?.email;
    if (email) {
        getUserInfo(email).then(dataInfo => {
            Object.assign(userData, dataInfo)
            console.log(dataInfo)
            
        })
    } else {
        console.error("Can not read user email")
    }
})

const userData: any = reactive({
    avatar: 'User avatar',
    userName: 'User name',
    userEmail: 'user@example.com',
    userPassword: '•••••••',
    defaultTeam: 'Default team',
    isEditing: false,
})
function toggleEdit() {
    userData.isEditing = !userData.isEditing;
}
async function updateUserSettings() {
    try {
        const response = await fetch('http://your-api-url/settings', {
            method: 'POST',
            body: JSON.stringify({
                avatar: userData.avatar,
                userName: userData.userName,
                userEmail: userData.userEmail,
                userPassword: userData.userPassword,
                defaultTeam: userData.defaultTeam
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        console.log(data);
        userData.isEditing = false;
    } catch (error) {
        console.error('Error:', error);
    }
}
</script>

<style scoped>
/* You can include CSS styles here for your component */
</style>
