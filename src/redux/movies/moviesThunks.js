import {
  ERROR_FETCH_MOVIES,
  FETCH_MOVIES,
  MOVIES_INIT,
  MOVIES_SET_PAGINATION,
  SET_GENRES,
  SET_LOADER,
} from "./moviesTypes";
import { getGenres, getMoviesList } from "../../api";

export const getMoviesListThunk = (page) => {
  return async (dispatch, getState) => {
    dispatch({
      type: ERROR_FETCH_MOVIES,
      payload: "",
    });

    try {
      const { selectedGenres, startDate, endDate, sortBy } = getState().movies;

      dispatch({ type: SET_LOADER, payload: true });

      const data = await getMoviesList(
        selectedGenres,
        startDate,
        endDate,
        sortBy,
        page,
      );

      dispatch({ type: FETCH_MOVIES, payload: data.results });
      dispatch({ type: MOVIES_INIT, payload: true });

      dispatch({
        type: MOVIES_SET_PAGINATION,
        payload: {
          page: data.page,
          totalPage: data.total_pages,
          totalResults: data.total_results,
        },
      });
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
