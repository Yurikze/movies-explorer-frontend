import { Link } from 'react-router-dom';
import Form from '../Form/Form';
import Logo from '../Logo/Logo';
import './Register.css';

const Register = () => {


  const inputs = [
    {
      id: "name",
      label: "Имя",
      name: "name",
      type: "text",
      placeholder: "Имя",
    },
    {
      id: "email",
      label: "E-mail",
      name: "email",
      type: "email",
      placeholder: "E-mail",
    },
    {
      id: "password",
      label: "Password",
      name: "password",
      type: "password",
      placeholder: "Пароль",
    }
  ]

  return (
    <section className='register'>

      <Logo className="register__logo" />
      <h1 className='register__heading'>Добро пожаловать!</h1>
      <Form inputs={inputs} btnText="Зарегистрироваться" />
      <p className='register__text'>Уже зарегистрированы? <Link className='register__link' to="/signin">Войти</Link></p>
    </section>
  );
};

export default Register;