import React from 'react';
import { Link } from "react-router-dom";
import logo from '../../images/logo.svg';

function Register() {
  return(
    <section className='register'>
      <Link to='/' className='logo'>
        <img src={logo} alt='Логотип приложения' />
      </Link>
      <h1 className='register__title'>Добро пожаловать!</h1>
      <form className='register__form'>
        <div className='register__wrapper'>
          <label className='register__input-name'>Имя</label>
          <input
            className='register__input'
            value='Виталий'
            name='name'
          />
        </div>
        <div className='register__wrapper'>
          <label className='register__input-name'>E-mail</label>
          <input
          className='register__input'
          value='pochta@yandex.ru'
          name='mail'
          />
        </div>
        <div className='register__wrapper'>
          <label className='register__input-name'>Пароль</label>
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
        <p className="register__button-text">
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