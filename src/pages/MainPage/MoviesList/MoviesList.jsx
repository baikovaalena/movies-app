import React from "react";
import { useSelector } from "react-redux";
import Loading from "../../../components/Loading/Loading";
import "./MoviesList.css";

const MoviesList = (dataMovies) => {
  const loading = useSelector((state) => state.movies.loading);
  const moviesCard = dataMovies.dataMovies.results;

  const getGrade = (grade) => {
    switch (true) {
      case grade >= 8.5:
        return "#007BFF";
      case grade >= 7.0:
        return "#28A745";
      case grade >= 5.0:
        return "#FFC107";
      default:
        return "#DC3545";
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="movies">
      {moviesCard &&
        moviesCard.map((movie) => {
          const grade = Math.round(movie.vote_average * 10) / 10;
          const color = getGrade(grade);
          return (
            <div key={movie.id} className="movies__movie">
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

              <img
                src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                alt="image poster movie"
                className="movies__movie__poster"
              />
            </div>
          );
        })}
    </div>
  );
};

export default MoviesList;
