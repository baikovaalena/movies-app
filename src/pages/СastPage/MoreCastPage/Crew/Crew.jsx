import { useSelector } from "react-redux";
import "../CastAndCrew.css";

const Crew = () => {
  const crew = useSelector((state) => state.details.crew);

  return (
    <div className="crew__container">
      <p className="crew__title">Crew</p>

      <ul className="crew__list">
        {crew?.length > 0 &&
          crew.slice(0, 30).map((people) => {
            const key = crew.indexOf(people);
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
                  <p className="crew__job">{people.job}</p>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Crew;
