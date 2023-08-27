<template>
  <!-- Do not use any parent div on instance -->
  <ChatMain v-if="!props.hidden" :database="database" />
  <ChatFooter v-if="!props.hidden" :handleSubmitedText="handleSubmitedText" />
</template>

<script lang="ts" setup>
import { reactive } from "vue";
import ChatFooter from "../chat-footer/ChatFooter.vue";
import ChatMain from "./chat-main/ChatMain.vue";

const props = defineProps<{ hidden: boolean }>();

interface Chat {
  id: number;
  robot?: Promise<string> | string;
  user: string;
}

const database = reactive<Chat[]>([]);

// Lifting state up form chat input
function handleSubmitedText(message: string) {
  const max = findMax(database);
  const newMax = max + 1;
  addUserInput(message, newMax);
  addResponse(message, newMax);
}

function findMax(list: any[]): number {
  let max: number = 0;
  list.forEach((e: any) => {
    if (max < e.id) max = e.id;
  });
  return max;
}

function addUserInput(message: string, max: number) {
  database.push({
    id: max,
    user: message,
  });
}

function addResponse(message: string, max: number) {
  // !important
  async function APIRequest(message: string = "What is open ai?") {
    let url = "http://localhost:9000";
    url = "https://kraal-aggnuk-kts3.vercel.app";
    return await fetch(url + "/chat?message=" + encodeURI(message), {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
    }).then((res) => res.json());
  }

  function add(res: string) {
    database.forEach((e, i) => {
      if (database[i].id == max && database[i].user) {
        database[i].robot = res;
      }
    });
  }

  APIRequest(message)
    .then((res) => {
      add(res);
    })
    .catch((error) => {
      add("I didn’t quite get that. Please rephrase and ask the question again.");
      console.log(error);
    });
}
</script>
