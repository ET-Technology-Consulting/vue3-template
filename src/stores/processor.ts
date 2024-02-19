import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useProcessorStore = defineStore('processor', () => {
  const processors = ref(<any[]>[])
  function getProcesors() {
    processors.value = [
      { id: 1, name: 'processor 1' },
      { id: 2, name: 'processor 2' }
    ]
    console.log('STOOOORE', processors.value)
  }

  return {
    processors,
    getProcesors
  }
})
