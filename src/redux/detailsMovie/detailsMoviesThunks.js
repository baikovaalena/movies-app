import {
  DETAILS_CREDITS_CAST,
  DETAILS_CREDITS_CREW,
  DETAILS_ERROR,
  DETAILS_LOADING,
  DETAILS_MOVIE,
} from "./detailsMovieTypes";
import { getDetails } from "../../api";

export const getDetailsMovie = (id) => {
  return async (dispatch) => {
    try {
      dispatch({ type: DETAILS_LOADING, payload: true });

      const data = await getDetails(id);

      dispatch({ type: DETAILS_MOVIE, payload: data });
      dispatch({ type: DETAILS_CREDITS_CAST, payload: data.credits.cast });
      dispatch({ type: DETAILS_CREDITS_CREW, payload: data.credits.crew });
    } catch (error) {
      dispatch({
        type: DETAILS_ERROR,
        payload: error.message,
      });
    } finally {
      dispatch({ type: DETAILS_LOADING, payload: false });
    }
  };
};
