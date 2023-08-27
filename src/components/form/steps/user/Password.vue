<script lang="ts" setup>
import { reactive, ref, watchEffect } from "vue";
import { useRouter } from "vue-router";
//
import active from "../../methods/active";
import GridContainer from "../layout/GridContainer.vue";
import QContainer from "../layout/QContainer.vue";
import QFooter from "../layout/QFooter.vue";
// import QHeader from "../layout/QHeader.vue";
import QMain from "../layout/QMain.vue";
import QNextButton from "../layout/QNextButton.vue";
import QProgressBar from "../layout/QProgressBar.vue";
import QRowButton from "../layout/QRowButton.vue";
import QSubTitle from "../layout/QSubTitle.vue";
import QTitle from "../layout/QTitle.vue";
//
import { useFormDataStore } from "../../../../stores/FormData";
//
import MailChecker from "../../methods/MailChecker";
import QHead from "../layout/QHead.vue";
import Warning from "../layout/warnings/Warning.vue";
import QHeader from "../layout/QHeader.vue";

const { id, back, next }: any = defineProps({
  id: Number,
  back: Function,
  next: Function,
});
const formData: any = useFormDataStore();

const password: any = ref("");
const warnPass: any = ref("Password should be 8 to 16 characters & include capital letter");
const disabledPass: any = ref(true);

function handlePassChange(e: any) {
  const value = e.target.value;
  password.value = value;
}

const eyeIsOpen = ref(false);
function handlePassEye() {
  eyeIsOpen.value = !eyeIsOpen.value;
}

function nextForm() {
  formData.$patch({ user: { password: password.value } });
  next();
}

watchEffect(() => {
  function validateWarn(password: string) {
    function validatePass(pass: string) {
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
});
</script>

<template>
  <QContainer>
    <QHeader :prevForm="back" />
    <QMain>
      <form @submit.prevent="nextForm" class="form-box">
        <label for="password">Password</label>
        <div class="gap-2 items-center relative">
          <input
            :type="eyeIsOpen ? 'text' : 'password'"
            placeholder="Password"
            required="true"
            pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,16}$"
            maxlength="16"
            :value="password"
            id="password"
            @input="handlePassChange"
            class="input-default"
          />
          <button
            type="button"
            @click="handlePassEye"
            class="absolute right-4 top-1/2 -translate-y-1/2"
          >
            <i
              class="fa fa-eye-slash text-xl text-gray-500"
              aria-hidden="true"
              v-if="eyeIsOpen"
            ></i>
            <i
              class="fa fa-eye text-xl text-gray-500"
              aria-hidden="true"
              v-else
            ></i>
          </button>
        </div>
        <Warning :message="warnPass" />

        <QNextButton :nextForm="nextForm" :disabled="disabledPass" />
      </form>
    </QMain>
  </QContainer>
</template>
