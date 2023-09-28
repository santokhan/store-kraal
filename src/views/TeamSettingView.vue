<template>
    <DBLayout>
        <div class="px-4 sm:px-12 py-6">
            <div class="max-w-5xl mx-auto flex flex-wrap items-start gap-10">
                <!-- Page Header -->
                <div class="space-y-2 w-full">
                    <div class="text-3xl font-semibold">Team details</div>
                    <p class="text-gray-600">Your team’s profile and single sign-on information</p>
                </div>
                <!-- General Info -->
                <div class="bg-white rounded-lg shadow p-6 border border-gray-200 w-full">
                    <div class="border-b border-gray-200 pb-2 mb-4">
                        <h2 class="text-2xl font-semibold capitalize">General</h2>
                    </div>
                    <p class="mt-4">
                        Settings for {{ state.teamName }}<br />
                        Starter<br />
                        1 team member.<br />
                        Team created at 11:49 AM (an hour ago).
                    </p>
                </div>
                <!-- Team details -->
                <div class="bg-white rounded-lg shadow p-6 border border-gray-200 w-full">
                    <div class="border-b border-gray-200 pb-2 mb-4">
                        <h2 class="text-2xl font-semibold capitalize">Team Information</h2>
                    </div>
                    <div class="mt-4 space-y-4">
                        <div>
                            <dl class="space-y-2 mt-2 divide-y divide-gray-100">
                                <div class="grid grid-cols-2 py-2">
                                    <dt>Name:</dt>
                                    <dd v-if="!state.isEditing">{{ state.teamName }}</dd>
                                    <dd v-else><input v-model="state.editableTeamName" type="text"></dd>
                                </div>

                                <div class="grid grid-cols-2 py-2">
                                    <dt>Logo:</dt>
                                    <dd v-if="!state.isEditing">{{ state.teamLogo }}</dd>
                                    <dd v-else><input v-model="state.editableTeamLogo" type="text"></dd>
                                </div>
                                <div class="grid grid-cols-2 py-2 bg-gray-50">
                                    <dt>Current plan:</dt>
                                    <dd>{{ state.teamPlan }}</dd>
                                </div>
                            </dl>
                            <div class="mt-4 flex flex-col lg:flex-row gap-2 items-start">
                                <button class="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 block"
                                    @click="openPlanModal">Change team plan</button>
                                <button v-if="!state.isEditing"
                                    class="px-4 py-2 text-white bg-gray-500 rounded hover:bg-gray-600 block"
                                    @click="toggleEdit">Edit team information</button>
                                <button v-else class="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 block"
                                    @click="updateTeamSettings">Save</button>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Query Pack -->
                <div class="bg-white rounded-lg shadow p-6 border border-gray-200 w-full">
                    <div class="border-b border-gray-200 pb-2 mb-4">
                        <h2 class="text-2xl font-semibold capitalize">Query Pack</h2>
                    </div>
                    <p class="mt-4">
                        Add Kraal query tokens. These tokens are used to run queries on the AI
                        engine to continue fulfilling requests
                        and responses once you exhaust your monthly allocation. The packs are in
                        $100 bundles that expire after 6 months
                        and $50 bundles that expire after 3 months.
                    </p>
                    <div class="mt-4">
                        <button class="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">Add
                            Tokens</button>
                    </div>
                </div>
                <!-- Invite team member -->
                <div class="bg-white rounded-lg shadow p-6 border border-gray-200 w-full">
                    <div class="border-b border-gray-200 pb-2 mb-4">
                        <h2 class="text-2xl font-semibold capitalize">Invite team member</h2>
                    </div>
                    <form class="mt-4">
                        <div class="flex items-center gap-2 relative">
                            <label for="email" class="absolute left-3 text-gray-700"><i class="fa fa-envelope"></i></label>
                            <input type="email" name="email" id="email" placeholder="someone@kraal.com" maxlength="24"
                                class="block px-4 max-w-md w-full h-10 text-noom-text-900 text-base rounded-xl border bg-gray-100 outline-none pl-9"
                                autocomplete="false">
                            <button class="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">Sent
                                Invitation</button>
                        </div>
                    </form>
                </div>
                <!-- Danger Zone -->
                <div class="w-full">
                    <div class="bg-white rounded-lg shadow p-6 mt-4 border border-gray-200">
                        <div class="border-b border-gray-200 pb-2 mb-4">
                            <h2 class="text-2xl font-semibold capitalize">Manage team member</h2>
                        </div>
                        <p class="mt-4">This team was created at Kraal signup and cannot be deleted.To remove all your data
                            from Kraal, delete your user under User settings.</p>
                        <div class="mt-4">
                            <button class="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600">Manage</button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Modal for changing team plan -->
            <div v-if="state.showModal"
                class="fixed w-full h-screen flex justify-center items-center z-10 inset-0 overflow-y-auto" aria-
                labelledby="modal-title" role="dialog" aria-modal="true">
                <div class="flex items-end justify-center pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <div class="fixed inset-0 transition-opacity" aria-hidden="true" @click="closePlanModal">
                        <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
                    </div>
                    <div
                        class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                        <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                            <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-title">Change Team Plan</h3>
                            <div class="mt-2">
                                <select v-model="state.selectedPlan"
                                    class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                    <option v-for="plan in state.teamPlans" :key="plan.id" :value="plan.name">
                                        {{ plan.name }}
                                    </option>
                                </select>
                            </div>
                        </div>
                        <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                            <button type="button" @click="changePlan(state.selectedPlan)"
                                class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm">Change
                                Plan</button>
                            <button type="button"
                                class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                @click="closePlanModal">Cancel</button>
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

const state: any = reactive({
    teamName: 'Kraal',
    teamSlug: 'naggor',
    teamLogo: 'None',
    teamPlan: 'Starter',
    isEditing: false,
    showModal: false,
    editableTeamName: '',
    editableTeamSlug: '',
    editableTeamLogo: '',
    teamPlans: [
        { id: 1, name: 'Starter' },
        { id: 2, name: 'Pro' },
        { id: 3, name: 'Enterprise' }
    ],
    selectedPlan: ''
})

function toggleEdit() {
    state.isEditing = !state.isEditing;
    if (state.isEditing) {
        state.editableTeamName = state.teamName;
        state.editableTeamSlug = state.teamSlug;
        state.editableTeamLogo = state.teamLogo;
    }
}
function updateTeamSettings() {
    // perform your API call to update the team settings here
    // then update the data and close the editing mode
    state.teamName = state.editableTeamName;
    state.teamSlug = state.editableTeamSlug;
    state.teamLogo = state.editableTeamLogo;
    state.toggleEdit();
}
function openPlanModal() {
    state.showModal = true;
    // Make the current plan the default selected in the modal
    state.selectedPlan = state.teamPlan;
}
function closePlanModal() {
    state.showModal = false;
}
function changePlan(plan: any) {
    // perform your API call to update the team plan here
    // then update the data and close the modal
    state.teamPlan = plan;
    state.closePlanModal();
}
</script>
