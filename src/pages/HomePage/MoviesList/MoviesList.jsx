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
  const isInitial = useSelector((state) => state.movies.init);

  useEffect(() => {
    if (!isInitial) {
      dispatch(getMoviesListThunk());
    }
  }, [isInitial]);

  if (loading) {
    return (
      <div className="movies__status">
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className="movies__status">
        <p className="movies__error">An error occurred: {error}</p>
      </div>
    );
  }

  return (
    <ul className="movies">
      {movies.map((movie) => {
        const isMovieLength =
          movie.original_title.length > 15
            ? movie.original_title.slice(0, 15) + "..."
            : movie.original_title;

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
              <div className="movies__movie-info">
                <p className="movies__movie-title">{isMovieLength}</p>
                <div
                  className="movies__movie-container-score"
                  style={{ border: ` 2px solid ${color} ` }}
                >
                  <p className="movies__movie-score">{grade}</p>
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
