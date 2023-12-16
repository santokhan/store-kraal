<template v-for="(email, index) in emails" :key="index">
    <div class="fixed inset-0 h-screen overflow-auto bg-gray-800+ bg-[#343541] text-gray-100">
        <!-- Title Bar -->
        <div class="flex justify-between items-center border-b border-gray-500 px-4 py-2">
            <BackButton />
            <button :disabled="!isResponseReceived" @click="submitFeatureRequest"
                class="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded disabled:bg-blue-400">
                Edit Clients & Departments
            </button>
        </div>
        <!-- Main content -->
        <main class="flex h-full">
            <!-- Left Section -->
            <div class="w-1/2 border-r border-gray-600">
                <div class="max-w-md mx-auto py-10">
                    <!-- Current User Section with Edit Profile Button -->
                    <div class="flex justify-between items-center mb-4">
                        <h4 class="text-lg font-semibold">Me</h4>

                    </div>
                    <div class="p-3 rounded border border-gray-600 mb-8">
                        <p class="font-medium">{{ currentUser.displayName }}</p>
                        <p class="text-sm">{{ currentUser.email }}</p>
                    </div>
                    <!-- All Users Section with New User Button -->
                    <div class="flex justify-between items-center mb-4">
                        <h4 class="text-lg font-semibold">All Users</h4>
                        <button @click="showNewUserForm = true"
                            class="py-2 px-4 border border-blue-500 text-blue-700 hover:bg-blue-500 hover:text-white rounded transition duration-300">
                            Invite Team
                        </button>
                    </div>
                    <ul class="divide-y divide-gray-600">
                        <li v-for="user in users" :key="user.id" class="py-3">
                            <div @click="selectUser(user)" class="flex justify-between items-center cursor-pointer">
                                <div>
                                    <p class="font-medium">{{ user.displayName }}</p>
                                    <p class="text-sm">{{ user.email }}</p>
                                </div>
                                <span class="bg-blue-500 text-white py-1 px-3 rounded-full text-xs">
                                    {{ user.role.toUpperCase() }}
                                </span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- Right Section -->
            <div class="w-1/2">
                <div v-if="showNewUserForm">
                    <div class="max-w-md mx-auto py-10">
                        <h4 class="text-lg font-semibold mb-4">Invite your Team</h4>
                        <form @submit.prevent="sendInvites"> <!-- Changed to sendInvites -->
                            <div class="mb-4">
                                <label for="emails" class="block text-sm font-medium text-gray-700">Emails</label>
                                <div
                                    class="flex flex-wrap items-center gap-2 mt-1 p-2 border border-gray-500 rounded-md w-full bg-gray-800">
                                    <!-- Email tags -->
                                    <span class="email-tag" v-for="(email, index) in emails" :key="index">
                                        {{ email }}
                                        <button @click="removeEmail(index)" type="button" class="ml-2">&times;</button>
                                    </span>
                                    <!-- Input field -->
                                    <input id="emailInput" name="email" v-model="newEmail"
                                        @keydown.enter.prevent="tryAddEmail" @keydown.space.prevent="tryAddEmail"
                                        @keydown.comma.prevent="tryAddEmail"
                                        placeholder="Separate emails with a space or a comma"
                                        class="flex-1 bg-transparent text-white placeholder-gray-500 placeholder:text-xs focus:outline-none" />
                                </div>
                            </div>
                            <button type="submit"
                                class="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300">Send
                                Invites</button>
                        </form>
                    </div>
                </div>
                <div v-else-if="selectedUser" class="max-w-md mx-auto py-10 space-y-4">
                    <div class="flex items-center justify-between">
                        <h4 class="text-lg font-semibold mb-4">
                            <!-- Conditional rendering based on isEditing flag -->
                            <span v-if="!isEditing">{{ selectedUser.displayName }}</span>
                        </h4>
                        <button v-if="!isEditing" @click="isEditing = true" class="p-1">
                            <!-- Edit Icon, size adjusted -->
                            <svg fill="#ffffff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 494.936 494.936"
                                width="24px" height="24px" class="align-middle">
                                <path
                                    d="M389.844,182.85c-6.743,0-12.21,5.467-12.21,12.21v222.968c0,23.562-19.174,42.735-42.736,42.735H67.157 c-23.562,0-42.736-19.174-42.736-42.735V150.285c0-23.562,19.174-42.735,42.736-42.735h267.741c6.743,0,12.21-5.467,12.21-12.21 s-5.467-12.21-12.21-12.21H67.157C30.126,83.13,0,113.255,0,150.285v267.743c0,37.029,30.126,67.155,67.157,67.155h267.741 c37.03,0,67.156-30.126,67.156-67.155V195.061C402.054,188.318,396.587,182.85,389.844,182.85z" />
                                <path
                                    d="M483.876,20.791c-14.72-14.72-38.669-14.714-53.377,0L221.352,229.944c-0.28,0.28-3.434,3.559-4.251,5.396l-28.963,65.069 c-2.057,4.619-1.056,10.027,2.521,13.6c2.337,2.336,5.461,3.576,8.639,3.576c1.675,0,3.362-0.346,4.96-1.057l65.07-28.963 c1.83-0.815,5.114-3.97,5.396-4.25L483.876,74.169c7.131-7.131,11.06-16.61,11.06-26.692 C494.936,37.396,491.007,27.915,483.876,20.791z M466.61,56.897L257.457,266.05c-0.035,0.036-0.055,0.078-0.089,0.107 l-33.989,15.131L238.51,247.3c0.03-0.036,0.071-0.055,0.107-0.09L447.765,38.058c5.038-5.039,13.819-5.033,18.846,0.005 c2.518,2.51,3.905,5.855,3.905,9.414C470.516,51.036,469.127,54.38,466.61,56.897z" />
                            </svg>
                        </button>
                    </div>
                    <!-- Conditional rendering for the rest of the user details -->
                    <div v-if="!isEditing">
                        <p>Title: {{ selectedUser.title }}</p>
                        <p>Department: {{ selectedUser.department }}</p>
                        <p>Email: {{ selectedUser.email }}</p>
                        <p>Location: {{ selectedUser.location }}</p>
                    </div>
                    <!-- Editable fields only shown when isEditing is true -->
                    <div v-if="isEditing" class="max-w-md mx-auto py-10 space-y-4">
                        <label for="displayName">Name</label>
                        <input type="text" id="displayName" name="displayName" v-model="selectedUser.displayName"
                            autocomplete="user-name"
                            class="bg-gray-800 text-white p-2 rounded border border-gray-600 w-full mb-4"
                            placeholder="Name">
                        <!-- Title Input -->
                        <label for="title" class="block text-sm font-medium text-gray-300">Title</label>
                        <input type="text" id="title" name="title" v-model="selectedUser.title" autocomplete="job-title"
                            class="bg-gray-800 text-white p-2 rounded border border-gray-600 w-full mb-4"
                            placeholder="Title">
                        <!-- Department Input -->
                        <label for="department" class="block text-sm font-medium text-gray-300">Department</label>
                        <input type="text" id="department" name="department" v-model="selectedUser.department"
                            autocomplete="organization-title"
                            class="bg-gray-800 text-white p-2 rounded border border-gray-600 w-full mb-4"
                            placeholder="Department">
                        <!-- Email Input -->
                        <label for="email" class="block text-sm font-medium text-gray-300">Email</label>
                        <input type="email" id="email" name="email" v-model="selectedUser.email" autocomplete="email"
                            class="bg-gray-800 text-white p-2 rounded border border-gray-600 w-full mb-4"
                            placeholder="Email">
                        <!-- Location Input -->
                        <label for="location" class="block text-sm font-medium text-gray-300">Location</label>
                        <input type="text" id="location" name="location" v-model="selectedUser.location"
                            autocomplete="shipping address-level2"
                            class="bg-gray-800 text-white p-2 rounded border border-gray-600 w-full mb-4"
                            placeholder="Location">
                        <div class="flex justify-between mt-6">
                            <button @click="saveUserChanges"
                                class="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-300">Save
                                Changes</button>
                            <button @click="isEditing = false"
                                class="bg-gray-500 text-white p-2 rounded hover:bg-gray-600 transition duration-300">Cancel</button>
                        </div>
                        <div class="pb-8"></div>
                        <button @click="confirmUserDeletion"
                            class="bg-red-600 text-white p-2 rounded hover:bg-red-700 transition duration-300 w-full mt-4">
                            Delete Account
                        </button>
                    </div>
                    <!-- Non-editable clients section -->
                    <div v-if="!isEditing" class="max-w-md mx-auto py-10 mt-6">
                        <h5 class="font-semibold mb-4 text-white">Clients:</h5>
                        <table class="min-w-full table-auto bg-gray-800 text-white rounded border border-gray-600">
                            <thead>
                                <tr class="bg-gray-700">
                                    <th class="px-4 py-2">Client Name</th>
                                    <th class="px-4 py-2">Role</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="client in selectedUser.clients" :key="client.name">
                                    <td class="border px-4 py-2 border-gray-600">{{ client.name }}</td>
                                    <td class="border px-4 py-2 border-gray-600">{{ client.role }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script lang="ts">
import { ref, onMounted } from 'vue';
import BackButton from './kraal-ai/BackButton.vue';

export default {
    setup() {
        const showNewUserForm = ref<boolean>(false);
        const isResponseReceived = ref<boolean>(false);
        const newEmail = ref<string>('');
        const emails = ref<string[]>([]);
        const loading = ref<boolean>(false);
        const message = ref<Record<string, string>>({ type: '', content: '' });
        const currentUser = ref({
            id: '2',
            displayName: 'Jane Smith',
            email: 'jane.smith@example.com',
            role: 'admin',
            title: 'Project Manager',
            department: 'Project Management',
            location: 'London',
            clients: [
                { name: 'Client E', role: 'User' },
                { name: 'Client F', role: 'User' },
                { name: 'Client G', role: 'Manager' },
                { name: 'Client H', role: 'Viewer' }
            ],
        });
        const users = ref<any[]>([]); // Start with an empty array
        // Selected user ref
        const selectedUser = ref<any>(null);
        const selectUser = (user: any) => {
            selectedUser.value = user; // Make sure this is correctly updating
            showNewUserForm.value = false;
        };
        // Simulate fetching users from API
        const fetchUsers = () => {
            // Simulate API call here
            //Axios request
            return [
                {
                    id: '1',
                    displayName: 'John Doe',
                    email: 'john.doe@example.com',
                    role: 'user',
                    title: 'Senior Developer',
                    department: 'Development',
                    location: 'New York',
                    clients: [
                        { name: 'Client A', role: 'Manager' },
                        { name: 'Client B', role: 'Manager' },
                        { name: 'Client C', role: 'User' },
                        { name: 'Client D', role: 'User' }
                    ],
                },
                {
                    id: '2',
                    displayName: 'Jane Smith',
                    email: 'jane.smith@example.com',
                    role: 'admin',
                    title: 'Project Manager',
                    department: 'Project Management',
                    location: 'London',
                    clients: [
                        { name: 'Client E', role: 'User' },
                        { name: 'Client F', role: 'User' },
                        { name: 'Client G', role: 'Manager' },
                        { name: 'Client H', role: 'Viewer' }
                    ],
                },
                {
                    id: '3',
                    displayName: 'Emily Johnson',
                    email: 'emily.johnson@example.com',
                    role: 'user',
                    title: 'Marketing Specialist',
                    department: 'Marketing',
                    location: 'San Francisco',
                    clients: [
                        { name: 'Client I', role: 'User' },
                        { name: 'Client J', role: 'User' }
                    ],
                },
                {
                    id: '4',
                    displayName: 'Michael Brown',
                    email: 'michael.brown@example.com',
                    role: 'admin',
                    title: 'IT Manager',
                    department: 'Information Technology',
                    location: 'Toronto',
                    clients: [
                        { name: 'Client K', role: 'Manager' },
                        { name: 'Client L', role: 'User' }
                    ],
                },
                {
                    id: '5',
                    displayName: 'Sarah Davis',
                    email: 'sarah.davis@example.com',
                    role: 'user',
                    title: 'Graphic Designer',
                    department: 'Design',
                    location: 'Berlin',
                    clients: [
                        { name: 'Client M', role: 'User' },
                        { name: 'Client N', role: 'User' }
                    ],
                },
                {
                    id: '6',
                    displayName: 'William Wilson',
                    email: 'william.wilson@example.com',
                    role: 'admin',
                    title: 'Sales Director',
                    department: 'Sales',
                    location: 'Sydney',
                    clients: [
                        { name: 'Client O', role: 'User' },
                        { name: 'Client P', role: 'Manager' }
                    ],
                },
                {
                    id: '7',
                    displayName: 'Olivia Martinez',
                    email: 'olivia.martinez@example.com',
                    role: 'user',
                    title: 'Customer Support Lead',
                    department: 'Support',
                    location: 'Dublin',
                    clients: [
                        { name: 'Client Q', role: 'User' },
                        { name: 'Client R', role: 'User' }
                    ],
                },
                {
                    id: '8',
                    displayName: 'James Taylor',
                    email: 'james.taylor@example.com',
                    role: 'admin',
                    title: 'Operations Manager',
                    department: 'Operations',
                    location: 'Singapore',
                    clients: [
                        { name: 'Client S', role: 'Manager' },
                        { name: 'Client T', role: 'User' }
                    ],
                }
            ];
        };
        // Fetch users when component is mounted
        onMounted(() => {
            users.value = fetchUsers();
        });
        // Email validation function
        function isEmailValid(email: string) {
            const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return pattern.test(email);
        }
        // Function to add email to list
        function addEmail() {
            let emailToAdd = newEmail.value.split(/[\s,]+/).map(e => e.trim().replace(/,$/, '')).filter(isEmailValid);
            emails.value.push(...emailToAdd);
            newEmail.value = ''; // Reset input
        }
        // Function to remove email from list
        function removeEmail(index: number) {
            emails.value.splice(index, 1);
        }
        // Function to handle keydown event in email input
        function tryAddEmail(event: KeyboardEvent) {
            if ([' ', ',', 'Enter'].includes(event.key)) {
                event.preventDefault();
                addEmail();
            }
        }
        // Function to send invites
        async function sendInvites() {
            if (emails.value.length === 0) {
                message.value = { type: 'error', content: 'No emails to invite' };
                return;
            }
            if (!emails.value.every(isEmailValid)) {
                message.value = { type: 'error', content: 'Some emails are invalid' };
                return;
            }
            loading.value = true;
            try {
                // Simulate API call to send invites
                // Replace this with your actual API call
                await new Promise(resolve => setTimeout(resolve, 1000));
                message.value = { type: 'success', content: 'Invites sent successfully!' };
                emails.value = [];
            }
            catch (error: any) {
                message.value = { type: 'error', content: `Failed to send invites: ${error.message}` };
            }
            finally {
                loading.value = false;
            }
        }
        const isEditing = ref(false); // Add this for tracking edit mode
        const editUser = (user: any) => {
            // Logic to edit the user
            isEditing.value = true;
            // Copy user data to a separate object if you want to allow canceling
        };
        const saveUserChanges = () => {
            // Logic to save user changes
            // Call an API to update the user details
            // Reset the editing flag
            isEditing.value = false;
        };
        const deleteUser = (userId: string) => {
            // Logic to delete the user
            // Call an API to delete the user
            // Remove the user from the users array
        };
        const confirmUserDeletion = (user: any) => {
            // Logic to confirm deletion, possibly with a modal or confirm dialog
            if (confirm(`Are you sure you want to delete ${user.displayName}?`)) {
                deleteUser(user.id);
            }
        };
        function submitFeatureRequest() {
        }
        // Return all reactive properties and methods
        return {
            users, newEmail, emails, removeEmail, sendInvites,
            showNewUserForm, selectedUser, selectUser, isResponseReceived,
            tryAddEmail, message, currentUser, loading,
            isEditing,
            editUser,
            saveUserChanges,
            confirmUserDeletion,
            submitFeatureRequest
        };
    },
    components: { BackButton }
}                                                                                                                                           
</script>
<style scoped>
svg.align-middle {
    vertical-align: middle;
}

.email-tag {
    display: inline-block;
    background: #4a90e2;
    color: white;
    padding: 5px 10px;
    border-radius: 15px;
    margin-right: 5px;
    margin-bottom: 5px;
}

.email-tag button {
    color: white;
    background: none;
    border: none;
    cursor: pointer;
    margin-left: 5px;
}

.flex-1 {
    flex: 1;
    border: none;
    /* Removes border */
    outline: none;
    /* Removes focus outline */
    padding: 5px 10px;
    /* Align padding with tags */
}

/* Ensure the input doesn't break to a new line */
.email-tag+input {
    flex-grow: 1;
    min-width: 0;
    /* Allows the input to shrink as needed */
}

/* Additional styles for the email tag close button for better visibility */
.email-tag button {
    /* ... existing styles ... */
    background-color: rgba(255, 255, 255, 0.3);
    /* Slightly visible background */
    border-radius: 50%;
    /* Circular button */
    padding: 0 5px;
    /* Padding inside the button */
}

/* Add styles for success and error messages */
.text-green-500 {
    color: #48bb78;
    /* Tailwind CSS color for success */
}

.text-red-500 {
    color: #f56565;
    /* Tailwind CSS color for error */
}

.invite-container {
    /* Your styles for the container */
}

.email-input-container {
    display: flex;
    flex-wrap: wrap;
    border: 1px solid #ccc;
    /* Example border */
    padding: 8px;
    border-radius: 5px;
}

.email-tag {
    background-color: #e4e6eb;
    border-radius: 15px;
    padding: 5px 10px;
    margin-right: 8px;
    margin-bottom: 8px;
    display: flex;
    align-items: center;
    font-size: 14px;
}

.delete-button {
    background-color: transparent;
    border: none;
    margin-left: 8px;
    cursor: pointer;
}

.email-input {
    background-color: #2D3748;
    /* This is a dark slate color; adjust the hex value to 
match your page background */
    color: #E2E8F0;
    /* Lighter text for visibility against the dark background */
    /* ... other styles ... */
}

/* .email-input::placeholder {
  color: #CBD5E0; /* This is a lighter shade for the placeholder text }*/
.email-input::placeholder {
    color: #A0AEC0;
    /* Lighter placeholder text */
}

.email-input:focus {
    outline: none;
    /* Removes the default focus outline */
    /* Optional: add a subtle box-shadow or border to maintain accessibility */
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.5);
}

.email-tag {
    background-color: #2D3748;
    /* Dark background for the tag */
    color: #E2E8F0;
    /* Light text color for visibility */
    /* ... other styles ... */
}

.additional-info {
    margin-top: 10px;
    font-size: 14px;
}

.send-invites-button {
    /* Your styles for the send button */
    margin-top: 10px;
}

.input {
    /* ... existing styles ... */
    @apply p-2 border border-gray-300 rounded shadow-sm;
}

.btn-save {
    @apply bg-blue-500 text-white p-2 rounded hover:bg-blue-600;
}

.btn-cancel {
    @apply bg-gray-300 text-gray-700 p-2 rounded hover:bg-gray-400;
}

.btn-delete {
    @apply bg-red-500 text-white p-2 rounded hover:bg-red-600;
}
</style>