<template>
  <div class="h-[100dvh] bg-gray-100">
    <QContainer>
      <QHeader :prevForm="back"></QHeader>
      <QMain>
        <form @submit.prevent="nextForm" class="form-box">
          <div class="space-y-4">
            <div class="">
              Enter your <label for="tel">phone number</label> and
              <label for="tel">password</label>
            </div>
            <div class="flex items-center gap-2" v-if="email">
              <div class="">{{ email }}</div>
              <button type="button" @click="handleEdit">
                <Edit class="w-4 text-gray-500 hover:text-noom-text-800" />
              </button>
            </div>

            <input v-if="isEdit" type="email" placeholder="Smth@mail.co" @input="handleEditEmail" class="input-default"
              title="Your email addresss" autocomplete="true" :value="email" />
            <input type="tel" id="tel" inputmode="decimal" placeholder="312 345 6789" :required="true"
              @input="handleChange" :value="phone" class="input-default" title="Your email addresss" />
          </div>

          <div class="space-y-2">
            <label for="password" class="px-1 hidden">Password</label>
            <div class="gap-2 items-center relative">
              <input :type="eyeIsOpen ? 'text' : 'password'" placeholder="Password" required="true" maxlength="16"
                :value="password" id="password" @input="handlePassChange" class="input-default" />
              <button type="button" @click="handlePassEye" class="absolute right-4 top-1/2 -translate-y-1/2">
                <i v-if="eyeIsOpen" class="fa fa-eye-slash text-xl text-gray-500"></i>
                <i v-else class="fa fa-eye text-xl text-gray-500"></i>
              </button>
            </div>
          </div>
          <Warning :message="warnPass" />
          <QNextButton :nextForm="nextForm" :disabled="disabled" :text="'Create Account'" />
          <Warning :message="userExist" />
        </form>
      </QMain>
    </QContainer>
  </div>
</template>

<script lang="ts" setup>
import { Ref, ref, watchEffect } from "vue";
import QContainer from "../layout/QContainer.vue";
import QHeader from "../layout/QHeader.vue";
import QMain from "../layout/QMain.vue";
import QNextButton from "../layout/QNextButton.vue";
import { useFormDataStore } from "../../../../stores/FormData";
import Warning from "../layout/warnings/Warning.vue";
import Edit from "../../../icons/edit.vue";
import handleSignUp from "../../../../auth/signup";
import { useRouter } from "vue-router";

const router = useRouter()
const formData: any = useFormDataStore();
const userEmail = formData.user.email || "Smth.gmail.co";

const disabled: Ref<boolean> = ref(true);
const { id, back, next }: any = defineProps({
  id: Number,
  back: Function,
  next: Function,
});

const email: Ref<string> = ref(formData.user.email);
function handleEditEmail(e: any) {
  email.value = e.target.value;
}

const isEdit: Ref<boolean> = ref(false);
function handleEdit(e: any) {
  isEdit.value = !isEdit.value;
}

const phone: Ref<string> = ref(formData.user.phone);
function handleChange(e: any) {
  phone.value = e.target.value;
}

const password: Ref<string> = ref("");
const warnPass: Ref<string | undefined> = ref(
  "Password should be 8 to 16 characters & include capital letter"
);
const disabledPass: Ref<boolean> = ref(true);

function handlePassChange(e: any) {
  const value = e.target.value;
  password.value = value;
}

const eyeIsOpen = ref(false);
function handlePassEye() {
  eyeIsOpen.value = !eyeIsOpen.value;
}

// signup
const userExist: Ref<string> = ref("");

function nextForm() {
  // signup
  handleSignUp({
    email: formData.user.email,
    password: password.value,
    onSignUp: () => {
      formData.$patch({
        user: {
          email: email.value,
          phone: phone.value,
          password: password.value,
        },
      });
      // go to protected auth `'/account-linking'`
      router.push('/account-linking')
    },
    onUserExist: () => {
      userExist.value = "User email already exist";
    },
  });

  // formData.$patch({
  //   user: {
  //     email: email.value,
  //     phone: phone.value,
  //     password: password.value,
  //   },
  // });
  // next();
}

watchEffect(() => {
  function validateWarn(password: string) {
    function validatePass(pass: string): string | undefined {
      // const reg2 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}$/;
      const regUpper = /[A-Z]/;
      const regLower = /[a-z]/;
      const regNumber = /[0-9]/;
      const regRange = /.{8,16}/;

      if (pass.length > 0) {
        if (!regUpper.test(pass)) {
          return "Password should contain at least one uppercase";
        } else if (!regLower.test(pass)) {
          return "Password should contain at least one lowercase";
        } else if (!regNumber.test(pass)) {
          return "Password should contain at least one number";
        } else if (!regRange.test(pass)) {
          return "Password should be minimum of 8 characters";
        }
      } else {
        return "";
      }
    }

    return validatePass(password);
  }

  warnPass.value = validateWarn(password.value);

  // if warning is empty, then
  disabledPass.value = password.value && !warnPass.value ? false : true;

  if (phone.value.length > 6 && disabledPass.value === false) {
    disabled.value = false;
  } else {
    disabled.value = true;
  }
});
</script>
