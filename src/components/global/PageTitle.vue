<template>
  <div class="sm:flex sm:items-center mb-8">
    <div class="sm:flex-auto">
      <h1 class="text-2xl font-semibold leading-6 text-zinc-900 dark:text-zinc-50">{{ props.title }}</h1>
      <p class="mt-2 text-base text-zinc-700 dark:text-zinc-200">{{ props.description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  /**
   * Page title
   */
  title: string,
  /**
   * Page description
   */
   description: string,
}>(), { title: "", description: "" });
</script>