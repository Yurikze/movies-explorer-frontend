import profile from '../../images/profile.JPG';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <section className="about-me container" id="student">
      <h3 className="main__heading about-me__heading">Студент</h3>
      <div className="about-me__content">
        <h2 className="about-me__title">Юрий</h2>
        <h4 className="about-me__subtitle">Фронтенд-разработчик, 30 лет</h4>
        <p className="about-me__text">
          Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня
          есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом.
          Недавно начал кодить. С 2015 года работал в компании «СКБ Контур».
          После того, как прошёл курс по веб-разработке, начал заниматься
          фриланс-заказами и ушёл с постоянной работы.
        </p>
        <ul className="about-me__socials">
          <li className="about-me__social-item">
            <a href="https://www.linkedin.com/in/yuri-zhulev-202543b7/" className="about-me__link">
              LinkedIn
            </a>
          </li>
          <li className="about-me__social-item">
            <a href="https://github.com/Yurikze" className="about-me__link">
              GitHub
            </a>
          </li>
        </ul>
      </div>
      <div className="about-me__avatar">
        <img className="about-me__img" src={profile} alt="Профиль" />
      </div>
    </section>
  );
};

export default AboutMe;
