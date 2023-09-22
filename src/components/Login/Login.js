import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';


function Login() {
  return(
    <section className='login' >
      <Link to='/' className='logo'>
        <img src={logo} alt='Логотип приложения'  />
      </Link>
      <h1 className='login__title'>Рады видеть!</h1>
      <form className='login__form'>
        <div className='login__wrapper'>
          <label className='login__input-name'>E-mail</label>
          <input
          className='login__input'
          value='pochta@yandex.ru'
          name='mail'
          />
        </div>
        <div className='login__wrapper'>
          <label className='login__input-name'>Пароль</label>
          <input
          className='login__input'
          type='password'
          name='password'
          />
        </div>
        <button className='login__submit-button' type='submit'>
        Войти
        </button>
        <p className="login__button-text">
        Ещё не зарегистрированы?{" "}
        <Link className="login__link-to-sign-up" to="/signin">
          Регистрация
        </Link>
      </p>
      </form>
    </section>
  )
}

export default Login;