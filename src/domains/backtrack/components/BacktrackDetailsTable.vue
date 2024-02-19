<template>
  <div class="table-auto overflow-scroll shadow sm:rounded-lg h-[32rem]">
    <table class="min-w-full divide-y divide-secondary-300 dark:divide-secondary-700">
      <thead class="bg-secondary-100 dark:bg-secondary-800">
        <tr>
          <th
            v-for="h in props.header"
            scope="col"
            class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-secondary-900 dark:text-secondary-100 sm:pl-6"
          >
            {{ h }}
          </th>
          <!-- <th scope="col"
            class="py-3.5 pl-4 pr-3 text-right text-sm font-semibold text-secondary-900 dark:text-secondary-100 sm:pl-6">Action</th> -->
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
          <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-secondary-900 dark:text-secondary-50 sm:pl-6 cursor-pointer">
            {{ d.fingerprint_id }}
          </td>
          <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm text-secondary-900 dark:text-secondary-50 sm:pl-6">
            {{ d.bucket }}
          </td>
          <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm text-secondary-900 dark:text-secondary-50 sm:pl-6">
            {{ d.media_id }}
          </td>
          <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm text-secondary-900 dark:text-secondary-50 sm:pl-6">
            {{ d.title }}
          </td>
          <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm text-secondary-900 dark:text-secondary-50 sm:pl-6">
            {{ d.display_artist }}
          </td>
          <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm text-secondary-900 dark:text-secondary-50 sm:pl-6">
            {{ d.isrc }}
          </td>
          <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm text-secondary-900 dark:text-secondary-50 sm:pl-6">
            {{ d.start_date_detection }}
          </td>
          <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm text-secondary-900 dark:text-secondary-50 sm:pl-6">
            {{ d.end_date_detection }}
          </td>
          <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm text-secondary-900 dark:text-secondary-50 sm:pl-6">
            {{ d.duration }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { humanFileSize } from '../../../utils/conversion';

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
