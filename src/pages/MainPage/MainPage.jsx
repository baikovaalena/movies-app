import React, { useEffect } from "react";
import Header from "../../components/Header/Header";
import "./MainPage.css";
import { useDispatch, useSelector } from "react-redux";
import { getMoviesListThunk } from "../../redux/Movies/moviesActions";
import MoviesList from "./MoviesList/MoviesList";

const MainPage = () => {
  const dispatch = useDispatch();
  const dataMovies = useSelector((state) => state.movies.movie);

  return (
    <>
      <Header />
      <main className="main">
        <h1 className="main__header">Найди свой любимый фильм</h1>
        <div className="main__input-container">
          <input
            type="text"
            placeholder="Искать фильмы..."
            className="main__search-input"
          />
          <button
            className="main__search-button"
            onClick={() => dispatch(getMoviesListThunk())}
          >
            Найти
          </button>
        </div>
        {dataMovies && <MoviesList dataMovies={dataMovies} />}
      </main>
    </>
  );
};

export default MainPage;
