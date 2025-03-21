import {
  DETAILS_CREDITS_CAST,
  DETAILS_CREDITS_CREW,
  DETAILS_ERROR,
  DETAILS_LOADING,
  DETAILS_MOVIE,
} from "./detailsMovieTypes";

const initialState = {
  movieDetails: [],
  cast: [],
  crew: [],
  error: "",
  loading: false,
};

export const detailsMovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case DETAILS_MOVIE:
      return {
        ...state,
        movieDetails: action.payload,
      };
    case DETAILS_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case DETAILS_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case DETAILS_CREDITS_CAST:
      return {
        ...state,
        cast: action.payload,
      };
    case DETAILS_CREDITS_CREW:
      return {
        ...state,
        crew: action.payload,
      };
    default:
      return state;
  }
};
