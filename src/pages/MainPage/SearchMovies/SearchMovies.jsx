import React from "react";
import { getMoviesListThunk } from "../../../redux/Movies/moviesActions";
import { useDispatch, useSelector } from "react-redux";

const SearchMovies = () => {
  const selectedGenres = useSelector((state) => state.movies.selectedGenres);
  const endDate = useSelector((state) => state.movies.endDate);
  const startDate = useSelector((state) => state.movies.startDate);
  const dispatch = useDispatch();

  return (
    <button
      className="main__search-button"
      onClick={() =>
        dispatch(getMoviesListThunk(selectedGenres, endDate, startDate))
      }
    >
      Найти
    </button>
  );
};

export default SearchMovies;
