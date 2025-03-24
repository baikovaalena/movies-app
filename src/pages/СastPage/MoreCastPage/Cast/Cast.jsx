import { useSelector } from "react-redux";
import "../CastAndCrew.css";

const Cast = () => {
  const cast = useSelector((state) => state.details.cast);
  console.log(cast);
  return (
    <div className="crew__container">
      <p className="crew__title">Cast</p>

      <ul className="crew__list">
        {cast?.length > 0 &&
          cast.slice(0, 30).map((people) => {
            const key = cast.indexOf(people);
            return (
              <li key={key} className="crew__item">
                <img
                  src={
                    people.profile_path === null
                      ? `https://picsum.photos/seed/picsum/200/300/?blur`
                      : `https://image.tmdb.org/t/p/w300${people.profile_path}`
                  }
                  alt="photo actor"
                />
                <div className="crew__name-character">
                  <p className="crew__name">{people.name}</p>
                  <p className="crew__job">{people.character}</p>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Cast;
