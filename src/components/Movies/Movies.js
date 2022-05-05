import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import './Movies.css';

const Movies = () => {
  return (
    <div className="movies container">
      <SearchForm />
      <MoviesCardList />
    </div>
  );
};

export default Movies;
