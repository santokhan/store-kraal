<template>
  <div class="h-[100dvh] bg-gray-100">
    <QContainer>
      <QHeader :prevForm="back" />
      <QMain>
        <div>
          <form @submit.prevent="nextForm" class="form-box">
            <div>
              <QTitle class="mb-1">What’s your name?</QTitle>
            </div>
            <div class="">
              <input
                type="text"
                name="firstname"
                id="firstName"
                placeholder="Legal First Name"
                required="true"
                maxlength="32"
                @input="handleChange"
                :value="user.firstname"
                class="input-default"
                title="Legal First Name"
                autocomplete="true"
              />
              <Warning :message="warn.f" />
            </div>
            <div class="">
              <input
                type="text"
                name="lastname"
                id="lastName"
                placeholder="Legal Last Name"
                required="true"
                maxlength="32"
                @input="handleChange"
                :value="user.lastname"
                class="input-default"
                title="Legal Last Name"
                autocomplete="true"
              />
              <Warning :message="warn.l" />
            </div>
            <div class="flex items-center gap-2 px-1">
              <input
                type="checkbox"
                @change="handlenickname"
                id="nickname"
                class="h-4 w-4"
              />
              <label for="nickname" class="text-gray-600">
                I go by a different first name
              </label>
            </div>
            <div class="" v-if="checked">
              <input
                type="text"
                name="nickname"
                id="nickname"
                required="true"
                maxlength="32"
                placeholder="Nickname"
                @input="handleChange"
                :value="user.surname"
                class="input-default"
                title="Legal First Name"
                autocomplete="true"
              />
              <Warning :message="warn.d" />
            </div>
            <QNextButton type="submit" :disabled="disabled" />
          </form>
        </div>
      </QMain>
    </QContainer>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref, watchEffect } from "vue";
import QContainer from "../layout/QContainer.vue";
import QHeader from "../layout/QHeader.vue";
import QMain from "../layout/QMain.vue";
import QNextButton from "../layout/QNextButton.vue";
import QTitle from "../layout/QTitle.vue";
import { useFormDataStore } from "../../../../stores/FormData";
import Warning from "../layout/warnings/Warning.vue";

const formData: any = useFormDataStore();

const { id, back, next }: any = defineProps({
  id: Number,
  back: Function,
  next: Function,
});

const user: any = reactive({
  firstname: formData.user.name.firstname,
  lastname: formData.user.name.lastname,
  nickname: formData.user.name.nickname,
});
const warn: any = reactive({ f: "", l: "", d: "" });
const disabled: any = ref(true);
const checked: any = ref(false);

function handleChange(e: any) {
  const { name, value } = e.target;
  user[name] = value;
}

function nextForm() {
  const { firstname, lastname, nickname } = user;
  formData.$patch({ user: { name: { firstname, lastname, nickname } } });
  next();
}

function handlenickname() {
  checked.value = !checked.value;
  user.nickname = "";
}

watchEffect(() => {
  function validateDisabled() {
    const { firstname, lastname } = user;

    if (firstname && lastname) {
      if (!warn.f && !warn.l && !warn.d) {
        disabled.value = false;
      } else {
        disabled.value = true;
      }
    } else {
      return false;
    }
  }
  validateDisabled();

  function validateWarn(name: string) {
    function validateName(name: string) {
      if (name.length > 0) {
        if (/[A-Z]/.test(name)) {
          return true;
        } else if (/[a-z]/.test(name)) {
          return true;
        } else if (/\s/.test(name)) {
          return true;
        } else {
          return false;
        }
      } else {
        return "";
      }
    }

    return validateName(name) === false ? "Name should be include letters only" : "";
  }
  warn.f = validateWarn(user.firstname);
  warn.l = validateWarn(user.lastname);
  warn.d = validateWarn(user.nickname);
});
</script>
