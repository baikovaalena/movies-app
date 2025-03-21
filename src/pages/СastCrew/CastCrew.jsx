import React from "react";
import { useSelector } from "react-redux";
import "./CastCrew.css";
import { NavLink, useParams } from "react-router-dom";

const CastCrew = () => {
  const { id } = useParams();
  const cast = useSelector((state) => state.details.cast);
  const actors = cast?.slice(0, 8);

  return (
    <>
      {actors && (
        <div className="cast">
          <h1 className="cast__title">Cast</h1>
          <div className="cast__details">
            <ul className="cast__list">
              {actors.map((actor) => {
                return (
                  <li key={actor.id} className="cast__item">
                    <div className="cast__actor">
                      <img
                        src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                        alt="photo actor"
                      />
                      <p className="cast__name">{actor.name}</p>
                      <p className="cast__character">{actor.character}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
            <NavLink to={`/movie/${id}/credits`} className="cast__more">
              More
            </NavLink>
          </div>
        </div>
      )}
    </>
  );
};

export default CastCrew;
