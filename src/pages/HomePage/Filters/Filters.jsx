import "./Filters.css";
import Genres from "./Genres/Genres";
import DateFilter from "./DateFilter/DateFilter";
import SortParameters from "./SortParameters/SortParameters";
import { useDispatch } from "react-redux";
import { getMoviesListThunk } from "../../../redux/movies/moviesThunks";
import React from "react";

const Filters = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = React.useState(false);

  const handleOpenBtn = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="filters">
      <button onClick={handleOpenBtn} className="filters__open-btn">
        {isOpen ? "Close filters" : "Open filters"}
      </button>

      {isOpen && (
        <>
          <div className="filters__container">
            <Genres />
            <DateFilter />
            <SortParameters />
          </div>
          <button
            className="filters__search-btn"
            onClick={() => dispatch(getMoviesListThunk())}
          >
            Search
          </button>
        </>
      )}
    </div>
  );
};

export default Filters;
