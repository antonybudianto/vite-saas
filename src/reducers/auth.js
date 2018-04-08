const initialState = {
  user: null,
};

const UPDATE_AUTH = 'APP/UPDATE_AUTH';

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_AUTH: {
      return {
        ...state,
        user: action.payload,
      };
    }
    default:
      return state;
  }
};

export function updateAuth(user) {
  return {
    type: UPDATE_AUTH,
    payload: user,
  };
}

export default authReducer;
