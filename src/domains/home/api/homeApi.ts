import axios from 'axios';
import type { CatFact } from './types';

export const getCatFacts = async () => {
  const response = await axios.get('https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=5');
  return response.data;
};