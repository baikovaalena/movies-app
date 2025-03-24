import React from "react";
import { useSelector } from "react-redux";
import "./CastPage.css";
import { NavLink, useParams } from "react-router-dom";

const CastPage = () => {
  const { id } = useParams();
  const cast = useSelector((state) => state.details.cast);
  const actors = cast?.slice(0, 8);

  return (
    <>
      {actors && (
        <div className="actors">
          <h1 className="actors__title">Cast</h1>
          <div className="actors__details">
            <ul className="actors__list">
              {actors.map((actor) => (
                <li key={actor.id} className="actors__item">
                  <div className="actors__info">
                    <img
                      src={`https://image.tmdb.org/t/p/w400${actor.profile_path}`}
                      alt={actor.name}
                    />
                    <p className="actors__name">{actor.name}</p>
                    <p className="actors__character">{actor.character}</p>
                  </div>
                </li>
              ))}
            </ul>
            <NavLink to={`/movie/${id}/credits`} className="actors__more">
              More
            </NavLink>
          </div>
        </div>
      )}
    </>
  );
};

export default CastPage;
