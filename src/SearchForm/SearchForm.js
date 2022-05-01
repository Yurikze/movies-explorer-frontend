import FilterCheckbox from '../components/FilterCheckbox/FilterCheckbox';
import { ReactComponent as SearchIcon } from '../images/search-icon.svg';
import './SearchForm.css';

const SearchForm = () => {
  return (
    <section className="search">
      <div className="search__form-container">
        <form className="search__form">
          <span className="search__icon">
            <SearchIcon />
          </span>
          <input className="search__input" type="text" placeholder="Фильм" />
          <button type="submit" className="search__btn">
            <SearchIcon />
          </button>
        </form>
        <div className="search__filter">
          <FilterCheckbox />
          <span className='search__filter-text'>Короткометражки</span>
        </div>
      </div>
    </section>
  );
};

export default SearchForm;
