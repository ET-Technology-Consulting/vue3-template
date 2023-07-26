<template>
  <div class="overflow-hidden shadow sm:rounded-lg">
    <table class="table-fixed min-w-full divide-y divide-zinc-300 dark:divide-zinc-700">
      <thead class="bg-zinc-100 dark:bg-zinc-800">
        <tr>
          <th v-for="h in props.header" scope="col"
            class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-zinc-900 dark:text-zinc-100 sm:pl-6">{{ h }}</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-zinc-200 dark:divide-zinc-800 bg-zinc-100 dark:bg-zinc-800">
        <tr v-for="d in props.data" :key="d.text" class="even:bg-zinc-50 dark:bg-zinc-900">
          <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-zinc-900 dark:text-zinc-50 sm:pl-6">{{
            d.text }}</td>
          <td>
            <button-group :options="[{action: 'Edit', isActive: true}, {action: 'Delete', isActive: false}]" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import ButtonGroup from '../../../components/global/ButtonGroup.vue'

const props = withDefaults(defineProps<{
  /**
   * Data to display
   */
  data: any,
  /**
   * Table header
   */
   header: any,
}>(), { data: [], header: [] });
</script>