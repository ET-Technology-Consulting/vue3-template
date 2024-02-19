<script setup lang="ts">
import { ref } from 'vue'
import { getProcessors, getProcessor } from '../api/processorApi'

import PageTitle from '../../../components/global/PageTitle.vue'
import Modal from '../../../components/global/Modal.vue'
import { humanFileSize } from '../../../utils/conversion';

import ProcessorTable from '../components/ProcessorTable.vue'
import ProcessorDetails from '../components/ProcessorDetails.vue'
import ProcessorDetailsAction from '../components/ProcessorDetailsAction.vue'

const header = ['ID', 'Active', 'API Url']
const data = ref(<any>{})
const activeDetails = ref(<any>{})
const showModal = ref(false)

;(async () => {
  const res = await getProcessors()
  data.value = res
})()

const showDetails = async (id: number) => {
  const res = await getProcessor(id)
  activeDetails.value = {
    id: id,
    data: res
  }
  console.log(activeDetails.value)
  showModal.value = true
}

const updateApp = async (id: number, app: string) => {
  console.log(id, app)
}

const closeModal = () => {
  showModal.value = false
}
</script>

<template>
  <main>
    <PageTitle title="Processors" description="Find all active processors" icon="microchip" />
    <ProcessorTable
      :header="header"
      :data="data?.data"
      @show-details="(id) => showDetails(id)"
      @update-app="(id, app) => updateApp(id, app)"
    />
    <Modal
      :show-modal="showModal"
      :title="`Processor ${activeDetails.id}`"
      icon="microchip"
      @close-modal="closeModal"
    >
      <template #content>
        <ProcessorDetails :details="activeDetails" />
      </template>
      <template #actions>
        <ProcessorDetailsAction @close-modal="closeModal" />
      </template>
    </Modal>
  </main>
</template>
