import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetailsMovie } from "../../redux/detailsMovie/detailsMoviesThunks";
import { useParams } from "react-router-dom";
import "./DetailsPage.css";
import Details from "./Details/Details";
import CastCrew from "../СastCrew/CastCrew";
import Loader from "../../components/Loader/Loader";

const DetailsPage = () => {
  const { id } = useParams();
  const detailsMovie = useSelector((state) => state.details.movieDetails);
  const loader = useSelector((state) => state.details.loading);
  const error = useSelector((state) => state.details.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetailsMovie(id));
  }, [id]);

  return (
    <>
      {!detailsMovie && (
        <div className="details-page__status">
          {loader && <Loader />}
          {error && <p>{error}</p>}
        </div>
      )}

      {!loader && !error && detailsMovie && (
        <>
          <Details />
          <CastCrew />
        </>
      )}
    </>
  );
};

export default DetailsPage;
