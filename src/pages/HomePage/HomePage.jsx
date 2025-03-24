import "./HomePage.css";
import MoviesList from "./MoviesList/MoviesList";
import Filters from "./Filters/Filters";
import Pagination from "./Pagination/Pagination";

const HomePage = () => {
  return (
    <div className="body">
      <main className="body__home">
        <Filters />
        <MoviesList />
      </main>
      <div className="body__pagination">
        <Pagination />
      </div>
    </div>
  );
};

export default HomePage;
