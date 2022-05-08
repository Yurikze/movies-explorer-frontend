import { useDateFormat } from '../../utils/useDateFormat';
import './MoviesCard.css';

const MoviesCard = ({ movie, savedMoviesView }) => {
  console.log(savedMoviesView);
  const { title, imgSrc, duration, saved } = movie;
  const formatedDuration = useDateFormat(duration);
  const movieBtnClassnames = `movies__btn ${
    savedMoviesView
      ? 'movies__btn_type_delete'
      : `movies__btn_type_like ${saved ? 'movies__btn_type_likeActive' : ''}`
  }`;

  return (
    <div className="movie__card">
      <img className="movie__img" src={imgSrc} alt={title} />
      <div className="movie__data">
        <h3 className="movie__title">{title}</h3>
        <button className={movieBtnClassnames}></button>
        <p className="movie__length">{formatedDuration}</p>
      </div>
    </div>
  );
};

export default MoviesCard;
