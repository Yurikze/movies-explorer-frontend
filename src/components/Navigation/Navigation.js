import './Navigation.css';

let isLoggedIn = true;

const Navigation = ({ className = '' }) => {
  const navClassNames = `navigation ${className}`;

  if (isLoggedIn) {
    return (
      <nav className={navClassNames}>
        <ul className="navigation__links navigation__links_place_drawer">
          <li className="navigation__links-item">
            <a className="navigation__link">Фильмы</a>
          </li>
          <li className="navigation__links-item">
            <a className="navigation__link">Сохраненные фильмы</a>
          </li>
        </ul>
      </nav>
    );
  }

  return (
    <nav className="navigation">
      <ul className="navigation__links">
        <li className="navigation__links-item">
          <a className="navigation__link">Регистрация</a>
        </li>
        <li className="navigation__links-item">
          <a className="navigation__link navigation__link_type_signin">Войти</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
