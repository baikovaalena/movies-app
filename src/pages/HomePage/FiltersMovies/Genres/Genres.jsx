import React, { useEffect } from "react";
import "./Genres.css";
import { chooseGenresList } from "../../../../redux/Movies/moviesActions";
import { useDispatch, useSelector } from "react-redux";
import { getGenresListThunk } from "../../../../redux/Movies/moviesThunks";

const Genres = () => {
  const dispatch = useDispatch();
  const genres = useSelector((state) => state.movies.genres);
  const selectedGenres = useSelector((state) => state.movies.selectedGenres);

  useEffect(() => {
    dispatch(getGenresListThunk());
  }, []);

  return (
    <>
      <h1 className="genres-header">Жанры</h1>
      <div className="genres">
        {genres.map((genre) => {
          const isSelected = selectedGenres.includes(genre.id);
          return (
            <button
              className={`genres-button ${isSelected ? "active" : ""}`}
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
