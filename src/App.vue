<script lang="ts" setup>
import { RouterView } from "vue-router";
import mongo_api from "./kraal-api/mongo-db/api";
// console.log(import.meta.env)

// create
// mongo_api.create_chat("New").then(data => {
//   console.log(data);
// })

// delete
// mongo_api.delete_chat("650e9b35cd75a24aca7624a3").then(data => {
//   console.log(data);
// })

// // read
// mongo_api.read_chat().then(data => {
//   console.log(data);
// })

// // update
// mongo_api.update_chat("650ebf28c853a32490db685f", "Update chat 1").then(data => {
//   console.log(data);
// })
</script>

<template>
  <RouterView :key="$route.path" />
</template>
