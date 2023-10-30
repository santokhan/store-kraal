<template>
    <form @submit="handleSubmit"
        class="w-full rounded-xl bg-[#2463eb0a] p-6 lg:p-10 my-10 lg:my-0 backdrop-blur-sm text-blue-950">
        <p class="text-blue-950">Create your account to connect with Kraal’s dedicated enterprise team.</p>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-5 gap-y-5 mt-5">
            <div class="space-y-2 col-span-2 lg:col-span-1">
                <label class="flex items-center font-bold"><span>First Name</span><span>*</span></label>
                <input type="text" v-model="businessForm.firstName"
                    class="block w-full h-12 rounded-xl border border-blue-300 p-4 focus:outline-none text-blue-950 bg-transparent">
                <Warning :message="warn.firstName" />
            </div>
            <div class="space-y-2 col-span-2 lg:col-span-1">
                <label class="flex items-center font-bold"><span>Last Name</span><span>*</span></label>
                <input type="text" v-model="businessForm.lastName"
                    class="block w-full h-12 rounded-xl border border-blue-300 p-4 focus:outline-none text-blue-950 bg-transparent">
                <Warning :message="warn.lastName" />
            </div>
            <div class="space-y-2 col-span-2 lg:col-span-1">
                <label class="flex items-center font-bold"><span>Work Email</span><span>*</span></label>
                <input type="email" v-model="businessForm.email"
                    class="block w-full h-12 rounded-xl border border-blue-300 p-4 focus:outline-none text-blue-950 bg-transparent">
                <Warning :message="warn.email" />
            </div>
            <div class="space-y-2 col-span-2 lg:col-span-1">
                <label class="flex items-center font-bold"><span>Job Title</span><span>*</span></label>
                <input type="text" v-model="businessForm.jobTitle"
                    class="block w-full h-12 rounded-xl border border-blue-300 p-4 focus:outline-none text-blue-950 bg-transparent">
                <Warning :message="warn.jobTitle" />
            </div>
            <div class="space-y-2 col-span-2 lg:col-span-1">
                <label class="flex items-center font-bold"><span>Company Name</span><span>*</span></label>
                <input type="text" v-model="businessForm.company"
                    class="block w-full h-12 rounded-xl border border-blue-300 p-4 focus:outline-none text-blue-950 bg-transparent">
                <Warning :message="warn.company" />
            </div>
            <div class="space-y-2 col-span-2 lg:col-span-1">
                <label class="flex items-center font-bold"><span>Organization Type</span><span>*</span></label>
                <OrgType :organizationType="organizationType" />
                <Warning :message="warn.organization" />
            </div>
            <div class="space-y-2 col-span-2 lg:col-span-1">
                <label class="flex items-center font-bold"><span>Accounting System</span><span>*</span></label>
                <Accounting :accounting="accounting" />
                <Warning :message="warn.accounting" />
            </div>
            <div class="space-y-2 col-span-2 lg:col-span-1">
                <label class="flex items-center font-bold"><span>Phone</span><span>*</span></label>
                <input type="text" v-model="businessForm.phone"
                    class="block w-full h-12 rounded-xl border border-blue-300 p-4 focus:outline-none text-blue-950 bg-transparent">
                <Warning :message="warn.phone" />
            </div>
            <div class="space-y-2 col-span-2 lg:col-span-1">
                <label class="flex items-center font-bold"><span>Password</span><span>*</span></label>
                <input type="password" v-model="businessForm.pass" name="password" autocomplete="true"
                    class="block w-full h-12 rounded-xl border border-blue-300 p-4 focus:outline-none bg-transparent">
                <Warning :message="warn.pass" />
            </div>
            <div class="space-y-2 col-span-2 lg:col-span-1">
                <label class="flex items-center font-bold"><span>Confirm Password</span><span>*</span></label>
                <input type="password" v-model="businessForm.confirmPass" name="confirm_password" autocomplete="false"
                    class="block w-full h-12 rounded-xl border border-blue-300 p-4 focus:outline-none bg-transparent">
                <Warning :message="warn.confirmPass" />
            </div>
            <div class="col-span-2 flex flex-col items-center gap-5 text-center text-gray-800 mt-2">
                <Warning :message="firebaseWarn" class="w-full" />
                <button type="submit" :disabled="disabled"
                    class="block h-12 px-8 font-semibold bg-kraal-blue-500 text-white rounded-xl hover:bg-kraal-blue-700 my-2 capitalize">
                    <SpinnerCircle v-if="submitMessage == 'loading'" class="fill-kraal-blue-500 mx-12" />
                    <span v-else>{{ submitMessage }}</span>
                </button>
                <div class="space-y-2">
                    <p class="text-sm">Already have an account? <RouterLink to="sign-in"
                            class="text-kraal-blue-500 hover:underline">Sign In
                        </RouterLink>
                    </p>
                    <p class="text-sm">By submitting this form, you consent to our <RouterLink to="terms"
                            class="text-kraal-blue-500 hover:underline">Terms and Conditions.
                        </RouterLink>
                    </p>
                </div>
            </div>
        </div>
    </form>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import OrgType from './OrgType.vue';
import Accounting from './Accounting.vue';
import { reactive, ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import Warning from '../steps/layout/warnings/Warning.vue';
import * as firebase from "../../../firebase/services";
import addBusinessUser from '../../../auth/addBusinessUser';
import SpinnerCircle from '../../shared/spinner/SpinnerCircle.vue';
import { SignupData } from '../../../models/signupdata';
import azureAPI from '../../../kraal-api/azureAPI';

const router = useRouter()
// const regexEmail = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,20}$/
const submitMessage = ref<string>('Create account')
const disabled = ref<boolean>(false)
const firebaseWarn = ref<string>()
const user_schema = {
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
}

const businessForm = reactive({ ...user_schema })
const warn = reactive({ ...user_schema })

// Select > options
function organizationType(org: string) {
    businessForm.organization = org;
}
function accounting(account: string) {
    businessForm.accounting = account;
}

watch(businessForm, async (newInpt, oldInput) => {
    warn.firstName = businessForm.firstName && "";
    warn.lastName = businessForm.lastName && "";
    warn.email = businessForm.email && "";
    warn.jobTitle = businessForm.jobTitle && "";
    warn.company = businessForm.company && "";
    warn.organization = businessForm.organization && "";
    warn.accounting = businessForm.accounting && "";
    warn.phone = businessForm.phone && "";

    // Turn off client side password validation and show firebase validation on error
    // if (businessForm.pass) {
    //     if (regexEmail.test(businessForm.pass)) {
    //         warn.pass = "";
    //     } else {
    //         warn.pass = "Password should include upper case, lower case, number, and minimun length of 8";
    //     }
    // }

    if (businessForm.confirmPass) {
        if (businessForm.pass === businessForm.confirmPass) {
            warn.confirmPass = "";
        } else {
            warn.confirmPass = "Password does not matching";
        }
    }
})

function handleSubmit(e: Event) {
    e.preventDefault();
    // loading means spinner
    submitMessage.value = 'loading';

    async function signUp() {
        const { firstName, lastName, company, email, confirmPass, jobTitle, organization, accounting, phone } = businessForm;
        try {
            const userCredential = await firebase.createUser(email, confirmPass);
            if (userCredential) {
                const response = await azureAPI.auth.signupWithBusiness(new SignupData(firstName, lastName, company));
                // const userData = await addBusinessUser({ firstName, lastName, email, jobTitle, company, organization, accounting, phone })
                if (response) {
                    submitMessage.value = 'Thank you for signing up';
                    disabled.value = true;

                    router.push('/user/verify');
                }
            }
        } catch (error: any) {
            firebaseWarn.value = error.message;
        }
    }

    switch ("") {
        case businessForm.firstName:
            warn.firstName = "Enter your first name";
            break;

        case businessForm.lastName:
            warn.lastName = "Enter your first name";
            break;

        case businessForm.email:
            warn.email = "Enter your first name";
            break;

        case businessForm.jobTitle:
            warn.jobTitle = "Enter your first name";
            break;

        case businessForm.company:
            warn.company = "Enter your first name";
            break;

        case businessForm.organization:
            warn.organization = "Enter your first name";
            break;

        case businessForm.accounting:
            warn.accounting = "Enter your first name";
            break;

        case businessForm.phone:
            warn.phone = "Enter your first name";
            break;

        default:
            signUp()
            break;
    }
}
</script>

<style scoped>
input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 0px transparent inset;
}

input:-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0 0px transparent inset;
}
</style>