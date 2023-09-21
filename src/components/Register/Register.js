import React from 'react';
import { Link } from "react-router-dom";
import logo from '../../images/logo.svg';

function Register() {
  return(
    <section className='register'>
      <Link to='/' >
        <img src={logo} alt='Логотип приложения' className='logo' />
      </Link>
      <h1 className='register__title'>Добро пожаловать!</h1>
      <form className='register__form'>
        <div className='register__wrapper'>
          <p className='register__input-name'>Имя</p>
          <input
            className='register__input'
            value='Виталий'
            name='name'
          />
        </div>
        <div className='register__wrapper'>
          <p className='register__input-name'>E-mail</p>
          <input
          className='register__input'
          value='pochta@yandex.ru'
          name='mail'
          />
        </div>
        <div className='register__wrapper'>
          <p className='register__input-name'>Пароль</p>
          <input
          className='register__input'
          value='pochta@yandex.ru'
          type='password'
          name='password'
          />
        </div>
        <button className='register__submit-button' type='submit'>
          Зарегистрироваться
        </button>
        <p className="register-button__text">
        Уже зарегистрированы?{" "}
        <Link to='/signup' className="register__link-to-sign-in">
          Войти
        </Link>
      </p>
      </form>
    </section>
  )
}

export default Register;