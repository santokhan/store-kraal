<template>
    <!-- this will be removed soon -->
    <Home class="w-5" v-if="props.index === 0" />
    <Cogs class="w-5" v-else-if="props.index === 1" />
    <Bill class="w-5" v-else-if="props.index === 2" />
    <Docs class="w-5" v-else-if="props.index === 3" />
    <Logout class="w-5" v-else-if="props.index === 4" />
    <!-- / -->
    <Ai class="w-5" v-else-if="props.name === 'ai'" />
    <Home class="w-5" v-else-if="props.name === 'home'" />
    <Cogs class="w-5" v-else-if="props.name === 'cogs'" />
    <Cog class="w-5" v-else-if="props.name === 'cog'" />
    <User class="w-5" v-else-if="props.name === 'user'" />
    <Team class="w-5" v-else-if="props.name === 'team'" />
    <Card class="w-5" v-else-if="props.name === 'bills'" />
    <Docs class="w-5" v-else-if="props.name === 'docs'" />
    <Logout class="w-5" v-else-if="props.name === 'logout'" />
</template>

<script setup lang="ts">
import Ai from '../../../icons/ai.vue';
import Bill from '../../../icons/bill.vue';
import Card from '../../../icons/card.vue';
import Cog from '../../../icons/cog.vue';
import Cogs from '../../../icons/cogs.vue';
import Docs from '../../../icons/docs.vue';
import Home from '../../../icons/home.vue';
import Logout from '../../../icons/logout.vue';
import Team from '../../../icons/team.vue';
import User from '../../../icons/user-simple.vue';

const props = defineProps<{ index?: number, name?: string }>()
</script>