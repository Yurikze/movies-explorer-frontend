import './Navigation.css'

const Navigation = () => {
  return (
    <nav>
      <ul className='navigation__links'>
        <li className='navigation__links-item'>
          <a className='navigation__link'>Регистрация</a>
        </li>
        <li className='navigation__links-item'>
          <a className='navigation__link navigation__link_type_signin'>Войти</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation