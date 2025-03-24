import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetailsMovie } from "../../redux/detailsMovie/detailsMoviesThunks";
import { useParams } from "react-router-dom";
import "./DetailsPage.css";
import Details from "./Details/Details";
import CastPage from "../СastPage/CastPage";
import Loader from "../../components/Loader/Loader";

const DetailsPage = () => {
  const { id } = useParams();
  const loader = useSelector((state) => state.details.loading);
  const error = useSelector((state) => state.details.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetailsMovie(id));
  }, [id]);

  if (loader) {
    return (
      <div className="details-page__status">
        <Loader />
      </div>
    );
  }
  if (error) {
    return (
      <div className="details-page__status">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <>
      <Details />
      <CastPage />
    </>
  );
};

export default DetailsPage;
