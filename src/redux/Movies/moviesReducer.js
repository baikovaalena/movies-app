import {
  ERROR_FETCH_MOVIES,
  FETCH_MOVIES,
  SET_GENRES,
  SET_LOADER,
  SELECT_GENRES,
  RELEASE_YEAR_TO,
  RELEASE_YEAR_FROM,
} from "./moviesTypes";

const initialState = {
  movies: [],
  error: "",
  loading: false,
  genres: [],
  selectedGenres: [],
  startDate: "",
  endDate: "",
};

export const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES:
      return {
        ...state,
        movies: action.payload,
      };
    case ERROR_FETCH_MOVIES:
      return { ...state, error: action.payload };
    case SET_LOADER:
      return {
        ...state,
        loading: action.payload,
      };
    case SET_GENRES:
      return {
        ...state,
        genres: action.payload,
      };
    case SELECT_GENRES:
      return {
        ...state,
        selectedGenres: action.payload,
      };
    case RELEASE_YEAR_TO:
      return {
        ...state,
        endDate: action.payload,
      };
    case RELEASE_YEAR_FROM:
      return {
        ...state,
        startDate: action.payload,
      };
    default:
      return state;
  }
};
