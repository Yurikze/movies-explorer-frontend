import { Link } from 'react-router-dom';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <section className="container portfolio">
      <h3 className="portfolio__heading">Portfolio</h3>
      <ul className="portfolio__list">
        <li className="portfolio__item">
          <Link
            to="https://yurikze.github.io/russian-travel/"
            className="portfolio__link"
          >
            Статичный сайт
          </Link>
        </li>
        <li className="portfolio__item">
          <Link
            to="https://yurikze.github.io/russian-travel/"
            className="portfolio__link"
          >
            Адаптивный сайт
          </Link>
        </li>
        <li className="portfolio__item">
          <Link
            to="https://yurikze.github.io/russian-travel/"
            className="portfolio__link"
          >
            Одностраничное приложение
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default Portfolio;
