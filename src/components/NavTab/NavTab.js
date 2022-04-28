import './NavTab.css';

const NavTab = () => {
  return (
    <section>
      <ul className="nav-tab__links">
        <li className="nav-tab__links-item">
          <a className="nav-tab__link">О проекте</a>
        </li>
        <li className="nav-tab__links-item">
          <a className="nav-tab__link">Технологии</a>
        </li>
        <li className="nav-tab__links-item">
          <a className="nav-tab__link">Студент</a>
        </li>
      </ul>
    </section>
  );
};

export default NavTab;
