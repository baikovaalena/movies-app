import {
  SET_RELEASE_YEAR_END,
  SET_RELEASE_YEAR_START,
  SELECT_GENRE,
  SORT_BY_PARAMETERS,
} from "./moviesTypes";

export const chooseGenresList = (genreId) => ({
  type: SELECT_GENRE,
  payload: genreId,
});

export const releaseDateEnd = (yearEnd) => {
  return {
    type: SET_RELEASE_YEAR_END,
    payload: yearEnd,
  };
};

export const releaseDateStart = (yearStart) => {
  return {
    type: SET_RELEASE_YEAR_START,
    payload: yearStart,
  };
};

export const handeSortByParameters = (string) => {
  return {
    type: SORT_BY_PARAMETERS,
    payload: string,
  };
};
