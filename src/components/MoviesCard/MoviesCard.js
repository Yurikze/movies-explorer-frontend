import { useDateFormat } from '../../utils/useDateFormat';
import { imageFormat } from '../../utils/useImageFormat';
import './MoviesCard.css';

const MoviesCard = ({
  movie,
  savedMoviesView,
  onSave,
  userId,
  savedMovies,
  onRemove,
  saved,
}) => {
  const { nameRU, image, duration, id } = movie;
  const formatedDuration = useDateFormat(duration);
  const formatedImgSrc = imageFormat(image);

  const handleMovieAction = (e) => {
    if (saved) {
      const { _id } = savedMovies.find(
        (movie) => movie.movieId === id && userId === movie.owner,
      );
      onRemove(_id);
    } else {
      onSave(movie, userId);
    }
  };

  const handleRemoveMovie = (e) => {
    onRemove(movie._id);
  };

  const cardButton = savedMoviesView ? (
    userId === movie.owner && (
      <button
        onClick={handleRemoveMovie}
        className="movies__btn movies__btn_type_delete"
      ></button>
    )
  ) : (
    <button
      onClick={handleMovieAction}
      className={`movies__btn movies__btn_type_like ${
        saved && 'movies__btn_type_likeActive'
      }`}
    ></button>
  );

  return (
    <div className="movie__card">
      <img className="movie__img" src={formatedImgSrc} alt={nameRU} />
      <div className="movie__data">
        <h3 className="movie__title">{nameRU}</h3>
        {cardButton}
        <p className="movie__length">{formatedDuration}</p>
      </div>
    </div>
  );
};

export default MoviesCard;
