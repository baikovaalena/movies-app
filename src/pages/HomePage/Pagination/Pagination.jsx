import { useDispatch, useSelector } from "react-redux";
import { getMoviesListThunk } from "../../../redux/movies/moviesThunks";
import "./Pagination.css";

const Pagination = () => {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.movies.pagination.page);
  const totalPage = useSelector((state) => state.movies.pagination.totalPage);

  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const pageBtn = [];
  for (let i = page; i <= totalPage; i++) {
    pageBtn.push(i);
  }

  return (
    <div className="pagination">
      {page > 1 && (
        <button
          className="pagination__btn-back"
          onClick={() => {
            dispatch(getMoviesListThunk(page - 1));
            handleScroll();
          }}
        >
          ← {page - 1}
        </button>
      )}
      {page < totalPage && (
        <button
          className="pagination__btn-forward"
          onClick={() => {
            dispatch(getMoviesListThunk(page + 1));
            handleScroll();
          }}
        >
          → {page + 1}
        </button>
      )}
    </div>
  );
};
export default Pagination;
