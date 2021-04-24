const initial = null;
export const singleReducer = (state = initial, action) => {
  switch (action.type) {
    case "SET_SINGLE":
      return action.payload;

    default:
      return state;
  }
};
