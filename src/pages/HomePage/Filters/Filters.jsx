import "./Filters.css";
import Genres from "./Genres/Genres";
import DateFilter from "./DateFilter/DateFilter";
import SortParameters from "./SortParameters/SortParameters";
import { useDispatch } from "react-redux";
import { getMoviesListThunk } from "../../../redux/movies/moviesThunks";

const Filters = () => {
  const dispatch = useDispatch();

  return (
    <div className="filters__container">
      <Genres />
      <DateFilter />
      <SortParameters />

      <button
        className="filters__search-btn"
        onClick={() => dispatch(getMoviesListThunk())}
      >
        Search
      </button>
    </div>
  );
};

export default Filters;
