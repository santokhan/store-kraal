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
                    <div class="border-b border-gray-200 pb-2">
                        <h2 class="text-2xl font-semibold">Profile</h2>
                    </div>
                    <div class="space-y-4" v-if="!userData.isEditing">
                        <table class="w-full">
                            <thead>
                                <tr>
                                    <th scope="col" class="w-1/2"></th>
                                    <th scope="col" class="w-1/2"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="">
                                    <td class="py-2.5 border-t">Avatar</td>
                                    <td class="py-2.5 border-t">
                                        <div
                                            class="w-11 h-11 bg-gray-50 border rounded-full flex justify-center items-center font-semibold">
                                            {{ userData.firstName?.slice(0, 1) }}{{ userData.lastName?.slice(0, 1) }}
                                        </div>
                                    </td>
                                </tr>
                                <tr class="bg-gray-50">
                                    <td class="py-2.5 border-t">Name</td>
                                    <td class="py-2.5 border-t">{{ userData.firstName }} {{ userData.lastName }}</td>
                                </tr>
                                <tr class="">
                                    <td class="py-2.5 border-t">Email</td>
                                    <td class="py-2.5 border-t">{{ userData.email }}</td>
                                </tr>
                                <tr class="bg-gray-50">
                                    <td class="py-2.5 border-t">Default team</td>
                                    <td class="py-2.5 border-t">{{ userData.defaultTeam }}</td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="mt-6">
                            <button class="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
                                @click="toggleEdit">Edit settings</button>
                        </div>
                    </div>
                    <div v-else>
                        <form @submit.prevent="updateUserSettings">
                            <table class="w-full">
                                <thead>
                                    <tr>
                                        <th scope="col" class="w-1/2"></th>
                                        <th scope="col" class="w-1/2"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="py-2.5">Avatar</td>
                                        <td class="py-2.5">
                                            <div
                                                class="w-11 h-11 bg-gray-50 border rounded-full flex justify-center items-center font-semibold">
                                                {{ userData.firstName?.slice(0, 1) }}{{ userData.lastName?.slice(0, 1)
                                                }}
                                            </div>
                                        </td>
                                    </tr>
                                    <tr class="bg-gray-50">
                                        <td class="py-2.5">Name</td>
                                        <td class=""><input v-model="userData.userName" type="text"
                                                class="bg-transparent border px-3 h-9 rounded-xl" />
                                        </td>
                                    </tr>
                                    <tr class="">
                                        <td class="py-2.5">Email</td>
                                        <td class=""><input v-model="userData.email" type="email"
                                                class="bg-transparent border px-3 h-9 rounded-xl" /></td>
                                    </tr>
                                    <tr class="bg-gray-50">
                                        <td class="py-2.5">Default team</td>
                                        <td class=""><input v-model="userData.defaultTeam" type="text"
                                                class="bg-transparent border px-3 h-9 rounded-xl" />
                                        </td>
                                    </tr>
                                </tbody>
                                <div class="pt-4">
                                    <button class="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
                                        type="submit">Save settings</button>
                                </div>
                            </table>
                        </form>
                    </div>
                </div>
                <!-- Connected Accounts -->
                <!-- <div class="bg-white rounded-lg shadow p-6 border border-gray-200 w-full">
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
                </div> -->
                <!-- Security -->
                <div class="bg-white rounded-lg shadow p-6 border border-gray-200 w-full">
                    <div class="border-b border-gray-200 pb-2 mb-4">
                        <h2 class="text-2xl font-semibold">Security</h2>
                    </div>
                    <div class="mt-4">
                        <p>Enable two-factor authentication to add an extra layer of security to your
                            account. We support 2FA via SMS and Google Authenticator only.</p>
                        <div class="mt-4">
                            <button class="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">Enable two-factor
                                authentication</button>
                        </div>
                    </div>
                </div>
                <!-- Danger Zone -->
                <!-- <div class="w-full">
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
                </div> -->
            </div>
        </div>
    </DBLayout>
</template>

<script lang="ts" setup>
import { reactive } from "vue"
import DBLayout from "../components/shared/dashboard-layout/DBLayout.vue"
import getUserInfo from "../firebase/read.business.user"
import { getCurrentUser } from "vuefire"

interface UserData {
    avatar: string
    userName: string
    userEmail: string
    userPassword: string
    defaultTeam: string
    isEditing: boolean,
}

async function getUserData() {
    const user = await getCurrentUser()
    const email = user?.email;
    if (email) {
        getUserInfo(email).then(dataInfo => {
            Object.assign(userData, dataInfo)
        })
    } else { console.error("Can not read user email") }
} getUserData()

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
        userData.isEditing = false;
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
        // userData.isEditing = false;
    } catch (error) { console.error('Error:', error) }
}
</script>

<style scoped>
/* You can include CSS styles here for your component */
</style>
