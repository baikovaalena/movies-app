import { useSelector } from "react-redux";

const Cast = () => {
  const cast = useSelector((state) => state.details.cast);
  return (
    <>
      {cast && (
        <div className="cast-more__container">
          <p className="cast-more__title">Cast</p>

          <ul className="cast-more__list">
            {cast.slice(0, 30).map((people) => {
              const key = cast.indexOf(people);
              return (
                <li key={key} className="cast-more__item">
                  <img
                    src={
                      people.profile_path === null
                        ? `https://picsum.photos/seed/picsum/200/300/?blur`
                        : `https://image.tmdb.org/t/p/w200${people.profile_path}`
                    }
                    alt="photo actor"
                  />
                  <div className="cast-more__name-character">
                    <p className="cast-more__name">{people.name}</p>
                    <p className="cast-more__character">{people.character}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
};

export default Cast;
