import { reactive, ref } from "vue";
import addBusinessUser from "../../../auth/addBusinessUser";
import addRoleToFirestore from "../../../auth/setRole";
import handleSignUp from "../../../auth/signup";

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
    password: '',
});

const submit = ref<string>('Create account')
const disabled = ref<boolean>(false)

function organizationType(org: string) {
    businessForm.organization = org;
}
function accounting(account: string) {
    businessForm.accounting = account;
}



function handleSubmit(e: Event, callBack: () => void) {
    e.preventDefault();
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}$/

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
                // router.replace('/form/12');
                callBack();
            },
            onUserExist: () => {
                warn.email = 'User already exist';
            }
        });
    }

    function handleFirstName(input: string) {
        businessForm.firstName = input
    }
    function handleLastName() {
        if (businessForm.lastName === '') {
            warn.lastName = 'Enter your first name'
        } else {
            warn.lastName = ''
        }
    }
    function handleEmail() {
        if (businessForm.email === '') {
            warn.email = 'Enter your first name'
        } else {
            warn.email = ''
        }
    }
    function handleJobTitle() {
        if (businessForm.jobTitle === '') {
            warn.jobTitle = 'Enter your first name'
        } else {
            warn.jobTitle = ''
        }
    }
    function handleCompany() {
        if (businessForm.company === '') {
            warn.company = 'Enter your first name'
        } else {
            warn.company = ''
        }
    }
    function handleOrganization() {
        if (businessForm.organization === '') {
            warn.organization = 'Enter your first name'
        } else {
            warn.organization = ''
        }
    }
    function handleAccounting() {
        if (businessForm.accounting === '') {
            warn.accounting = 'Enter your first name'
        } else {
            warn.accounting = ''
        }
    }
    function handlePhone() {
        if (businessForm.phone === '') {
            warn.phone = 'Enter your first name'
        } else {
            warn.phone = ''
        }
    }
    function handlePass() {
        if (businessForm.pass === '') {
            warn.pass = 'Enter your first name'
        } else {
            warn.pass = ''
        }
    }
    function handleConfirmPass() {
        if (businessForm.confirmPass === '') {
            warn.confirmPass = 'Enter your first name'
        } else {
            warn.confirmPass = ''
        }
    }

    if (businessForm.organization === '') {
        warn.organization = "Select your oragnization type";
    } else {
        warn.organization = "";

        if (businessForm.accounting === '') {
            warn.accounting = "Select your accounting system"
        } else {
            warn.accounting = "";

            if (regex.test(businessForm.pass)) {
                if (businessForm.pass === businessForm.confirmPass) {
                    warn.password = "";

                    signUp()
                } else {
                    warn.password = "Password does not matching";
                }
            } else {
                warn.password = "Password should include upper case, lower case, number, and minimun length of 8";
            }
        }
    }


}