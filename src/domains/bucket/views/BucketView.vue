<template>
  <main>
    <PageTitle title="Buckets" description="Find all active buckets" icon="bucket" />
    <Tabs :tabs="tabs" :activeTab="activeTab" @switch-tab="(id) => switchTab(id)" />
    <bucket-table :data="data[activeTab]" :header="header" />
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import { getBuckets } from '../api/bucketApi'

import PageTitle from '../../../components/global/PageTitle.vue'
import Tabs from '../../../components/global/Tabs.vue'

import BucketTable from '../components/BucketTable.vue'

const activeTab = ref('cip')
const tabs = ref({
  cip: { name: 'CIP', count: 0 },
  ddex: { name: 'DDEX', count: 0 },
  advert: { name: 'Adverts', count: 0 },
  yacast: { name: 'Yacast', count: 0 }
})
const header = ['ID', 'Name', 'Size (0.tone)', 'Processors']
const data = ref<any>({
  cip: [],
  ddex: [],
  advert: [],
  yacast: []
})

;(async () => {
  const res = await getBuckets()
  console.log(res.data)
  res.data.forEach((element: any) => {
    if (element.type === 'cip') {
      data.value.cip.push(element)
      tabs.value.cip.count++
    } else if (element.type === 'ddex') {
      data.value.ddex.push(element)
      tabs.value.ddex.count++
    } else if (element.type === 'advert') {
      data.value.advert.push(element)
      tabs.value.advert.count++
    } else if (element.type === 'yacast') {
      data.value.yacast.push(element)
      tabs.value.yacast.count++
    }
  })
})()

const switchTab = (id: string) => {
  console.log(id)
  activeTab.value = id
}
</script>
