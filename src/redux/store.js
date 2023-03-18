import { createStore, combineReducers } from "redux";
import globalReducer from "./reducers/globalReducer";
import startViewReducer from "./reducers/startViewReducer";

const store = createStore(
  combineReducers({ globalReducer, startViewReducer }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
