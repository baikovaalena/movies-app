import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { thunk } from "redux-thunk";
import { moviesReducer } from "./movies/moviesReducer";
import { detailsMovieReducer } from "./detailsMovie/detailsMovieReducer";

export const rootReducer = combineReducers({
  movies: moviesReducer,
  details: detailsMovieReducer,
});

// const REDUX__DEVTOOLS =
//   (window?.__REDUX_DEVTOOLS_EXTENSION__ &&
//     window?.__REDUX_DEVTOOLS_EXTENSION__()) ||
//   compose();
// export const store = createStore(
//   rootReducer,
//   applyMiddleware(thunk),
//   REDUX__DEVTOOLS,
// );

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk)),
);
