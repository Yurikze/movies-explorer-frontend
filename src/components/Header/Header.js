import { useState, useEffect } from 'react';
import { usePathname } from '../../utils/usePathname';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import SideDrawer from '../SideDrawer/SideDrawer';
import './Header.css';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const pathname = usePathname();

  const classNames = `header ${pathname === '/' ? 'header_isHome' : ''}`;

  const handleShowDrawer = () => {
    setIsDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <header className={classNames}>
      <Logo />
      <Navigation className="header__navigation" />
      {isLoggedIn && (
        <button onClick={handleShowDrawer} className="header__burger"></button>
      )}
      {isLoggedIn && (
        <span className="header__account header__account_place_nav">
          Аккаунт
        </span>
      )}
      {isDrawerOpen && isLoggedIn && (
        <SideDrawer onCloseDrawer={handleCloseDrawer}>
          <Navigation />
          <span className="header__account">Аккаунт</span>
        </SideDrawer>
      )}
    </header>
  );
};

export default Header;
