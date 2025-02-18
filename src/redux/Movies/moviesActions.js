import {
  ERROR_FETCH_MOVIES,
  FETCH_MOVIES,
  RELEASE_YEAR,
  RELEASE_YEAR_FROM,
  RELEASE_YEAR_TO,
  SELECT_GENRES,
  SET_GENRES,
  SET_LOADER,
} from "./moviesTypes";
import { getGenres, getMoviesList } from "../../api";

export const getMoviesListThunk = (
  selectedGenres,
  releaseYearFromDate,
  releaseYearToDate,
) => {
  return async (dispatch) => {
    dispatch({
      type: ERROR_FETCH_MOVIES,
      payload: "",
    });

    try {
      dispatch({ type: SET_LOADER, payload: true });

      const data = await getMoviesList(
        selectedGenres,
        releaseYearFromDate,
        releaseYearToDate,
      );

      dispatch({ type: FETCH_MOVIES, payload: data });
    } catch (error) {
      dispatch({
        type: ERROR_FETCH_MOVIES,
        payload: error.message,
      });
    } finally {
      dispatch({ type: SET_LOADER, payload: false });
    }
  };
};

export const getGenresListThunk = () => {
  return async (dispatch) => {
    try {
      const data = await getGenres();

      dispatch({ type: SET_GENRES, payload: data });
    } catch (error) {
      dispatch({
        type: ERROR_FETCH_MOVIES,
        payload: error.message,
      });
    }
  };
};

export const chooseGenresList = (genreId) => (dispatch, getState) => {
  const { selectedGenres } = getState().movies;
  const updatedGenresList = selectedGenres.includes(genreId)
    ? selectedGenres.filter((genre) => genre !== genreId)
    : [...selectedGenres, genreId];

  dispatch({ type: SELECT_GENRES, payload: updatedGenresList });
};

export const releaseDateStart = (yearStart) => (dispatch) => {
  dispatch({
    type: RELEASE_YEAR_FROM,
    payload: yearStart,
  });
};

export const releaseDateEnd = (yearEnd) => (dispatch) => {
  dispatch({
    type: RELEASE_YEAR_TO,
    payload: yearEnd,
  });
};
