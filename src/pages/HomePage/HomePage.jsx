import "./HomePage.css";
import MoviesList from "./MoviesList/MoviesList";
import Filters from "./Filters/Filters";

const HomePage = () => {
  return (
    <main className="home">
      <Filters />
      <MoviesList />
    </main>
  );
};

export default HomePage;
