export const initState = {
  payload: "",
};

export const actionTypes = {
  SET_SEARCH_PAYLOAD: "SET_SEARCH_PAYLOAD",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_SEARCH_PAYLOAD:
      return {
        ...state,
        payload: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
