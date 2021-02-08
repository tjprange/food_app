import axios from 'axios';
import { apiKey } from '@env';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: `Bearer ${apiKey}`,
  },
});
