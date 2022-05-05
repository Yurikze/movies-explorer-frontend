import MoviesCard from '../MoviesCard/MoviesCard';
import mov1 from '../../images/pic1.jpg';
import mov2 from '../../images/pic2.jpg';
import mov4 from '../../images/pic4.jpg';
import mov3 from '../../images/pic3.png';
import './MoviesCardList.css';
import { useLocation } from 'react-router-dom';

const DUMMUY_MOVIES = [
  {
    id: 1,
    imgSrc: mov1,
    title: 'По волнам: Искусство звука в кино',
    duration: 61,
    saved: false,
  },
  {
    id: 2,
    imgSrc: mov2,
    title: 'Пи Джей Харви: A dog called money',
    duration: 79,
    saved: true,
  },
  {
    id: 3,
    imgSrc: mov3,
    title: 'По волнам: Искусство звука в кино',
    duration: 104,
    saved: false,
  },
  {
    id: 4,
    imgSrc: mov4,
    title: 'По волнам: Искусство звука в кино',
    duration: 142,
    saved: true,
  },
];

const MoviesCardList = () => {
  const { pathname } = useLocation();

  const savedMoviesView = pathname === '/saved-movies';

  let content = DUMMUY_MOVIES.map((movie) => (
    <MoviesCard key={movie.id} movie={movie} savedMoviesView={savedMoviesView} />
  ));
  return (
    <section className="movies-list">
      <ul className="movies-list__list">{content}</ul>
      <button className="movies-list__more">Еще</button>
    </section>
  );
};

export default MoviesCardList;
