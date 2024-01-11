import { defineStore } from "pinia";
import azureAPI from "../kraal-api/azureAPI";
import { User } from "../models/user";
import { Department } from "../models/department";
import { Client } from "../models/client";

export const useUserStore = defineStore("userStore", {
    state: () => ({
        currentUser: null as User | null,
        users: new Map<string, User>(),
        departments: new Map<string, Department>(),
        clients: new Map<string, Client>(),
    }),
    actions: {
        async loadUser() {
            this.currentUser = await azureAPI.users.getUser().then(data => User.fromJSON(data));
        },
        async loadUsers() {
            const departmentsJsonData = await azureAPI.departments.getDepartments();
            for (const json of departmentsJsonData) {
                const department = Department.fromJSON(json);
                this.departments.set(department.uuid, department);
            }
            
            const clientsJsonData = await azureAPI.clients.getClients();
            for (const json of clientsJsonData) {
                const client = Client.fromJSON(json);
                this.clients.set(client.uuid, client);
            }

            const usersJsonData = await azureAPI.users.getUsers();
            for (const json of usersJsonData) {
                const user = User.fromJSON(json);
                for (const departmentJson of json.departments) {
                    const department = this.departments.get(departmentJson.uuid);
                    if (department) {
                        user.departments.set(department.uuid, department);
                        department.users.set(user.uuid, user);
                    }
                }
                for (const clientJson of json.clients) {
                    const client = this.clients.get(clientJson.uuid);
                    if (client) {
                        user.clients.set(client.uuid, client);
                        client.users.set(user.uuid, user);
                    }
                }
                this.users.set(user.uuid, user);
            }
        },
    },
});