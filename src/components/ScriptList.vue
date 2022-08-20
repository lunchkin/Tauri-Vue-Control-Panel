<template>
  <div>
    <div
      v-for="(script, index) in scripts"
      :key="index"
    >
      <ScriptListing :script="script" />
    </div>
  </div>
</template>

<script setup lang="ts">
import ScriptListing from "./ScriptListing.vue";
import { Script } from "../types/Script";

const scripts: Script[] = [
  {
    "id": "1",
    "name": "Script 1",
    "description": "This is script 1",
    "script": "ls -a"
  },
  {
    "id": "2",
    "name": "Script 2",
    "description": "This is script 2",
    "script": "ls -a"
  }
];

</script>
