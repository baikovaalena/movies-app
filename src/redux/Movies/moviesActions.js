import { ERROR_FETCH_MOVIES, FETCH_MOVIES, SET_LOADER } from "./moviesTypes";
import { getMoviesList } from "../../api";

export const getMoviesListThunk = () => {
  return async (dispatch) => {
    dispatch({
      type: ERROR_FETCH_MOVIES,
      payload: "",
    });

    try {
      dispatch({ type: SET_LOADER, payload: true });

      const data = await getMoviesList();

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
