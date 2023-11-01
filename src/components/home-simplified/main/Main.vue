<template>
	<main class="relative">
		<div :class="[
			'max-w-md mx-auto h-screen px-4',
			'flex flex-col items-center justify-center gap-20 pb-20'
		]">
			<SVGKraalBanner class="w-full" />
			<StartedBusiness />
		</div>
		<div class="relative overflow-hidden w-full h-20">
			<div :class="props.theme === 'dark' ? '' : 'triangle'"></div>
		</div>
	</main>
</template>

<script lang="ts" setup>
import SVGKraalBanner from "./SVGKraalBanner.vue";
import StartedBusiness from "./get-started/Business.vue";

const props = defineProps<{ theme: string }>();
</script>

<style scoped>
.main-img-animate {
	max-height: 500px;
	overflow: hidden;
	animation: drop 0.75s ease-in-out forwards;
}

@media (min-width: 576px) {
	.main-img-animate {
		max-height: none;
	}
}

@keyframes drop {
	0% {
		max-height: 100px;
	}
}

.triangle {
	position: absolute;
	left: 0;
	bottom: 0;
	width: 0;
	height: 0;
	border-left: calc(100vw) solid transparent;
	border-top: 0 solid transparent;
	border-bottom: 70px solid white;
}
</style>
