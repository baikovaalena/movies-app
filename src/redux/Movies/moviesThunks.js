import {
  ERROR_FETCH_MOVIES,
  FETCH_MOVIES,
  SET_GENRES,
  SET_LOADER,
} from "./moviesTypes";
import { getGenres, getMoviesList } from "../../api";

export const getMoviesListThunk = () => {
  return async (dispatch, getState) => {
    dispatch({
      type: ERROR_FETCH_MOVIES,
      payload: "",
    });

    try {
      const { selectedGenres, startDate, endDate } = getState().movies;

      dispatch({ type: SET_LOADER, payload: true });

      const data = await getMoviesList(selectedGenres, startDate, endDate);

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
