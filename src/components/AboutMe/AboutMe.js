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
          Я родился в Санкт-Петербурге, живу в Москве, закончил факультет
          автоматизации предприятий связи в МТУСИ. У меня есть жена и дочь.
          Работаю в стартапе как менеджер проектов. Так же работаю как
          frontend-разработчик в НКО ЛизаАлерт. Эта организация привлекла меня
          своей деятельностью, направленной на помощь людям, попавшим в беду, и
          их близким. У нас две команды из четырех frontend разработчиков, мы
          разрабатываем интерфес платформы для обучения новых участников
          спасательно-поискового отряда. В проекте используем React.js, react
          router, Redux toolkit, свой ui-библиотека.
        </p>
        <ul className="about-me__socials">
          <li className="about-me__social-item">
            <a
              href="https://www.linkedin.com/in/yuri-zhulev-202543b7/"
              className="about-me__link"
            >
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
