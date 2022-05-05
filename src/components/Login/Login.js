import { Link } from 'react-router-dom';
import Form from '../Form/Form';
import Logo from '../Logo/Logo';
import './Login.css';

const Login = () => {
  const inputs = [
    {
      id: 'email',
      label: 'E-mail',
      name: 'email',
      type: 'email',
      placeholder: 'E-mail',
    },
    {
      id: 'password',
      label: 'Password',
      name: 'password',
      type: 'password',
      placeholder: 'Пароль',
    },
  ];

  return (
    <section className="login">
      <Logo className="login__logo" />
      <h1 className="login__heading">Добро пожаловать!</h1>
      <Form inputs={inputs} btnText="Зарегистрироваться" />
      <p className="login__text">
        Еще не разрегистрированы?{' '}
        <Link className="login__link" to="/signup">
          Регистрация
        </Link>
      </p>
    </section>
  );
};

export default Login;
