<template>
	<div>
		{{ getTestString(newMessage) }}
		{{ newMessage }}
		<ScriptList />
	</div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import ScriptList from "../components/ScriptList.vue";

const message = ref("This is the story of a girl");

const newMessage = computed((): string => {
	return "This is the story of a girl, who cried a river and drowned the whole world";
});

const getTestString = (newString = "This is a test"): string => {
	return newString;
};

// See this page for documentation
// https://learnvue.co/tutorials/script-setup
// all of these are automatically bound to the template
// const a = ref(3);
// const b = computed(() => a.value + 2);
// const changeA = () => {
//   a.value = 4;
// };

</script>
