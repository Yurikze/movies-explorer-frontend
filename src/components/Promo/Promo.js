import Header from '../Header/Header';
import './Promo.css';

const Promo = () => {
  return (
    <section className="promo">
      <Header />
      <div className="promo__banner">
        <h1 className="promo__heading">
          Учебный проект студента факультета Веб-разработки.
        </h1>
      </div>
      <ul className="promo__links">
        <li className="promo__links-item">
          <a className="promo__link">О проекте</a>
        </li>
        <li className="promo__links-item">
          <a className="promo__link">Технологии</a>
        </li>
        <li className="promo__links-item">
          <a className="promo__link">Студент</a>
        </li>
      </ul>
    </section>
  );
};

export default Promo;
