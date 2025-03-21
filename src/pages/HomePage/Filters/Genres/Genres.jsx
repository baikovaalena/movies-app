import React, { useEffect } from "react";
import "./Genres.css";
import { chooseGenresList } from "../../../../redux/movies/moviesActions";
import { useDispatch, useSelector } from "react-redux";
import { getGenresListThunk } from "../../../../redux/movies/moviesThunks";

const Genres = () => {
  const dispatch = useDispatch();
  const genres = useSelector((state) => state.movies.genres);
  const selectedGenres = useSelector((state) => state.movies.selectedGenres);

  useEffect(() => {
    dispatch(getGenresListThunk());
  }, []);

  return (
    <>
      <p className="genres__header">Genres</p>
      <div className="genres__container">
        {genres.map((genre) => {
          const isSelected = selectedGenres.includes(genre.id);
          return (
            <button
              className={`genres__btn ${isSelected ? "active" : ""}`}
              key={genre.id}
              onClick={() => dispatch(chooseGenresList(genre.id))}
            >
              {genre.name}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default Genres;
