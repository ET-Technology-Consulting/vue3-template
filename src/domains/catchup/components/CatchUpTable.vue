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
            class="py-3.5 pl-4 pr-4 text-right text-sm font-semibold text-secondary-900 dark:text-secondary-100 sm:pl-6"
          >
            Action
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
            {{ d.description }}
          </td>
          <td
            class="whitespace-nowrap py-4 pl-4 pr-3 text-sm text-secondary-900 dark:text-secondary-50 sm:pl-6"
          >
            <span
              v-for="b in d.buckets"
              :key="`bucket-${b}`"
              class="inline-flex items-center rounded-full bg-primary-50 dark:bg-primary-900 px-2 py-1 mx-1 text-xs font-medium text-primary-700 dark:text-primary-200 ring-1 ring-inset ring-primary-600/20"
              >{{ b }}</span
            >
          </td>
          <td
            class="whitespace-nowrap py-4 pl-4 pr-3 text-sm text-secondary-900 dark:text-secondary-50 sm:pl-6"
          >
            <span
              v-for="m in d.medias"
              :key="`media-${m}`"
              class="inline-flex items-center rounded-full bg-pink-50 dark:bg-pink-900 px-2 py-1 mx-1 text-xs font-medium text-pink-700 dark:text-pink-200 ring-1 ring-inset ring-pink-600/20"
              >{{ m }}</span
            >
          </td>
          <td class="py-4 pl-4 pr-3 text-right">
            <span class="isolate inline-flex rounded-md shadow-sm">
              <button
                type="button"
                class="relative inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold bg-primary-600 hover:bg-primary-600 text-secondary-50 focus:z-10"
                @click="$emit('updateApp', 'LIVE', d.id)"
              >
                Details
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
