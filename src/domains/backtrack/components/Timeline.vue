<template>
  <div id="chart">
    <apexchart type="rangeBar" height="450" :options="props.chartOptions" :series="toRaw(props.series)" id="vuechart-example"></apexchart>
  </div>
</template>

<script setup lang="ts">
import { toRaw } from 'vue';
const props = defineProps({
  series: {
    type: Array,
    required: true
  },
  chartOptions: {
    type: Object,
    required: true
  }
})
</script>