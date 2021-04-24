import { applyMiddleware, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import { countriesReducer } from "./countries";
import { singleReducer } from "./single";

const rootReducer = combineReducers({
  countries: countriesReducer,
  single: singleReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));
