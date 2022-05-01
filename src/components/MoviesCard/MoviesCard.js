
import { useDateFormat } from '../../utils/useDateFormat';
import './MoviesCard.css';

const MoviesCard = ({ movie }) => {
  const { title, imgSrc, duration, isLiked } = movie;
  const formatedDuration = useDateFormat(duration)
  const likeBtnClassnames = `movie__like-btn ${isLiked && "movie__like-btn_liked"}`

  return (
    <div className="movie__card">
      <img className="movie__img" src={imgSrc} alt={title} />
      <div className="movie__data">
        <h3 className="movie__title">{title}</h3>
        <button className={likeBtnClassnames}></button>
        <p className="movie__length">{formatedDuration}</p>
      </div>
    </div>
  );
};

export default MoviesCard;
