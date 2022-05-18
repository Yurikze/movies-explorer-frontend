import { useEffect, useState } from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import {filterMovies} from '../../utils/filterMovies'
import './SavedMovies.css';

const SavedMovies = ({ savedMovies, onRemove }) => {
  const [shownMovies, setShownMovies] = useState([]);
  const [noResults, setNoResults] = useState(false);

  useEffect(() => {
    console.log(savedMovies);
    if (localStorage.getItem('searchSaved')) {
      const filteredMovies = filterMovies(localStorage.getItem('searchSaved'), savedMovies);
      if (!filteredMovies.length) {
        setNoResults(true)
      } else {
        setNoResults(false)
      }
      setShownMovies(filteredMovies, savedMovies);
    }

  }, [savedMovies]);

  const onSearch = (search, isShort) => {
    const filteredMovies = filterMovies(search, savedMovies, isShort);
    localStorage.setItem('searchSaved', search);
    if (!filteredMovies.length) {
      setNoResults(true)
    } else {
      setNoResults(false)
    }
    setShownMovies(filteredMovies);
  };

  return (
    <section className="container saved-movies">
      <SearchForm
        onSearch={onSearch}
        cacheValue={localStorage.getItem('searchSaved')}
      />
      <MoviesCardList
        onRemove={onRemove}
        savedMovies={savedMovies}
        movies={shownMovies}
      />
      {noResults && <p className="movies__noresults">Ничего не найдено</p>}
    </section>
  );
};

export default SavedMovies;
