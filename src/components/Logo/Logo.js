import { Link } from 'react-router-dom';
import logoSrc from '../../images/logo.svg';
import './Logo.css'

const Logo = () => {
  return (
    <Link to="/">
      <img className='logo' src={logoSrc} alt="Логотип" />
    </Link>
  );
};

export default Logo;
