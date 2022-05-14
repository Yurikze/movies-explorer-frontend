import { useEffect, useState } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import './Movies.css';

const Movies = ({ onSearch, movies, isLoading, error }) => {
  const [screenWidth, setScreenWidth] = useState(window.screen.width);
  const [gridCols, setGridCols] = useState(null);
  const [shownMovies, setShownMovies] = useState([]);
  const [limitMovies, setLimitMovies] = useState(null);
  const [cacheMovies, setCacheMovies] = useState([]);

  useEffect(() => {
    localStorage.getItem('filteredMovies') &&
      setCacheMovies(JSON.parse(localStorage.getItem('filteredMovies')));
  }, []);

  useEffect(() => {
    let rtime;
    let timeout = false;
    let delta = 200;

    window.addEventListener('resize', () => {
      rtime = new Date();
      if (timeout === false) {
        timeout = true;
        setTimeout(resizeAction, delta);
      }
    });

    const resizeAction = () => {
      if (new Date() - rtime < delta) {
        setTimeout(resizeAction, delta);
      } else {
        timeout = false;
        setScreenWidth(window.screen.width);
      }
    };
  }, []);

  const initScreen = (screenWidth) => {
    if (screenWidth > 1100) {
      setGridCols(3);
      setLimitMovies(12);
    } else if (screenWidth >= 768 && screenWidth <= 1100) {
      setGridCols(2);
      setLimitMovies(8);
    } else {
      setGridCols(1);
      setLimitMovies(5);
    }
  };

  useEffect(() => {
    initScreen(screenWidth);
  }, [screenWidth]);

  useEffect(() => {
    setShownMovies(cacheMovies.slice(0, limitMovies));
  }, [limitMovies, cacheMovies]);

  useEffect(() => {
    movies.length && setShownMovies(movies.slice(0, limitMovies));
  }, [limitMovies, movies]);

  const handleShowMoreMovies = () => {
    setLimitMovies((prevValue) => (prevValue += gridCols));
  };

  const handleSearch = (search) => {
    initScreen(screenWidth);
    onSearch(search);
  };

  let content = error ? (
    <p className="movies__error">
      Во время запроса произошла ошибка. Возможно, проблема с соединением или
      сервер недоступен. Подождите немного и попробуйте ещё раз
    </p>
  ) : shownMovies.length ? (
    <MoviesCardList movies={shownMovies} />
  ) : (
    <p className="movies__noresults">Ничего не найдено</p>
  );

  return (
    <div className="movies container">
      <SearchForm onSearch={handleSearch} />
      {isLoading ? (
        <div className="movies__preloader">
          <Preloader />
        </div>
      ) : (
        content
      )}

      {(shownMovies.length < movies.length ||
        shownMovies.length < cacheMovies.length) && (
        <button onClick={handleShowMoreMovies} className="movies__more">
          Еще
        </button>
      )}
    </div>
  );
};

export default Movies;
