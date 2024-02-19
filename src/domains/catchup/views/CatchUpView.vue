<script setup lang="ts">
import { ref, watch } from 'vue'
import { getCatchUps } from '../api/catchUpApi'

import PageTitle from '../../../components/global/PageTitle.vue'
import Modal from '../../../components/global/Modal.vue'

import CatchUpTable from '../components/CatchUpTable.vue'
import CatchUpDetails from '../components/CatchUpDetails.vue'
import CatchUpDetailsAction from '../components/CatchUpDetailsAction.vue'

const header = ['ID', 'Description', 'Buckets', 'Medias']
const data = ref(<any[]>[])
const showModalCreate = ref(false)
const newCatchUp = ref({
  startDate: null,
  endDate: null,
  bucketList: 1,
  mediaList: 1
})

;(async () => {
  const res = await getCatchUps()
  data.value = res
})()

const openModalCreate = () => {
  console.log('yaaaaah')
  showModalCreate.value = true
}

const closeModalCreate = () => {
  showModalCreate.value = false
}

watch(
  newCatchUp,
  () => {
    // this callback is invoked when myRef changes
    console.log('myRef changed')
    console.log(newCatchUp.value)
  },
  { deep: true }
)

// const updateNewCatchUp = (data: any) => {
//   console.log('suuuuuu')
//   newCatchUp.value = data
// }
</script>

<template>
  <main>
    <PageTitle
      title="Catch Up"
      description="Catch up reco live"
      icon="arrow-rotate-right"
      action="Create"
      @title-action="openModalCreate"
    />
    <CatchUpTable :header="header" :data="data" />
    <Modal
      :show-modal="showModalCreate"
      title="Create catch up"
      icon="arrow-rotate-right"
      @close-modal="closeModalCreate"
    >
      <template #content>
        <CatchUpDetails :details="newCatchUp" />
      </template>
      <template #actions>
        <CatchUpDetailsAction @close-modal="closeModalCreate" />
      </template>
    </Modal>
  </main>
</template>
