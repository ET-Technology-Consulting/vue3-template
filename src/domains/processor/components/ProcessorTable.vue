<template>
  <div class="overflow-hidden shadow sm:rounded-lg">
    <table class="table-fixed min-w-full divide-y divide-secondary-300 dark:divide-secondary-700">
      <thead class="bg-secondary-100 dark:bg-secondary-800">
        <tr>
          <th
            v-for="h in props.header"
            scope="col"
            class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-secondary-900 dark:text-secondary-100 sm:pl-6"
          >
            {{ h }}
          </th>
          <th
            scope="col"
            class="py-3.5 pl-4 pr-3 text-right text-sm font-semibold text-secondary-900 dark:text-secondary-100 sm:pl-6"
          >
            App
          </th>
        </tr>
      </thead>
      <tbody
        class="divide-y divide-secondary-200 dark:divide-secondary-800 bg-white dark:bg-secondary-800"
      >
        <tr
          v-for="d in props.data"
          :key="d.id"
          class="even:bg-secondary-50 even:dark:bg-secondary-900 hover:bg-secondary-200 hover:dark:bg-secondary-950"
        >
          <td
            class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-secondary-900 dark:text-secondary-50 sm:pl-6 cursor-pointer"
            @click="$emit('showDetails', d.id)"
          >
            {{ d.id }}
          </td>
          <td
            class="whitespace-nowrap py-4 pl-4 pr-3 text-sm text-secondary-900 dark:text-secondary-50 sm:pl-6"
          >
            <span
              v-if="d.is_active === true"
              class="inline-flex items-center rounded-full bg-success-50 px-2 py-1 text-xs font-medium text-success-700 ring-1 ring-inset ring-success-600/20"
              >Active</span
            >
            <span
              v-if="d.is_active === false"
              class="inline-flex items-center rounded-full bg-error-50 px-2 py-1 text-xs font-medium text-error-700 ring-1 ring-inset ring-error-700/10"
              >Inactive</span
            >
          </td>
          <td
            class="whitespace-nowrap py-4 pl-4 pr-3 text-sm text-secondary-900 dark:text-secondary-50 sm:pl-6"
          >
            {{ d.api_url }}
          </td>
          <td class="py-4 pl-4 pr-3 text-right">
            <span class="isolate inline-flex rounded-md shadow-sm">
              <button
                type="button"
                :class="[
                  'relative inline-flex items-center rounded-l-md px-3 py-2 text-sm font-semibold ring-1 ring-inset ring-secondary-300 hover:bg-primary-600 focus:z-10',
                  d.app === 'LIVE'
                    ? 'bg-primary-500 text-secondary-50'
                    : 'bg-white text-secondary-900'
                ]"
                @click="$emit('updateApp', 'LIVE', d.id)"
              >
                LIVE
              </button>
              <button
                type="button"
                :class="[
                  'relative -ml-px inline-flex items-center rounded-r-md px-3 py-2 text-sm font-semibold ring-1 ring-inset ring-secondary-300 hover:bg-primary-600 focus:z-10',
                  d.app === 'BACKTRACK'
                    ? 'bg-primary-500 text-secondary-50'
                    : 'bg-secondary-50 text-secondary-900'
                ]"
                @click="$emit('updateApp', 'BACKTRACK', d.id)"
              >
                BACKTRACK
              </button>
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    /**
     * Data to display
     */
    data: any
    /**
     * Table header
     */
    header: any
  }>(),
  { data: [], header: [] }
)
</script>
