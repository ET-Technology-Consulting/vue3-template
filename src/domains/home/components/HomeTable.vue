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
        </tr>
      </thead>
      <tbody
        class="divide-y divide-secondary-200 dark:divide-secondary-800 bg-secondary-100 dark:bg-secondary-800"
      >
        <tr
          v-for="d in props.data"
          :key="d.text"
          class="even:bg-secondary-50 dark:bg-secondary-900"
        >
          <td
            class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-secondary-900 dark:text-secondary-50 sm:pl-6"
          >
            {{ d.text }}
          </td>
          <td>
            <button-group
              :options="[
                { action: 'Edit', isActive: true },
                { action: 'Delete', isActive: false }
              ]"
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import ButtonGroup from '../../../components/global/ButtonGroup.vue'

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
