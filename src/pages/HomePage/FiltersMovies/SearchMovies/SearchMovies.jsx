import React from "react";
import { useDispatch } from "react-redux";
import { getMoviesListThunk } from "../../../../redux/Movies/moviesThunks";

const SearchMovies = () => {
  const dispatch = useDispatch();

  return (
    <button
      className="main__search-button"
      onClick={() => dispatch(getMoviesListThunk())}
    >
      Найти
    </button>
  );
};

export default SearchMovies;
