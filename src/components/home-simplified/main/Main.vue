<template>
	<main>
		<div :class="[
			'max-w-md mx-auto h-screen px-4 pb-20',
			'flex flex-col items-center justify-center gap-20'
		]">
			<div class="w-3/4">
				<SVGKraalBanner />
			</div>
			<StartedBusiness />
		</div>
	</main>
	<Triangle />
</template>

<script lang="ts" setup>
import Triangle from "../../home/footer/Triangle.vue";
import SVGKraalBanner from "./SVGKraalBanner.vue";
import StartedBusiness from "./get-started/Business.vue";
</script>

