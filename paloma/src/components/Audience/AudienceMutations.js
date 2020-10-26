import { useMutation, queryCache } from 'react-query';
import Axios from 'axios';

const [createAudience, createAudienceInfo] = useMutation(values => {
  return (
    Axios.post(
      `http://localhost:8500/api/audience/${localStorage.getItem('USER_ID')}`,
      values,
      {
        headers: {
          Authorization: localStorage.getItem('AUTH_TOKEN')
        }
      }
    ),
    {
      onSuccess: () => {
        queryCache.invalidateQueries('audience data');
      }
    }
  );
});
