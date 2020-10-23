const initialState = {
  email: '',
  number: '',
  first_name: '',
  last_name: '',
  tags: [],
  status: '',
  source: ''
};

const AudienceReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA:
      return {
        ...state
      };
    case UPDATE_DATA:
      return action.payload;
    default:
      return state;
  }
};

export default AudienceReducer;
