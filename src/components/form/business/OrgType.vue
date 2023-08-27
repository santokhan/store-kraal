<template>
    <div class="relative z-50">
        <Listbox v-model="selectedPerson">
            <ListboxButton
                class="w-full rounded-lg px-4 h-12 flex justify-between items-center text-blue-950 border border-blue-300 bg-transparent">
                <span>{{ selectedPerson.name || "" }}</span>
                <AngleDown class="w-3" />
            </ListboxButton>
            <ListboxOptions
                class="p-1 rounded-lg border border-blue-300 bg-blue-50 text-blue-950 absolute top-full left-0 w-full shadow">
                <ListboxOption v-for="person in people" :key="person.id" :value="person" :disabled="person.unavailable"
                    @click="() => { props.organizationType(person.name) }"
                    class="w-full px-4 py-2 rounded hover:bg-kraal-blue-500 hover:text-white">{{ person.name }}
                </ListboxOption>
            </ListboxOptions>
        </Listbox>
    </div>
</template>
  
<script lang="ts" setup>
import { ref } from "vue";
import { Listbox, ListboxButton, ListboxOptions, ListboxOption } from "@headlessui/vue";
import AngleDown from "../../icons/angle-down.vue";

const props = defineProps<{ organizationType: (account: string) => void }>()

interface People {
    id: number;
    name: string;
    unavailable: boolean;
}

const people: People[] = [
    { id: 1, name: "LLC", unavailable: false },
    { id: 2, name: "C Corp", unavailable: false },
    { id: 3, name: "S Corp", unavailable: false },
    { id: 4, name: "Partnership", unavailable: false },
    { id: 5, name: "Sole Proprietor", unavailable: false },
    { id: 6, name: "Non Profit", unavailable: false },
    { id: 7, name: "Other", unavailable: false },
];

const selectedPerson = ref<People>({ id: 1, name: "", unavailable: false });
</script>
  
<style scoped>
.bg-business {
    background-color: #5f110e;
}

.bg-business-form {
    background-color: #F6F4EE;
}
</style>