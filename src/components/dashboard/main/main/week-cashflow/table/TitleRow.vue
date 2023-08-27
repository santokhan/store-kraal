<template>
    <tr class="section-header">
        <td class="text-gray-600 font-semibold py-2 px-2 text-start"> 
            <slot></slot>
        </td>
    </tr>
</template>

<script setup lang="ts">

</script>

<style scoped>
tr:not(.section-header):nth-child(odd) {
    background-color: rgb(243 244 246);
}

tr:not(.section-header):nth-child(even) {
    background-color: #ffffff;
}
</style>