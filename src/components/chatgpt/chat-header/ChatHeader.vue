<template>
  <div class="border-b border-gray-500">
    <div
      :class="`bg-chatgpt-500 text-gray-100 px-4 py-2
    w-full min-h-12 h-12 lg:h-14 z-50 max-w-4xl mx-auto`"
      title="header"
    >
      <div class="flex justify-between items-center max-w-4xl mx-auto w-full h-full">
        <div class="relative">
          <button @click="handleInstanceBar">
            <OutlineButton>
              <i class="fas fa-bars px-2" v-if="!isOpen"></i>
              <Plus class="w-5 rotate-45" v-else />
            </OutlineButton>
          </button>
          <div
            v-if="isOpen"
            class="absolute left-0 top-[calc(100%_+_0.5rem)] flex flex-col w-60 bg-chatgpt-400 p-1 rounded-xl shadow-xl"
            id="dropdown"
          >
            <NavButton to="/"><Home class="w-5" />Home </NavButton>
            <NavButton to="/auto"><Cogs class="w-5" />Auto </NavButton>
            <NavButton to="/bill"><Bill class="w-5" />Bill </NavButton>
            <NavButton to="/docs"><Docs class="w-5" />Docs </NavButton>
            <NavButton to="/logout"><Logout class="w-5" />Logout </NavButton>
          </div>
        </div>
        <div class="text-gray-300" v-if="props.newChat">New query</div>
        <label for="chatInput" @click="props.addInstance">
          <OutlineButton><Plus class="w-5" /></OutlineButton>
        </label>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Ref, onMounted, ref } from "vue";
import Plus from "../../icons/plus.vue";
import OutlineButton from "./button/OutlineButton.vue";
import NavButton from "./button/NavButton.vue";
import Home from "../../icons/home.vue";
import Cogs from "../../icons/cogs.vue";
import Bill from "../../icons/bill.vue";
import Docs from "../../icons/docs.vue";
import Logout from "../../icons/logout.vue";

interface Instance {
  id: number;
}

const props = defineProps<{
  addInstance: () => void;
  instanceList: Instance[];
  handleInstanceId: (id: number) => void;
  newChat?: boolean;
}>();

const isOpen: Ref<boolean> = ref(false);
function handleInstanceBar() {
  isOpen.value = !isOpen.value;
}

const dropdownChatGPT = ref(null);

onMounted(() => {
  if (isOpen.value) {
    const dropD = document.getElementById("dropdown");
    console.log(dropD);

    const dropdown = dropdownChatGPT.value;
    if (dropdown) {
      console.log(dropdown);
    }
  }
});
</script>
