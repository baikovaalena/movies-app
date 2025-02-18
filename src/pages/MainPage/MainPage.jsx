import Header from "../../components/Header/Header";
import "./MainPage.css";
import MoviesList from "./MoviesList/MoviesList";
import { useSelector } from "react-redux";
import FiltersMovies from "./FiltersMovies/FiltersMovies";

const MainPage = () => {
  const movies = useSelector((state) => state.movies.movies);

  return (
    <>
      <Header />
      <main className="main">
        <div className="main__body">
          <FiltersMovies />
          {movies && <MoviesList dataMovies={movies} />}
        </div>
      </main>
    </>
  );
};

export default MainPage;
