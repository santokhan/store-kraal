import { defineStore } from "pinia";
import { reactive } from "vue";

export const useBusinessFormStore = defineStore("businessForm", () => {
    const state = reactive<any>({
        firstName: "",
        lastName: "",
        email: "",
        jobTitle: "",
        company: "",
        organization: "",
        accounting: "",
        phone: "",
        pass: "",
        confirmPass: "",
        message: "",
    })
    function updateBusinessForm(identifier: string, item: string) {
        state[identifier] = item;
    }
    return { state, updateBusinessForm }
});