import { useDispatch, useSelector } from "react-redux";
import "./MoreCastPage.css";
import Cast from "./Cast/Cast";
import Crew from "./Crew/Crew";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDetailsMovie } from "../../../redux/detailsMovie/detailsMoviesThunks";

const MoreCastPage = () => {
  const dispatch = useDispatch();
  const detailsMovie = useSelector((state) => state.details.movieDetails);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getDetailsMovie(id));
  }, [id]);

  return (
    detailsMovie && (
      <>
        <div className="more__header-small">
          <button
            className="more__btn-back"
            onClick={() => window.history.back()}
          >
            ← Back
          </button>
          <img
            className="more__img"
            src={`https://image.tmdb.org/t/p/original${detailsMovie.poster_path}`}
            alt="poster"
          />
          <p className="more__movie-name">
            {detailsMovie.original_title} (
            {detailsMovie.release_date?.slice(0, 4)})
          </p>
        </div>

        <h1 className="more__title">Cast and crew</h1>

        <div className="more__container">
          <Cast />
          <Crew />
        </div>
      </>
    )
  );
};

export default MoreCastPage;
