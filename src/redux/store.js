import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { thunk } from "redux-thunk";
import { moviesReducer } from "./Movies/moviesReducer";

const REDUX__DEVTOOLS =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
export const rootReducer = combineReducers({
  movies: moviesReducer,
});

export const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk), REDUX__DEVTOOLS),
);
