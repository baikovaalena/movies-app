import React from "react";
import Loader from "../../../components/Loader/Loader";
import { useSelector } from "react-redux";
import { getColor } from "../../../utils/getColor";
import { getGrades } from "../../../utils/getGrade";

const Details = () => {
  const detailsMovie = useSelector((state) => state.details.movieDetails);

  const error = useSelector((state) => state.details.detailsError);
  const loading = useSelector((state) => state.details.detailsLoading);

  const { genres } = detailsMovie;

  const grade = getGrades(detailsMovie.vote_average);
  const color = getColor(grade);

  return (
    <>
      {loading && error && (
        <div className="movies__status-сontainer">
          {loading && <Loader />}
          {error && <p>{error}</p>}
        </div>
      )}
      {!loading && detailsMovie && (
        <div
          className="movie-details__background"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${detailsMovie.backdrop_path})`,
          }}
        >
          <div className="movie-details">
            <img
              className="movie-details__poster"
              src={`https://image.tmdb.org/t/p/w500${detailsMovie.poster_path}`}
              alt={detailsMovie.title}
            />
            <div className="movie-details__info">
              <div className="movie-info__title">
                <h1>{detailsMovie.title}</h1>
                <p
                  className="grade"
                  style={{
                    border: color ? `2px solid ${color}` : "2px solid gray",
                  }}
                >
                  {isNaN(grade) ? "" : grade}
                </p>
              </div>
              <div className="movie-details__release-info">
                <div className="movie-details__release-genres-runtime">
                  <p>{detailsMovie.release_date}</p>
                  <p>
                    {detailsMovie.original_language &&
                      detailsMovie.original_language.toUpperCase()}
                  </p>
                  <ul className="movie-details__genres">
                    {genres &&
                      genres.map((genre) => {
                        return <li key={genre.id}>{genre.name}</li>;
                      })}
                  </ul>
                  <p>{detailsMovie.runtime} minutes</p>
                </div>
              </div>
              <div className="movie-details__reviews">
                <p className="tagline">«{detailsMovie.tagline}»</p>
                <p className="overview">{detailsMovie.overview}</p>
              </div>

              <p className="movie-details__production-companies-header">
                Production companies
              </p>
              <ul className="movie-details__production-companies">
                {detailsMovie.production_companies &&
                  detailsMovie.production_companies.map((companies) => {
                    return (
                      <li
                        className="movie-details__production-companies-name"
                        key={companies.id}
                      >
                        {companies.name}
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Details;
