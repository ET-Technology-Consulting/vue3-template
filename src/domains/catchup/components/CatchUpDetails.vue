<template>
  <div class="w-full border-t border-primary-100 my-8" />

  <!-- DATE INFO -->
  <div class="md:flex md:items-center md:justify-between space-x-2 text-left">
    <div class="flex-1">
      <label for="startDate" class="block text-sm font-medium leading-6 text-secondary-900"
        >Start date</label
      >
      <div class="mt-1">
        <input
          v-model="props.details.startDate"
          type="text"
          name="startDate"
          id="startDate"
          class="block w-full rounded-md border-0 py-1.5 px-1.5 text-secondary-900 shadow-sm ring-1 ring-inset ring-secondary-300 placeholder:text-secondary-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
          placeholder="YYYY-MM-DD"
        />
      </div>
      <p>{{ props.details.startDate }}</p>
    </div>
    <div class="flex-1">
      <label for="endDate" class="block text-sm font-medium leading-6 text-secondary-900"
        >End date</label
      >
      <div class="mt-1">
        <input
          v-model="props.details.endDate"
          type="text"
          name="endDate"
          id="endDate"
          class="block w-full rounded-md border-0 py-1.5 px-1.5 text-secondary-900 shadow-sm ring-1 ring-inset ring-secondary-300 placeholder:text-secondary-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
          placeholder="YYYY-MM-DD"
        />
      </div>
      <p>{{ props.details.endDate }}</p>
    </div>
  </div>

  <!-- BUCKETS -->
  <RadioGroup v-model="props.details.bucketList" class="mt-8 text-left">
    <RadioGroupLabel class="text-sm font-semibold leading-6 text-secondary-900"
      >Select a bucket list</RadioGroupLabel
    >
    <div class="mt-1 grid grid-cols-1 gap-y-6 sm:grid-cols-5 sm:gap-x-2">
      <RadioGroupOption
        as="template"
        v-for="bucketList in bucketLists"
        :key="bucketList.id"
        :value="bucketList.id"
        v-slot="{ active, checked }"
      >
        <div
          :class="[
            active ? 'border-primary-600 ring-2 ring-primary-600' : 'border-secondary-300',
            'relative flex cursor-pointer rounded-lg border bg-secondary-50 p-4 shadow-sm focus:outline-none'
          ]"
        >
          <span class="flex flex-1">
            <span class="flex flex-col">
              <RadioGroupLabel as="span" class="block text-sm font-medium text-secondary-900">{{
                bucketList.title
              }}</RadioGroupLabel>
              <RadioGroupDescription
                as="span"
                class="mt-1 flex items-center text-sm text-secondary-500"
                >{{ bucketList.description }}</RadioGroupDescription
              >
              <RadioGroupDescription
                as="span"
                class="mt-6 text-sm font-medium text-secondary-900"
                >{{ bucketList.count }}</RadioGroupDescription
              >
            </span>
          </span>
          <CheckCircleIcon
            :class="[!checked ? 'invisible' : '', 'h-5 w-5 text-primary-600']"
            aria-hidden="true"
          />
          <span
            :class="[
              active ? 'border' : 'border-2',
              checked ? 'border-primary-600' : 'border-transparent',
              'pointer-events-none absolute -inset-px rounded-lg'
            ]"
            aria-hidden="true"
          />
        </div>
      </RadioGroupOption>
    </div>
  </RadioGroup>

  <!-- MEDIAS -->
  <RadioGroup v-model="props.details.mediaList" class="mt-8 text-left">
    <RadioGroupLabel class="text-sm font-semibold leading-6 text-secondary-900"
      >Select a media list</RadioGroupLabel
    >
    <div class="mt-1 grid grid-cols-1 gap-y-6 sm:grid-cols-5 sm:gap-x-2">
      <RadioGroupOption
        as="template"
        v-for="mediaList in mediaLists"
        :key="mediaList.id"
        :value="mediaList.id"
        v-slot="{ active, checked }"
      >
        <div
          :class="[
            active ? 'border-primary-600 ring-2 ring-primary-600' : 'border-secondary-300',
            'relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none'
          ]"
        >
          <span class="flex flex-1">
            <span class="flex flex-col">
              <RadioGroupLabel as="span" class="block text-sm font-medium text-secondary-900">{{
                mediaList.title
              }}</RadioGroupLabel>
              <RadioGroupDescription
                as="span"
                class="mt-1 flex items-center text-sm text-secondary-500"
                >{{ mediaList.description }}</RadioGroupDescription
              >
              <RadioGroupDescription
                as="span"
                class="mt-6 text-sm font-medium text-secondary-900"
                >{{ mediaList.count }}</RadioGroupDescription
              >
            </span>
          </span>
          <CheckCircleIcon
            :class="[!checked ? 'invisible' : '', 'h-5 w-5 text-primary-600']"
            aria-hidden="true"
          />
          <span
            :class="[
              active ? 'border' : 'border-2',
              checked ? 'border-primary-600' : 'border-transparent',
              'pointer-events-none absolute -inset-px rounded-lg'
            ]"
            aria-hidden="true"
          />
        </div>
      </RadioGroupOption>
    </div>
  </RadioGroup>

  <div class="w-full border-t border-primary-100 my-8" />
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import {
  RadioGroup,
  RadioGroupDescription,
  RadioGroupLabel,
  RadioGroupOption
} from '@headlessui/vue'

const props = defineProps<{
  /**
   * Processor details
   */
  details: any
}>()

const bucketLists = [
  {
    id: 1,
    title: 'All buckets',
    description: 'Last message sent an hour ago',
    count: '621 buckets'
  },
  {
    id: 2,
    title: 'CIP Buckets',
    description: 'Last message sent 2 weeks ago',
    count: '1200 buckets'
  },
  {
    id: 3,
    title: 'DDEX Buckets',
    description: 'Last message sent 4 days ago',
    count: '2740 buckets'
  },
  {
    id: 4,
    title: 'Adverts Buckets',
    description: 'Last message sent 4 days ago',
    count: '2740 buckets'
  },
  {
    id: 5,
    title: 'Custom list',
    description: 'Last message sent 4 days ago',
    count: '2740 buckets'
  }
]

const mediaLists = [
  { id: 1, title: 'All medias', description: 'Last message sent an hour ago', count: '621 medias' },
  {
    id: 2,
    title: 'PROD medias',
    description: 'Last message sent 2 weeks ago',
    count: '1200 medias'
  },
  { id: 3, title: 'TV Medias', description: 'Last message sent 4 days ago', count: '2740 medias' },
  {
    id: 4,
    title: 'Radio medias',
    description: 'Last message sent 4 days ago',
    count: '2740 medias'
  },
  { id: 5, title: 'Custom list', description: 'Last message sent 4 days ago', count: '2740 medias' }
]

const selectedMailingLists = ref(bucketLists[0])
</script>
