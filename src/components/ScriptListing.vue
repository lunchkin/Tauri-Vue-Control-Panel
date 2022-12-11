<template>
	<div class="scriptListing">
		{{ props.script.name }}
		<div class="button">
			TESTING THINGS
		</div>
	</div>
</template>

<script setup lang="ts">
import { Script } from "../types/Script";

const props = defineProps<{
	script: Script;
}>();
</script>

<style scoped>
.scriptListing {
	background-color: #003B6D;
	border: 1px solid #EBEDF3;
	color: #FFFFFF;
	font-weight: bold;
	border-radius: 5px;
	padding: 10px;
	margin: 10px;
}

.button {
	color: #FFFFFF;
	background-color: #333333;
	border: 1px solid #FFFFFF;
	display: table;
	padding: 5px 10px;
	margin: 0 auto;
}
</style>
