import { useDateFormat } from '../../utils/useDateFormat';
import { useImageFormat } from '../../utils/useImageFormat';
import './MoviesCard.css';

const MoviesCard = ({ movie, savedMoviesView }) => {
  const { nameRU, image, duration, saved } = movie;
  const formatedDuration = useDateFormat(duration);
  const formatedImgSrc = useImageFormat(image)
  const movieBtnClassnames = `movies__btn ${
    savedMoviesView
      ? 'movies__btn_type_delete'
      : `movies__btn_type_like ${saved ? 'movies__btn_type_likeActive' : ''}`
  }`;

  return (
    <div className="movie__card">
      <img className="movie__img" src={formatedImgSrc} alt={nameRU} />
      <div className="movie__data">
        <h3 className="movie__title">{nameRU}</h3>
        <button className={movieBtnClassnames}></button>
        <p className="movie__length">{formatedDuration}</p>
      </div>
    </div>
  );
};

export default MoviesCard;
