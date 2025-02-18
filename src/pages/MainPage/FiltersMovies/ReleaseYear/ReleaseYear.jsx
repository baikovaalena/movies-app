import React from "react";
import "./ReleaseYear.css";
import { useDispatch, useSelector } from "react-redux";
import {
  releaseDateStart,
  releaseDateEnd,
} from "../../../../redux/Movies/moviesActions";

const ReleaseYear = () => {
  const dispatch = useDispatch();
  const endDate = useSelector((state) => state.movies.endDate);
  const startDate = useSelector((state) => state.movies.startDate);

  return (
    <div className="release-year">
      <p>Даты выхода:</p>
      <label htmlFor="start">Начало:</label>
      <input
        type="date"
        id="start"
        name="start"
        min="1900-01-01"
        max="2025-12-31"
        value={startDate}
        onChange={(e) => dispatch(releaseDateStart(e.target.value))}
      />

      <label htmlFor="end">Конец:</label>
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

export default ReleaseYear;
