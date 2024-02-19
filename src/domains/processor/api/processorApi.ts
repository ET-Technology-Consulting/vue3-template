import axios from 'axios'

export const getProcessors = async () => {
  const response = await axios.get('http://10.2.10.39/v1/processors')
  return response.data
}

export const getProcessor = async (id: number) => {
  const response = await axios.get(`http://10.2.10.39/v1/processors/${id}`)
  return response.data
}
