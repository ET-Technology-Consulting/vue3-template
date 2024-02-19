<template>
  <div>
    <span
      class="inline-flex items-center rounded-full bg-primary-50 px-2 py-1 m-1 text-sm font-medium text-primary-600 ring-1 ring-inset ring-primary-500/10">{{
        humanFileSize(props.details.data.data.total_size, true) }}</span>
  </div>
  <div v-if="props.details.data.data.cip !== ''" class="my-8">
    <div class="relative">
      <div class="absolute inset-0 flex items-center" aria-hidden="true">
        <div class="w-full border-t border-primary-300" />
      </div>
      <div class="relative flex justify-center">
        <span class="bg-secondary-50 px-3 text-base font-semibold leading-6 text-secondary-900">CIP buckets
          <span
            class="inline-flex items-center rounded-full bg-secondary-50 px-2 py-1 m-1 text-sm font-medium text-secondary-600 ring-1 ring-inset ring-secondary-500/10">{{
              props.details.data.data.cip.split(',').length }}</span>
          <span
            class="inline-flex items-center rounded-full bg-primary-50 px-2 py-1 m-1 text-sm font-medium text-primary-600 ring-1 ring-inset ring-primary-500/10">{{
              humanFileSize(props.details.data.data.cip_size, true) }}</span></span>
      </div>
    </div>
    <div class="mt-4">
      <span v-for="(d, idx) in props.details.data.data.cip.split(',')" :key="idx"
        class="inline-flex items-center rounded-full bg-secondary-50 px-2 py-1 m-1 text-xs font-medium text-secondary-600 ring-1 ring-inset ring-secondary-500/10">{{
          d }}</span>
    </div>
  </div>
  <div v-if="props.details.data.data.ddex !== ''" class="my-8">
    <div class="relative">
      <div class="absolute inset-0 flex items-center" aria-hidden="true">
        <div class="w-full border-t border-primary-300" />
      </div>
      <div class="relative flex justify-center">
        <span class="bg-secondary-50 px-3 text-base font-semibold leading-6 text-secondary-900">DDEX buckets
          <span
            class="inline-flex items-center rounded-full bg-secondary-50 px-2 py-1 m-1 text-sm font-medium text-secondary-600 ring-1 ring-inset ring-secondary-500/10">{{
              props.details.data.data.ddex.split(',').length }}</span>
          <span
            class="inline-flex items-center rounded-full bg-primary-50 px-2 py-1 m-1 text-sm font-medium text-primary-600 ring-1 ring-inset ring-primary-500/10">{{
              humanFileSize(props.details.data.data.ddex_size, true) }}</span></span>
      </div>
    </div>
    <div class="mt-4">
      <span v-for="(d, idx) in props.details.data.data.ddex.split(',')" :key="idx"
        class="inline-flex items-center rounded-full bg-secondary-50 px-2 py-1 m-1 text-xs font-medium text-secondary-600 ring-1 ring-inset ring-secondary-500/10">{{
          d }}</span>
    </div>
  </div>
  <div v-if="props.details.data.data.advert !== ''" class="my-8">
    <div class="relative">
      <div class="absolute inset-0 flex items-center" aria-hidden="true">
        <div class="w-full border-t border-primary-300" />
      </div>
      <div class="relative flex justify-center">
        <span class="bg-secondary-50 px-3 text-base font-semibold leading-6 text-secondary-900">Advert buckets
          <span
            class="inline-flex items-center rounded-full bg-secondary-50 px-2 py-1 m-1 text-sm font-medium text-secondary-600 ring-1 ring-inset ring-secondary-500/10">{{
              props.details.data.data.advert.split(',').length }}</span>
          <span
            class="inline-flex items-center rounded-full bg-primary-50 px-2 py-1 m-1 text-sm font-medium text-primary-600 ring-1 ring-inset ring-primary-500/10">{{
              humanFileSize(props.details.data.data.advert_size, true) }}</span></span>
      </div>
    </div>
    <div class="mt-4">
      <span v-for="(d, idx) in props.details.data.data.advert.split(',')" :key="idx"
        class="inline-flex items-center rounded-full bg-secondary-50 px-2 py-1 m-1 text-xs font-medium text-secondary-600 ring-1 ring-inset ring-secondary-500/10">{{
          d }}</span>
    </div>
  </div>
  <div v-if="props.details.data.data.yacast !== ''" class="my-8">
    <div class="relative">
      <div class="absolute inset-0 flex items-center" aria-hidden="true">
        <div class="w-full border-t border-primary-300" />
      </div>
      <div class="relative flex justify-center">
        <span class="bg-secondary-50 px-3 text-base font-semibold leading-6 text-secondary-900">Yacast buckets
          <span
            class="inline-flex items-center rounded-full bg-secondary-50 px-2 py-1 m-1 text-sm font-medium text-secondary-600 ring-1 ring-inset ring-secondary-500/10">{{
              props.details.data.data.yacast.split(',').length }}</span>
          <span
            class="inline-flex items-center rounded-full bg-primary-50 px-2 py-1 m-1 text-sm font-medium text-primary-600 ring-1 ring-inset ring-primary-500/10">{{
              humanFileSize(props.details.data.data.yacast_size, true) }}</span></span>
      </div>
    </div>
    <div class="mt-4">
      <span v-for="(d, idx) in props.details.data.data.yacast.split(',')" :key="idx"
        class="inline-flex items-center rounded-full bg-secondary-50 px-2 py-1 m-1 text-xs font-medium text-secondary-600 ring-1 ring-inset ring-secondary-500/10">{{
          d }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { humanFileSize } from '../../../utils/conversion';

const props = withDefaults(
  defineProps<{
    /**
     * Processor details
     */
    details: any
  }>(),
  { details: { id: 0, data: [] } }
)
console.log(props.details.data.data)
</script>
