const initial = [];
export const countriesReducer = (state = initial, action) => {
  switch (action.type) {
    case "SET_COUNTRIES":
      return action.payload;

    default:
      return state;
  }
};
