import Header from "../../components/Header/Header";
import "./HomePage.css";
import MoviesList from "./MoviesList/MoviesList";
import FiltersMovies from "./FiltersMovies/FiltersMovies";

const HomePage = () => {
  return (
    <>
      <Header />
      <main className="main">
        <div className="main__body">
          <FiltersMovies />
          <MoviesList />
        </div>
      </main>
    </>
  );
};

export default HomePage;
