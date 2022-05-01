import SearchForm from "../SearchForm/SearchForm"
import MoviesCardList from "../MoviesCardList/MoviesCardList"

const Movies = () => {
  
  return (
    <div className="movies container">
      <SearchForm />
      <MoviesCardList />
    </div>
  )
}

export default Movies