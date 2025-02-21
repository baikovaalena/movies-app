import {
  ERROR_FETCH_MOVIES,
  FETCH_MOVIES,
  SET_GENRES,
  SET_LOADER,
  SELECT_GENRE,
  SET_RELEASE_YEAR_TO,
  SET_RELEASE_YEAR_FROM,
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
    case SELECT_GENRE:
      return {
        ...state,
        selectedGenres: state.selectedGenres.includes(action.payload)
          ? state.selectedGenres.filter((genre) => genre !== action.payload)
          : [...state.selectedGenres, action.payload],
      };
    case SET_RELEASE_YEAR_TO:
      return {
        ...state,
        endDate: action.payload,
      };
    case SET_RELEASE_YEAR_FROM:
      return {
        ...state,
        startDate: action.payload,
      };
    default:
      return state;
  }
};
