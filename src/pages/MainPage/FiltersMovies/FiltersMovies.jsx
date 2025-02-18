import "./FiltersMovies.css";
import Genres from "./Genres/Genres";
import ReleaseYear from "./ReleaseYear/ReleaseYear";
import SearchMovies from "../SearchMovies/SearchMovies";

const FiltersMovies = () => {
  return (
    <div className="filters-movies-container">
      <div className="filters-container">
        <h1 className="filters-container__header">Найди свой любимый фильм</h1>
        <Genres />
        <ReleaseYear />
        <SearchMovies />
      </div>
    </div>
  );
};

export default FiltersMovies;
