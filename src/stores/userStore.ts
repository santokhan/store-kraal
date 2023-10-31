import { defineStore } from "pinia";
import { User } from "../models/user";
import azureAPI from "../kraal-api/azureAPI";

export const useUserStore = defineStore("userStore", {
    state: () => ({
        currentUser: null as User | null,
    }),
    actions: {
        async loadUser() {
            this.currentUser = await azureAPI.user.getUser().then(data => User.fromJSON(data));
        }
    },
});