<template>
  <div class="relative w-80">
    <Listbox v-model="selectedPerson">
      <ListboxButton
        class="w-full border border-gray-500 focus:border-green-300 bg-chatgpt-500 rounded-lg px-4 py-2 flex justify-between items-center text-gray-300">
        {{ selectedPerson.name || "Select Model" }}
        <AngleDown class="w-3" />
      </ListboxButton>
      <ListboxOptions class="p-1 bg-chatgpt-400 rounded-lg text-gray-300">
        <ListboxOption class="w-full px-4 py-2 rounded hover:bg-chatgpt-500" v-for="person in people" :key="person.id"
          :value="person" :disabled="person.unavailable">{{ person.name }}</ListboxOption>
      </ListboxOptions>
    </Listbox>
  </div>
</template> 

<script lang="ts" setup>
import { ref } from "vue";
import { Listbox, ListboxButton, ListboxOptions, ListboxOption } from "@headlessui/vue";
import AngleDown from "../../../../icons/angle-down.vue";

interface People {
  id: number;
  name: string;
  unavailable: boolean;
}

const people: People[] = [
  { id: 1, name: "Unemployed", unavailable: false },
  { id: 2, name: "Retirement & Kids", unavailable: false },
  { id: 3, name: "Debt & Mortgage", unavailable: false },
  { id: 4, name: "Purchase Decision", unavailable: false },
  { id: 5, name: "Miscellaneous", unavailable: false },
];
const selectedPerson = ref<People | any>({});
</script>
