<template>
  <div>
    {{ props.script.name }}
  </div>
</template>

<script setup lang="ts">
import { Script } from "../types/Script";

const props = defineProps<{
  script: Script;
}>();
</script>
