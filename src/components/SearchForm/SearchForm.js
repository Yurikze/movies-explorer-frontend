
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import { ReactComponent as SearchIcon } from '../../images/search-icon.svg';
import './SearchForm.css';
import { useState } from 'react';

const SearchForm = ({onSearch}) => {
  const [search, setSearch] = useState('' || localStorage.getItem('search'))
  const handleSearch = (e) => {
    e.preventDefault()
    onSearch(search)
  }

  const handleInputChange = e => {
    setSearch(e.target.value)
  }

  return (
    <section className="search">
      <div className="search__form-container">
        <form className="search__form" onSubmit={handleSearch}>
          <span className="search__icon">
            <SearchIcon />
          </span>
          <input value={search} onChange={handleInputChange} className="search__input" type="text" placeholder="Фильм" required />
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
