<template>
  <span class="isolate inline-flex rounded-md shadow-sm">
    <button
      v-for="(o, idx) in options"
      type="button"
      :class="[
        'relative inline-flex items-center  px-3 py-2 text-sm font-semibold text-secondary-900 ring-1 ring-inset ring-secondary-300 focus:z-10',
        o.isActive === true
          ? 'bg-primary-500 hover:bg-primary-600 text-secondary-50'
          : 'bg-white hover:bg-secondary-50',
        idx === 0 ? 'rounded-l-md' : '',
        idx === options.length - 1 ? 'rounded-r-md' : '',
        idx > 0 ? '-ml-px' : ''
      ]"
    >
      {{ o.action }}
    </button>
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    /**
     * Data to display
     */
    options: any
  }>(),
  { options: [] }
)
</script>
