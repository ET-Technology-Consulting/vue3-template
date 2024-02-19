import axios from 'axios'

export const getCatchUps = async () => {
  // const response = await axios.get('http://10.2.10.39:10102/v1/catch-ups');
  // return response.data;
  return [
    {
      id: 1,
      description: 'Catch up 1',
      buckets: ['cip_db_universal', 'ddex_universal'],
      medias: [1, 2, 3, 4, 5]
    },
    {
      id: 2,
      description: 'Catch up 2',
      buckets: ['cip_db_universal', 'cip_db_kaptain'],
      medias: [1, 2, 3, 4, 5]
    },
    {
      id: 3,
      description: 'Catch up 3',
      buckets: ['ddex_sony', 'cip_db_kaptain'],
      medias: [1, 2, 3, 4, 5]
    }
  ]
}

export const getCatchUp = async (id: number) => {
  // const response = await axios.get(`http://10.2.10.39:10102/v1/catch-ups/${id}`);
  // return response.data;
  return [
    { bucket_id: 1, bucket: 'Test', type: 'CIP' },
    { bucket_id: 2, bucket: 'Test 2', type: 'CIP' }
  ]
}
