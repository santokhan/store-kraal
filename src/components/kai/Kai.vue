<template>
  <div class="fixed left-0 top-0 right-0 bottom-0 bg-chatgpt-500 z-50 flex">
    <ChatSidebar />
    

    <div class="flex flex-col w-full h-full">
      <ChatHeader :addInstance="addInstance" :handleInstanceId="handleInstanceId" :instanceList="instanceList.value"
        :newChat="true" :queryName="queryName" />


      <Instance v-for="(ele, i) in instanceList.value" :key="i" :hidden="currentInstanceId === ele.id ? false : true"
        :handleQueryName="handleQueryName" />


      <GoToDashboard title="Go to dashboard link"/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import ChatHeader from "./chat-header/ChatHeader.vue";
import Instance from "./instances/Instance.vue";
import GoToDashboard from "./chat-footer/GoToDashboard.vue";
import ChatSidebar from "./sidebar/ChatSidebar.vue";

interface Instance {
  id: number;
}

// const initialInstance: Instance[] = [{ id: 1 }, { id: 2 }];
const instanceList: { value: Instance[] } = reactive({
  value: [{ id: 1 }],
});

function findMax(list: any[]): number {
  let max: number = 0;
  list.forEach((ele: any) => {
    if (max < ele.id) max = ele.id;
  });
  return max;
}

// To add new instance
function addInstance() {
  const previous = JSON.parse(JSON.stringify(instanceList.value));
  instanceList.value = [...previous, { id: findMax(instanceList.value) + 1 }];

  currentInstanceId.value = findMax(instanceList.value);
}

// Only for Instance switching
const currentInstanceId = ref<number>(1);
function handleInstanceId(Id: number) {
  currentInstanceId.value = Id;
}

const queryName = ref<string>("New Query");
// query name lifting state up when ai response arrived
function handleQueryName(qName: string) {
  if (qName) {
    // don't take more than 8 word on summary
    const name = qName.split(" ").slice(0, 8).join(" ");
    queryName.value = qName;
  }
}

const chatSidebarMobile = ref<null | HTMLElement>(null)
</script>

<style scoped></style>
