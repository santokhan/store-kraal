<template>
    <div class="flex gap-1.5">
        <div class="flex h-6 items-center">
            <input :id="name" :name="name" type="checkbox" class="h-4 w-4" @click="() => { handleChecked(props.index) }" />
        </div>
        <div class="text-sm leading-6">
            <label :for="name" class="">{{ props.title }}</label>
        </div>
    </div>
</template>

<script setup lang="ts">
type Props = {
    title: string
    index: number
    handleChecked: (index: number) => void
}

const props = defineProps<Props>()
const name = `checkbox-${props.index}`
</script>

<style scoped></style>