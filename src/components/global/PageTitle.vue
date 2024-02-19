<template>
  <div class="mb-8">
    <div class="md:flex md:items-center md:justify-between">
      <div class="min-w-0 flex mr-4">
        <font-awesome-icon :icon="['fad', props.icon]" size="2xl" :class="`text-primary-500`" />
      </div>
      <div class="min-w-0 flex-1">
        <h2
          class="text-2xl font-bold leading-7 text-secondary-900 dark:text-secondary-50 sm:truncate sm:text-3xl sm:tracking-tight"
        >
          {{ props.title }}
        </h2>
      </div>
      <div v-if="props.action !== null" class="mt-4 flex md:ml-4 md:mt-0">
        <button
          type="button"
          @click="$emit('titleAction')"
          class="ml-3 inline-flex items-center rounded-md bg-primary-600 px-3 py-2 text-sm font-semibold text-secondary-50 shadow-sm hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
        >
          {{ props.action }}
        </button>
      </div>
    </div>
    <p class="mt-2 text-base text-secondary-700 dark:text-secondary-200">{{ props.description }}</p>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    /**
     * Page title
     */
    title: string
    /**
     * Page description
     */
    description: string
    /**
     * Page icon
     */
    icon: string
    /**
     * Page action
     */
    action: null | string
  }>(),
  { title: '', description: '', action: null }
)
</script>
