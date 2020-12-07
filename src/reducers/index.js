const initialState = {
  users: [],
};

export default function userstate(state = initialState, action) {
  switch (action.type) {
    case 'GET_EMPLOYEE_SUCCESS':
      return { ...state, users: action.payload };

    default:
      return state;
  }
}
