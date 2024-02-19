<template>
  <div class="mb-8">
    <div class="sm:hidden">
      <label for="tabs" class="sr-only">Select a tab</label>
      <!-- Use an "onChange" listener to redirect the user to the selected tab URL. -->
      <select id="tabs" name="tabs"
        class="block w-full rounded-md border-secondary-300 py-2 pl-3 pr-10 text-base focus:border-primary-500 focus:outline-none focus:ring-primary-500 sm:text-sm">
        <option v-for="[key, value] in Object.entries(props.tabs)" :key="value.id" :selected="value.id === props.activeTab">
          {{ value.label }}
        </option>
      </select>
    </div>
    <div class="hidden sm:block">
      <div class="border-b border-secondary-200">
        <nav class="-mb-px flex space-x-8" aria-label="Tabs">
          <span v-for="[key, value] in Object.entries(props.tabs)" :key="key" @click="$emit('switchTab', key)" :class="[
            key === props.activeTab
              ? 'border-primary-500 text-primary-600'
              : 'border-transparent text-secondary-500 hover:border-secondary-200 hover:text-secondary-700',
            'flex whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium cursor-pointer'
          ]" :aria-current="key === props.activeTab ? 'page' : undefined">
            {{ value?.name }}
            <span v-if="value?.count" :class="[
              key === props.activeTab
                ? 'bg-primary-100 text-primary-600'
                : 'bg-secondary-100 text-secondary-900',
              'ml-3 hidden rounded-full py-0.5 px-2.5 text-xs font-medium md:inline-block'
            ]">{{ value?.count }}</span>
          </span>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  /**
   * Tabs to fetch
   */
  tabs: Object
  /**
   * Page description
   */
  activeTab: string
}>()
</script>
