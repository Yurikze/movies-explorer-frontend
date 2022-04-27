import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import './Header.css';

const Header = () => {
  return (
    <header className="header container">
      <Logo />
      <Navigation />
    </header>
  );
};

export default Header;
