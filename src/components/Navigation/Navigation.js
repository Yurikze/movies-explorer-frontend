import { NavLink } from 'react-router-dom';
import './Navigation.css';

let isLoggedIn = true;

const Navigation = ({ className = '' }) => {
  const navClassNames = `navigation ${className}`;

  if (isLoggedIn) {
    return (
      <nav className={navClassNames}>
        <ul className="navigation__links navigation__links_place_drawer">
          <li className="navigation__links-item">
            <NavLink
              className="navigation__link navigation__link_place_drawer"
              to="/movies"
            >
              Фильмы
            </NavLink>
          </li>
          <li className="navigation__links-item">
            <NavLink
              className="navigation__link navigation__link_place_drawer"
              to="/movies"
            >
              Сохраненные фильмы
            </NavLink>
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
