import React from "react";
import logo from '../../images/logo.svg';
import { Link, useNavigate } from 'react-router-dom';
import { authApi } from "../../utils/authApi";
import { useFormWithValidation } from '../../utils/useValidate';

function Login({ handleLoggedIn, handleCurrentUser, errorApi, handleErrorApi }) {
  const { values, handleChange, errors, isValid } = useFormWithValidation();

  const navigate = useNavigate();

  React.useEffect(() => {
    handleErrorApi('');
  }, []);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    authApi
      .authorize(values['email'], values['password'])
      .then((res) => {
        handleCurrentUser(res);
        handleLoggedIn(true);
        navigate("/movies");
      })
      .catch((err) => {
        console.error(err);
        handleLoggedIn(false);
        handleErrorApi(err);
      })
      .finally(()=> {
      });
  };

  return(
    <section className='login' >
      <Link to='/' className='logo'>
        <img src={logo} alt='Логотип приложения'  />
      </Link>
      <h1 className='login__title'>Рады видеть!</h1>
      <form className='login__form' onSubmit={handleSubmit}>
        <div className='login__wrapper'>
          <label className='login__input-name'>E-mail</label>
          <input
          className='login__input'
          type='text'
          pattern='^[a-zA-Z0-9_.]+@[a-zA-Z0-9_]+\.[a-z]{2,}$'
          value={values['email'] ? values['email'] : ''}
          name='email'
          onChange={handleChange}
          required
          placeholder='Введите e-mail'
          />
        </div>
        <p className={isValid ? 'login__error login__error-hidden' : 'login__error'}>{isValid? 'Нет ошибки' : errors['email']}</p>
        <div className='login__wrapper'>
          <label className='login__input-name'>Пароль</label>
          <input
          className='login__input'
          type='password'
          name='password'
          value={values['password'] ? values['password'] : ''}
          onChange={handleChange}
          required
          placeholder='Введите пароль'
          minLength={2}
          maxLength={16}
          />
        </div>
        <p className={isValid ? 'login__error login__error-hidden' : 'login__error'}>{isValid? 'Нет ошибки' : errors['password']}</p>
        <p className={ errorApi ? 'login__api-error' : 'login__api-error login__api-error-hidden' }>При авторизации произошла ошибка.</p>
        <button className={isValid ? 'login__submit-button' : 'login__submit-button login__submit-button_disabled' } type='submit' disabled={!isValid}>
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