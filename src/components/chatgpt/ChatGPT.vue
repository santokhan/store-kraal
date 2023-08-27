<template>
  <div :class="`fixed left-0 top-0 right-0 bottom-0 bg-chatgpt-500 z-50 flex flex-col`">
    <ChatHeader
      :addInstance="addInstance"
      :handleInstanceId="handleInstanceId"
      :instanceList="instanceList.value"
      :newChat="currentInstanceId === 0 ? false : true"
    />

    <DummyInstance :hidden="currentInstanceId === 0 ? false : true" />
    <Instance
      v-for="(ele, i) in instanceList.value"
      :key="i"
      :hidden="currentInstanceId === ele.id ? false : true"
    />

    <GoToDashboard />
  </div>
</template>

<script lang="ts" setup>
import { Ref, reactive, ref } from "vue";
import ChatHeader from "./chat-header/ChatHeader.vue";
import Instance from "./instances/Instance.vue";
import GoToDashboard from "./chat-footer/GoToDashboard.vue";
import DummyInstance from "./dummy-instance/DummyInstance.vue";

interface Instance {
  id: number;
}
// const initialInstance: Instance[] = [{ id: 1 }, { id: 2 }, { id: 3 }];
const instanceList: { value: Instance[] } = reactive({
  value: [],
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
const currentInstanceId: Ref<number> = ref(0);
function handleInstanceId(Id: number) {
  currentInstanceId.value = Id;
}
</script>

<style scoped></style>
