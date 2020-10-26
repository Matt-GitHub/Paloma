import { useQuery } from 'react-query';
import axios from 'axios';

function useAudienceData() {
  return useQuery('audience data', () => {
    // await new Promise(resolve => setTimeout(resolve, 4000));
    return axios
      .get(`http://localhost:8500/api/audience`, {
        headers: {
          Authorization: localStorage.getItem('AUTH_TOKEN')
        }
      })
      .then(res => res.data)
      .catch(err => console.log('error', err.message));
  });
}

export default useAudienceData;
