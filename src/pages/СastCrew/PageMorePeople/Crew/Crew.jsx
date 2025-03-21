import { useSelector } from "react-redux";

const Crew = () => {
  const crew = useSelector((state) => state.details.crew);

  return (
    <div className="crew-more__container">
      <p className="crew-more__title">Crew</p>

      <ul className="crew-more__list">
        {crew &&
          crew.slice(0, 30).map((people) => {
            const key = crew.indexOf(people);
            return (
              <li key={key} className="crew-more__item">
                <img
                  src={
                    people.profile_path === null
                      ? `https://picsum.photos/seed/picsum/200/300/?blur`
                      : `https://image.tmdb.org/t/p/w200${people.profile_path}`
                  }
                  alt="photo actor"
                />
                <div className="crew-more__name-character">
                  <p className="crew-more__name">{people.name}</p>
                  <p className="crew-more__job">{people.job}</p>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Crew;
