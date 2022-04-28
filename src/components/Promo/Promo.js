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
    </section>
  );
};

export default Promo;
