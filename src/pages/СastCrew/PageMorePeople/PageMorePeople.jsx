import { useDispatch, useSelector } from "react-redux";
import "./PageMorePeople.css";
import Cast from "./Cast/Cast";
import Crew from "./Crew/Crew";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDetailsMovie } from "../../../redux/detailsMovie/detailsMoviesThunks";

const PageMorePeople = () => {
  const dispatch = useDispatch();
  const detailsMovie = useSelector((state) => state.details.movieDetails);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getDetailsMovie(id));
  }, [id]);

  return (
    detailsMovie && (
      <>
        <div className="cast-crew__header-small">
          <button
            className="cast-crew__btn-back"
            onClick={() => window.history.back()}
          >
            ← Back
          </button>
          <img
            className="cast-crew__image"
            src={`https://image.tmdb.org/t/p/original${detailsMovie.poster_path}`}
            alt="poster"
          />
          <p className="cast-crew__movie-name">
            {detailsMovie.original_title} (
            {detailsMovie.release_date?.slice(0, 4)})
          </p>
        </div>

        <h1 className="cast-crew__title">Cast and crew</h1>

        <div className="cast-crew__container">
          <Cast />
          <Crew />
        </div>
      </>
    )
  );
};

export default PageMorePeople;
