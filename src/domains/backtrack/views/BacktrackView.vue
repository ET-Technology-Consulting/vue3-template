<template>
  <main>
    <PageTitle title="Backtrack" description="Check backtrack results" icon="backward" />
    <backtrack-search-table :data="data" :header="header" />
    <loading-button label="Page Down" :loading="dataLoading" @callback="() => { page = page - 1; getData() }" />
    <loading-button label="Page Up" :loading="dataLoading" @callback="() => { page = page + 1; getData() }" />
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted, toRaw} from 'vue'

import LoadingButton from '@/components/global/LoadingButton.vue'

import { getBacktrackSearches } from '../api/backtrackApi'

import PageTitle from '../../../components/global/PageTitle.vue'

import BacktrackSearchTable from '../components/BacktrackSearchTable.vue'

const header = ['ID', 'Description', 'Start', 'End', 'PHS Options', 'Media IDs', 'Bucket IDs']
const data = ref<any>([])
const dataLoading = ref(false)
const limit = ref(10)
const page = ref(1)

;(async () => {
  dataLoading.value = true
  const res = await getBacktrackSearches({limit: limit.value, page: page.value})
  console.log(res)
  data.value = res.items
  dataLoading.value = false
})()

const getData = async () => {
  dataLoading.value = true
  const res = await getBacktrackSearches({limit: limit.value, page: page.value})
  console.log(res)
  data.value = res.items
  dataLoading.value = false
}
</script>