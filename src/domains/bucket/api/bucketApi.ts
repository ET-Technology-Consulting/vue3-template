import axios from 'axios'

export const getBuckets = async () => {
  const response = await axios.get('http://10.2.10.39/v1/buckets')
  return response.data
}

export const getBucket = async (id: number) => {
  // const response = await axios.get(`http://10.2.10.39:10102/v1/buckets/${id}`);
  // return response.data;
  return [
    { bucket_id: 1, bucket: 'Test', type: 'CIP' },
    { bucket_id: 2, bucket: 'Test 2', type: 'CIP' }
  ]
}
