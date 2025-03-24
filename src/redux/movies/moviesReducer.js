import {
  ERROR_FETCH_MOVIES,
  FETCH_MOVIES,
  SET_GENRES,
  SET_LOADER,
  SELECT_GENRE,
  SET_RELEASE_YEAR_START,
  SET_RELEASE_YEAR_END,
  SORT_BY_PARAMETERS,
  MOVIES_SET_PAGINATION,
  MOVIES_INIT,
} from "./moviesTypes";

const initialState = {
  movies: [],
  pagination: {
    page: 1,
    totalPage: 0,
    totalResults: 0,
  },
  genres: [],
  selectedGenres: [],
  error: "",
  endDate: "",
  startDate: "",
  sortBy: "",
  init: false,
  loading: false,
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
    case SET_RELEASE_YEAR_START:
      return {
        ...state,
        startDate: action.payload,
      };
    case SET_RELEASE_YEAR_END:
      return {
        ...state,
        endDate: action.payload,
      };
    case SORT_BY_PARAMETERS:
      return {
        ...state,
        sortBy: action.payload,
      };
    case MOVIES_SET_PAGINATION:
      return {
        ...state,
        pagination: {
          ...state.pagination,
          ...action.payload,
        },
      };
    case MOVIES_INIT:
      return {
        ...state,
        init: action.payload,
      };
    default:
      return state;
  }
};
