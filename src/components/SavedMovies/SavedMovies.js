import MoviesCardList from '../MoviesCardList/MoviesCardList'
import SearchForm from '../SearchForm/SearchForm';
import './SavedMovies.css';

const SavedMovies = () => {

  return (
    <section className="container saved-movies">
      <SearchForm />
      <MoviesCardList />
    </section>
  );
};

export default SavedMovies;
