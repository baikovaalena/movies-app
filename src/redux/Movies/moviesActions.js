import {
  SET_RELEASE_YEAR_FROM,
  SET_RELEASE_YEAR_TO,
  SELECT_GENRE,
} from "./moviesTypes";

export const chooseGenresList = (genreId) => ({
  type: SELECT_GENRE,
  payload: genreId,
});

export const releaseDateStart = (yearStart) => {
  return {
    type: SET_RELEASE_YEAR_FROM,
    payload: yearStart,
  };
};

export const releaseDateEnd = (yearEnd) => {
  return {
    type: SET_RELEASE_YEAR_TO,
    payload: yearEnd,
  };
};
