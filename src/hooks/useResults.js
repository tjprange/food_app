import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async (searchTerm) => {
    try {
      // concatenate baseURL from yelp.js with /search
      const response = await yelp.get('/search', {
        // append params to request URL ie /search?limit=50
        params: {
          limit: 50,
          term: searchTerm,
          location: 'Reno',
        },
      });
      setResults(response.data.businesses);
    } catch (error) {
      setErrorMessage('Something went wrong');
    }
  };

  useEffect(() => {
    searchApi('pasta');
  }, []);

  return [searchApi, results, errorMessage];
};
