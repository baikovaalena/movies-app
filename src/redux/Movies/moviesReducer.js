import { ERROR_FETCH_MOVIES, FETCH_MOVIES, SET_LOADER } from "./moviesTypes";

const initialState = {
  movie: [],
  error: "",
  loading: false,
};

export const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES:
      return {
        ...state,
        movie: action.payload,
      };
    case ERROR_FETCH_MOVIES:
      return { ...state.error, error: action.payload };
    case SET_LOADER:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};
