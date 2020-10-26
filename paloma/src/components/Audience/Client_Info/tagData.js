import { useQuery } from 'react-query';
import axios from 'axios';

async function getId(id) {
  let audienceId = await id;
  return audienceId;
}

function useTagData(props) {
  return useQuery('tag data', () => {
    return axios
      .get(`http://localhost:8500/api/tags/${props}`, {
        headers: {
          Authorization: localStorage.getItem('AUTH_TOKEN')
        }
      })
      .then(res => res.data)
      .catch(err => console.log('error', err.message));
  });
}

export default useTagData;
