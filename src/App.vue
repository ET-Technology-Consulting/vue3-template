<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import { useProcessorStore } from './stores/processor'

const processorStore = useProcessorStore()
processorStore.getProcesors()
</script>

<template>
  <RouterView />
</template>

<style scoped></style>
