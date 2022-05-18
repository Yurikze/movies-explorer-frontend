import { Link } from 'react-router-dom';
import Form from '../Form/Form';
import Logo from '../Logo/Logo';
import './Login.css';

const Login = ({onLogin, error, clearError}) => {
  const inputs = [
    {
      id: 'email',
      label: 'E-mail',
      name: 'email',
      type: 'email',
      placeholder: 'E-mail',
      required: true
    },
    {
      id: 'password',
      label: 'Password',
      name: 'password',
      type: 'password',
      placeholder: 'Пароль',
      required: true
    },
  ];

  return (
    <section className="login">
      <Logo className="login__logo" />
      <h1 className="login__heading">Добро пожаловать!</h1>
      <Form error={error} inputs={inputs} btnText="Войти" onSubmit={onLogin} clearError={clearError} />
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
