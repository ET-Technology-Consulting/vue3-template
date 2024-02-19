<template>
  <button
    type="button"
    class="inline-flex w-full justify-center rounded-md bg-primary-600 px-3 py-2 text-sm font-semibold text-secondary-50 shadow-sm hover:bg-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 sm:col-start-2"
    @click="$emit('closeModal')"
  >
    Close
  </button>
  <button
    type="button"
    class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-secondary-900 shadow-sm ring-2 ring-inset ring-primary-500 hover:bg-gray-50 sm:col-start-1 sm:mt-0"
    @click="$emit('closeModal')"
    ref="cancelButtonRef"
  >
    Save
  </button>
</template>

<script setup lang="ts"></script>
