import { useState } from 'react';
import { usePathname } from '../../utils/usePathname';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import './Header.css';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const pathname = usePathname();

  const classNames = `header ${
    pathname === '/' ? 'header_isHome' : ''
  }`;

  return (
    <header className={classNames}>
      <Logo />
      <Navigation />
      {isLoggedIn && <span className="header__account">Аккаунт</span>}
    </header>
  );
};

export default Header;
