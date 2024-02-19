<script setup lang="ts">
import { ref } from 'vue'
import { getCatFacts } from '../api/homeApi'
import TheWelcome from '../components/TheWelcome.vue'
import HomeTable from '../components/HomeTable.vue'
import PageTitle from '../../../components/global/PageTitle.vue'

const header = ['Text', 'Action']
const data = ref([])

;(async () => {
  const res = await getCatFacts()
  console.log(res)
  data.value = res
})()
</script>

<template>
  <main>
    <PageTitle title="Home" description="Home page" icon="house" />
    <HomeTable :data="data" :header="header" />
  </main>
</template>
