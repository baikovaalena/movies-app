import { useDispatch, useSelector } from "react-redux";
import { handeSortByParameters } from "../../../../redux/movies/moviesActions";
import "./SortParameters.css";

const SortParameters = () => {
  const dispatch = useDispatch();

  const sortBy = useSelector((state) => state.movies.sortBy);

  return (
    <div className="sort-options">
      <p className="sort-options__header">Sorting options</p>
      <div className="sort-options__vote">
        <label className="sort-options__vote-label">
          <input
            type="radio"
            name="options"
            className="sort-options__vote-input"
            value="vote_average.desc"
            checked={sortBy === "vote_average.desc"}
            onChange={() =>
              dispatch(handeSortByParameters("vote_average.desc"))
            }
          />
          Top-rated movies first
        </label>
        <label className="sort-options__vote-label">
          <input
            className="sort-options__vote-input"
            type="radio"
            name="options"
            value="vote_average.asc"
            onClick={() => dispatch(handeSortByParameters("vote_average.asc"))}
          />
          Low-rated movies first
        </label>
      </div>
      <div className="sort-options__popularity">
        <label className="sort-options__popularity-label">
          <input
            type="radio"
            className="sort-options__popularity-input"
            name="options"
            value="popularity.desc"
            checked={sortBy === "popularity.desc"}
            onChange={() => dispatch(handeSortByParameters("popularity.desc"))}
          />
          Most popular movies
        </label>
        <label className="sort-options__popularity-label">
          <input
            type="radio"
            className="sort-options__popularity-input"
            name="options"
            value="popularity.asc"
            onClick={() => dispatch(handeSortByParameters("popularity.asc"))}
          />
          Less popular movies
        </label>
      </div>
    </div>
  );
};

export default SortParameters;
