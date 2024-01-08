<template>
    <div class="fixed inset-0 h-screen overflow-auto bg-gray-800+ bg-[#343541] text-gray-100">
        <!-- Title Bar -->
        <div class="flex justify-between items-center border-b border-gray-500 px-4 py-2">
            <BackButton />
            <button class="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded disabled:bg-blue-400">
                User Admin
            </button>
        </div>
        <!-- Main Content -->
        <main class="flex h-full">
            <!-- Left Section: Tabs + Clients/Departments List -->
            <div class="w-1/2">
                <!-- Tabs at the top of the left section -->
                <div class="pl-4 flex pt-2">
                    <button @click="clearSelections('clients')"
                        :class="{ 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-md': activeTab === 'clients', 'bg-gray-800+ text-gray-400 hover:text-white hover:bg-gray-700': activeTab !== 'clients' }"
                        class="tab-button mr-2 px-6 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50">
                        Clients
                    </button>
                    <button @click="clearSelections('departments')"
                        :class="{ 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-md': activeTab === 'departments', 'bg-gray-800+ text-gray-400 hover:text-white hover:bg-gray-700': activeTab !== 'departments' }"
                        class="tab-button px-6 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50">
                        Departments
                    </button>
                </div>
                <!-- Dynamic Content Based on Selected Tab -->
                <div class="max-w-md mx-auto py-10">
                    <ul v-if="activeTab === 'clients'" class="divide-y divide-gray-600">
                        <!-- Clients list -->
                        <li v-for="client of clients" :key="client.uuid" @click="selectClient(client)"
                            class="py-3 cursor-pointer">
                            <p class="font-medium">{{ client.name }}</p>
                        </li>
                    </ul>
                    <ul v-if="activeTab === 'departments'" class="divide-y divide-gray-600">
                        <!-- Departments list -->
                        <li v-for="department of departments" :key="department.uuid" @click="selectDepartment(department)"
                            class="py-3 cursor-pointer">
                            <p class="font-medium">{{ department.name }}</p>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- Right Section: Client or Department Details -->
            <div class="w-1/2 border-l border-gray-600">
                <div v-if="selectedClient || selectedDepartment" class="max-w-md mx-auto py-10">
                    <!-- Display content based on selected client or department -->
                    <h4 class="text-lg font-semibold mb-4">
                        {{ selectedClient ? selectedClient.name : selectedDepartment!.name }}
                    </h4>
                    <table v-if="selectedClient" class="min-w-full table-auto">
                        <thead>
                            <tr>
                                <th class="px-4 py-2 border-b border-gray-500">User Name</th>
                                <th class="px-4 py-2 border-b border-gray-500">Role</th>
                                <th class="px-4 py-2 border-b border-gray-500">Actions</th> <!-- Add this line -->
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="user of selectedClient.users.values()" :key="user.uuid" class="border-b border-gray-500">
                                <td class="px-4 py-2 text-center">{{ user.fullName }}</td>
                                <td class="px-4 py-2 text-center">{{ user.businessRole }}</td>
                                <td class=" px-4 py-2 text-center flex items-center justify-center">
                                    <button @click="confirmDeletion(user.uuid)"
                                        class="focus:outline-none hover:bg-gray-200 rounded">
                                        <!-- SVG icon for delete button -->
                                        <svg class="delete-icon w-5 h-5 text-white-400 hover:text-gray-600"
                                            viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_1_2)">
                                                <path
                                                    d="M1 5H17M7 8V16M11 8V16M7 1H11C11.2652 1 11.5196 1.1053611.7071 1.29289C11.8946 1.48043 12 1.73478 12 2V5H6V2C6 1.73478 6.10536 1.48043 6.29289 1.29289C6.48043 1.10536 6.73478 1 7 1ZM3 5H15V18C15 18.2652 14.8946 18.5196 14.7071 18.7071C14.5196 18.8946 14.2652 19 14 19H4C3.73478 19 3.48043 18.8946 3.29289 18.7071C3.10536 18.5196 3 18.2652 3 18V5Z"
                                                    stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_1_2">
                                                    <rect width="18" height="20" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <!-- Table for Selected Department -->
                    <table v-if="selectedDepartment" class="min-w-full table-auto">
                        <thead>
                            <tr>
                                <th class="px-4 py-2 border-b border-gray-500">User Name</th>
                                <th class="px-4 py-2 border-b border-gray-500">Role</th>
                                <th class="px-4 py-2 border-b border-gray-500">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="user in departmentUsers" :key="user.uuid" class="border-b border-gray-500">
                                <td class="px-4 py-2 text-center">{{ user.fullName }}</td>
                                <td class="px-4 py-2 text-center">{{ user.businessRole }}</td>
                                <td class=" px-4 py-2 text-center flex items-center justify-center">
                                    <button @click="confirmDeletion(user.uuid)"
                                        class="focus:outline-none hover:bg-gray-200 rounded">
                                        <!-- SVG icon for delete button -->
                                        <svg class="delete-icon w-5 h-5 text-white-400 hover:text-gray-600"
                                            viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_1_2)">
                                                <path
                                                    d="M1 5H17M7 8V16M11 8V16M7 1H11C11.2652 1 11.5196 1.10536 11.7071 1.29289C11.8946 1.48043 12 1.73478 12 2V5H6V2C6 1.73478 6.10536 1.48043 6.29289 1.29289C6.48043 1.10536 6.73478 1 7 1ZM3 5H15V18C15 18.2652 14.8946 18.5196 14.7071 18.7071C14.5196 18.8946 14.2652 19 14 19H4C3.73478 19 3.48043 18.8946 3.29289 18.7071C3.10536 18.5196 3 18.2652 3 18V5Z"
                                                    stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_1_2">
                                                    <rect width="18" height="20" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <p v-else-if="selectedDepartment" class="text-center py-10">
                        No users found for this department.
                    </p>
                </div>
                <p v-else class="text-center py-10">Select a client or department to view details</p>
            </div>
        </main>
    </div>
</template>

<script lang="ts">
import axios from 'axios';
import { ref, onMounted, computed } from 'vue';
import BackButton from '../components/button/BackButton.vue';
import { useUserStore } from '../stores/userStore';
import { User } from '../models/user';
import { Department } from '../models/department';
import { Client } from '../models/client';

export default {
    setup() {
        const userStore = useUserStore();
        const users = ref<User[]>([]); // This will hold the original users data
        const selectedClient = ref<Client | null>(null); // Holds the currently selected client
        const activeTab = ref<string>('clients');
        const selectedDepartment = ref<Department | null>(null);
        const clients = ref<Client[]>([]); // Populate with your clients data
        const departments = ref<Department[]>([]); // Extract unique departments from users
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
                        { name: 'Client D', role: 'User' },
                        { name: 'Client B', role: 'User' },
                        { name: 'Client C', role: 'User' },
                        { name: 'Client F', role: 'User' }
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
                        { name: 'Client A', role: 'User' },
                        { name: 'Client C', role: 'User' }
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
                        { name: 'Client B', role: 'Manager' },
                        { name: 'Client D', role: 'User' }
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
                        { name: 'Client C', role: 'User' },
                        { name: 'Client A', role: 'User' }
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
                        { name: 'Client B', role: 'User' },
                        { name: 'Client C', role: 'Manager' }
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
                        { name: 'Client B', role: 'User' },
                        { name: 'Client D', role: 'User' }
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
                        { name: 'Client A', role: 'Manager' },
                        { name: 'Client D', role: 'User' }
                    ],
                }
            ];
        };
        // Transform users data to client-centric data
        const fetchClients = async () => {
            if (!userStore.currentUser) {
                await userStore.loadUser();
            }
            if (userStore.users.size == 0) {
                await userStore.loadUsers();
            }
            users.value = Array.from(userStore.users.values());
            departments.value = Array.from(userStore.departments.values());
            clients.value = Array.from(userStore.clients.values());
        };
        const changeUserRole = (clientId: string, userId: string, newRole: string) => {
            const client = clients.value.find(c => c.name === clientId);
            const user = client?.users.get(userId);
            // if (user) {
            //     user.businessRole = newRole;
            //     // Call API to update user role
            // }
        };
        const confirmDeletion = async (userId: string) => {
            if (window.confirm("Are you sure you want to delete this user?")) {
                try {
                    // Assuming the user is removed successfully from the backend
                    // Now remove the user from the selected client's user list
                    if (selectedClient.value) selectedClient.value.users.delete(userId);
                }
                catch (error) {
                    console.error("Failed to delete user:", error);
                    // Handle error (e.g., show an error message)
                }
            }
        };
        // Function to select a client
        const selectClient = (client: Client) => {
            selectedClient.value = client;
            selectedDepartment.value = null; // Clear department selection when a client is selected
            activeTab.value = 'clients'; // Set the active tab to 'clients'
        };
        // Function to edit user role under a client
        const editUserRole = async (userId: string, newRole: string) => {
            const user = selectedClient.value?.users.get(userId);
            if (user && window.confirm(`Change role of ${user.fullName} to ${newRole}?`)) {
                try {
                    // // Assuming the API requires the client ID and the new role in the request
                    // const response = await axios.put(`https://api.yourdomain.com/users/${userId}/role`, {
                    //     newRole: newRole,
                    //     clientId: selectedClient.value.id // Or however you identify the client
                    // });
                    // Check if the API response is successful
                    // Update the role in the frontend state
                    // user.businessRole = newRole;
                    // else {
                    //     // Handle unsuccessful response
                    //     console.error("Failed to update role:", response);
                    //     // Optionally show an error message to the user
                    // }
                }
                catch (error) {
                    console.error("Failed to update user role:", error);
                    // Handle network or other errors (e.g., show an error message)
                }
            }
        };
        // Function to select a department
        const selectDepartment = (department: any) => {
            selectedDepartment.value = department;
            selectedClient.value = null; // Clear client selection when a department is selected
            activeTab.value = 'departments'; // Set the active tab to 'departments'
        };
        // Reactive property for department users
        const departmentUsers = computed(() => {
            if (selectedDepartment.value) {
                return users.value.filter(user => user.department ===
                    selectedDepartment.value);
            }
            return [];
        });
        const clearSelections = (tab: any) => {
            activeTab.value = tab; // Set the active tab
            selectedClient.value = null; // Clear selected client
            selectedDepartment.value = null; // Clear selected department
        };
        // Simulate fetching users from API
        onMounted(() => {
            fetchClients();
            const fetchedUsers = fetchUsers();
        });
        return {
            activeTab,
            selectedClient,
            selectedDepartment,
            clients,
            departments,
            selectClient,
            selectDepartment,
            departmentUsers,
            confirmDeletion,
            clearSelections,
            editUserRole,
            changeUserRole
        };
    },
    components: { BackButton }
};
</script>
<style scoped>
/* Your CSS styles */
</style>