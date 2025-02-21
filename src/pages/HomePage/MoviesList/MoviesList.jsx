import React from "react";
import { useSelector } from "react-redux";
import "./MoviesList.css";
import { NavLink } from "react-router-dom";
import { getGrade } from "../../../utilits";
import Loader from "../../../components/Loading/Loader";

const MoviesList = () => {
  const error = useSelector((state) => state.movies.error);
  const loading = useSelector((state) => state.movies.loading);
  const movies = useSelector((state) => state.movies.movies);
  const resultsMovies = movies.results;

  return (
    <ul className="movies">
      {loading && <Loader />}
      {error && (
        <div className="movies__error">
          <p className="movies__error-nothing-found">
            Возникла ошибка: {error}
          </p>
        </div>
      )}
      {resultsMovies &&
        resultsMovies.map((movie) => {
          const grade = Math.round(movie.vote_average * 10) / 10;
          const color = getGrade(grade);
          return (
            <NavLink to={`/movie-${movie.id}`} key={movie.id}>
              <div
                className="movies__movie"
                style={{
                  backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
                }}
              >
                <p className="movies__movie-title">{movie.original_title}</p>
                <div className="movies__movie-details-grade">
                  <div className="movies__movie-details">
                    <p>{movie.title},</p>
                    <p>{movie.release_date.slice(0, 4)},</p>
                    <p>{movie.original_language.toUpperCase()}</p>
                  </div>
                  <div className="movies__movie-grade">
                    <p
                      className="grade"
                      style={{ border: ` 2px solid ${color} ` }}
                    >
                      {grade}
                    </p>
                    <p className="movie-vote">{movie.vote_count}</p>
                  </div>
                </div>
              </div>
            </NavLink>
          );
        })}
    </ul>
  );
};

export default MoviesList;
