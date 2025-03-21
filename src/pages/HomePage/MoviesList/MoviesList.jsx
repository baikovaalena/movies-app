import { useDispatch, useSelector } from "react-redux";
import "./MoviesList.css";
import { NavLink } from "react-router-dom";
import { getColor } from "../../../utils/getColor";
import Loader from "../../../components/Loader/Loader";
import { getGrades } from "../../../utils/getGrade";
import { useEffect } from "react";
import { getMoviesListThunk } from "../../../redux/movies/moviesThunks";

const MoviesList = () => {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.movies.error);
  const loading = useSelector((state) => state.movies.loading);
  const movies = useSelector((state) => state.movies.movies);
  const resultsMovies = movies.results;

  useEffect(() => {
    dispatch(getMoviesListThunk());
  }, []);

  return (
    <ul className="movies">
      {loading && <Loader />}
      {error && (
        <div className="movies__error">
          <p className="movies__error-nothing-found">
            An error occurred: {error}
          </p>
        </div>
      )}

      {resultsMovies &&
        resultsMovies.map((movie) => {
          const grade = getGrades(movie.vote_average);
          const color = getColor(grade);

          return (
            <NavLink to={`/movie/${movie.id}`} key={movie.id}>
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
