import React from "react";
import "./DateFilter.css";
import { useDispatch, useSelector } from "react-redux";
import {
  releaseDateEnd,
  releaseDateStart,
} from "../../../../redux/movies/moviesActions";

const DateFilter = () => {
  const dispatch = useDispatch();
  const endDate = useSelector((state) => state.movies.endDate);
  const startDate = useSelector((state) => state.movies.startDate);

  return (
    <div className="date-filter__container">
      <label htmlFor="start">Start:</label>
      <input
        type="date"
        id="start"
        name="start"
        min="1900-01-01"
        max="2025-12-31"
        value={startDate}
        onChange={(e) => dispatch(releaseDateStart(e.target.value))}
      />

      <label htmlFor="end">End:</label>
      <input
        type="date"
        id="end"
        name="end"
        min="1900-01-01"
        max="2025-12-31"
        value={endDate}
        onChange={(e) => dispatch(releaseDateEnd(e.target.value))}
      />
    </div>
  );
};

export default DateFilter;
