<template>
    <form @submit="handleSubmit"
        class="w-full rounded-xl bg-[#2463eb0a] px-6 lg:px-10 py-2 lg:py-6 my-10 lg:my-0 backdrop-blur-sm text-blue-950">
        <p class="my-4 text-blue-950">Create your account and connect with Kraal’s dedicated enterprise team.</p>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div class="space-y-3 col-span-2 lg:col-span-1">
                <label class="flex items-center font-bold">
                    <div>First Name</div>
                    <div>*</div>
                </label>
                <input type="text" v-model="businessForm.firstName"
                    class="block w-full h-12 rounded-md border border-blue-300 p-4 focus:outline-none text-blue-950 bg-transparent">
                <Warning :message="warn.firstName" />
            </div>
            <div class="space-y-3 col-span-2 lg:col-span-1">
                <label class="flex items-center font-bold">
                    <div>Last Name</div>
                    <div>*</div>
                </label>
                <input type="text" v-model="businessForm.lastName"
                    class="block w-full h-12 rounded-md border border-blue-300 p-4 focus:outline-none text-blue-950 bg-transparent">
                <Warning :message="warn.lastName" />
            </div>
            <div class="space-y-3 col-span-2 lg:col-span-1">
                <label class="flex items-center font-bold">
                    <div>Work Email</div>
                    <div>*</div>
                </label>
                <input type="email" v-model="businessForm.email"
                    class="block w-full h-12 rounded-md border border-blue-300 p-4 focus:outline-none text-blue-950 bg-transparent">
                <Warning :message="warn.email" />
            </div>
            <div class="space-y-3 col-span-2 lg:col-span-1">
                <label class="flex items-center font-bold">
                    <div>Job Title</div>
                    <div>*</div>
                </label>
                <input type="text" v-model="businessForm.jobTitle"
                    class="block w-full h-12 rounded-md border border-blue-300 p-4 focus:outline-none text-blue-950 bg-transparent">
                <Warning :message="warn.jobTitle" />
            </div>
            <div class="space-y-3 col-span-2 lg:col-span-1">
                <label class="flex items-center font-bold">
                    <div>Company Name</div>
                    <div>*</div>
                </label>
                <input type="text" v-model="businessForm.company"
                    class="block w-full h-12 rounded-md border border-blue-300 p-4 focus:outline-none text-blue-950 bg-transparent">
                <Warning :message="warn.company" />
            </div>
            <div class="space-y-3 col-span-2 lg:col-span-1">
                <label class="flex items-center font-bold">
                    <div>Organization Type</div>
                    <div>*</div>
                </label>
                <OrgType :organizationType="organizationType" />
                <Warning :message="warn.organization" />
            </div>
            <div class="space-y-3 col-span-2 lg:col-span-1">
                <label class="flex items-center font-bold">
                    <div>Accounting System</div>
                    <div>*</div>
                </label>
                <Accounting :accounting="accounting" />
                <Warning :message="warn.accounting" />
            </div>
            <div class="space-y-3 col-span-2 lg:col-span-1">
                <label class="flex items-center font-bold">
                    <div>Phone</div>
                    <div>*</div>
                </label>
                <input type="text" v-model="businessForm.phone"
                    class="block w-full h-12 rounded-md border border-blue-300 p-4 focus:outline-none text-blue-950 bg-transparent">
                <Warning :message="warn.phone" />
            </div>
            <div class="space-y-3 col-span-2 lg:col-span-1">
                <label class="flex items-center font-bold">
                    <div>Password</div>
                    <div>*</div>
                </label>
                <input type="text" v-model="businessForm.pass"
                    class="block w-full h-12 rounded-md border border-blue-300 p-4 focus:outline-none bg-transparent">
                <Warning :message="warn.pass" />
            </div>
            <div class="space-y-3 col-span-2 lg:col-span-1">
                <label class="flex items-center font-bold">
                    <div>Confirm Password</div>
                    <div>*</div>
                </label>
                <input type="password" v-model="businessForm.confirmPass"
                    class="block w-full h-12 rounded-md border border-blue-300 p-4 focus:outline-none bg-transparent">
                <Warning :message="warn.confirmPass" />
            </div>
            <div class="col-span-2 space-y-4">
                <label class="flex items-center font-bold">Tell us how we can help.</label>
                <textarea type="text" v-model="businessForm.message" maxlength="300"
                    class="block w-full h-28 rounded-md border border-blue-300 p-4 focus:outline-none bg-transparent"></textarea>
            </div>
            <div class="col-span-2 flex flex-col items-center gap-5 text-center text-gray-800 pb-4">
                <button type="submit"
                    class="block h-10 px-20 font-semibold bg-kraal-blue-500 text-white rounded-md hover:bg-kraal-blue-700 my-2 uppercase"
                    :disabled="disabled">{{ submit
                    }}</button>
                <div class="space-y-2">
                    <p class="text-sm">Already have an account? <RouterLink to="/signin"
                            class="underline decoration-2 underline-offset-4 text-kraal-blue-500">Sign In
                        </RouterLink>
                    </p>
                    <p class="text-sm">By submitting this form, you consent to our <RouterLink to="/terms"
                            class="underline decoration-2 underline-offset-4 text-kraal-blue-500">Terms and Conditions.
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
import handleSignUp from '../../../auth/signup';
import { useRouter } from 'vue-router';
import Warning from '../steps/layout/warnings/Warning.vue';
import addRoleToFirestore from '../../../auth/setRole';
import addBusinessUser from '../../../auth/addBusinessUser'
import { useBusinessFormStore } from '../../../stores/BusinessForm';

const bussinessFormStore = useBusinessFormStore()
const router = useRouter()
const regexEmail = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,20}$/
const submit = ref<string>('Create account')
const disabled = ref<boolean>(false)


const businessForm = reactive({
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
});
const warn = reactive({
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
});


function organizationType(org: string) {
    businessForm.organization = org;
}
function accounting(account: string) {
    businessForm.accounting = account;
}
function addDataToPinia() {
    const object = JSON.parse(JSON.stringify(businessForm));
    Object.keys(object).forEach((ele: string) => {
        bussinessFormStore.updateBusinessForm(ele, object[ele]);
    })
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

    if (businessForm.pass) {
        if (regexEmail.test(businessForm.pass)) {
            warn.pass = "";
        } else {
            warn.pass = "Password should include upper case, lower case, number, and minimun length of 8";
        }
    }
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

    addDataToPinia();

    function signUp() {
        // register a new user
        handleSignUp({
            email: businessForm.email,
            password: businessForm.confirmPass,
            onSignUp: () => {
                submit.value = 'Thank you for signing up';
                disabled.value = true;

                // add role for user
                addRoleToFirestore({ email: businessForm.email, role: 'business' })

                // add business user data to firestore
                const { firstName, lastName, email, jobTitle, company, organization, accounting, phone, message, } = businessForm;
                addBusinessUser({ firstName, lastName, email, jobTitle, company, organization, accounting, phone, message })

                // redirect to slide welcome page
                router.push('/account-linking');
            },
            onUserExist: () => {
                // set another warning under mail input
                warn.email = 'User already exist';
            }
        });
    }


    if (businessForm.firstName === '') {
        warn.firstName = "Enter your first name";
    } else if (businessForm.lastName === '') {
        warn.lastName = "Enter your last name";
    } else if (businessForm.email === '') {
        warn.email = "Enter your email";
    } else if (businessForm.jobTitle === '') {
        warn.jobTitle = "Enter job title";
    } else if (businessForm.company === '') {
        warn.company = "Enter your company name";
    } else if (businessForm.organization === '') {
        warn.organization = "Select your organization name";
    } else if (businessForm.accounting === '') {
        warn.accounting = "Select your accounting type";
    } else if (businessForm.phone === '') {
        warn.phone = "Enter your phone number";
    } else if (businessForm.pass === '') {
        warn.pass = "Password should include upper case, lower case, number, and minimun length of 8 and maximum 20";
    } else if (businessForm.confirmPass === '') {
        warn.confirmPass = "Password does not matching";
    } else {
        signUp()
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