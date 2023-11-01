import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import logo from '../../images/logo.svg';
import { authApi } from '../../utils/authApi';
import { useFormWithValidation } from '../../utils/useValidate';

function Register({ handleRegisterUser, handleCurrentUser, errorApi, handleErrorApi }) {

  React.useEffect(() => {
    handleErrorApi('');
  }, []);
  
  const { values, handleChange, errors, isValid } = useFormWithValidation();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    authApi
      .register(values['name'], values['email'], values['password'])
      .then(() => {
        authApi
          .authorize(values['email'], values['password'])
          .then((res) => {
            handleCurrentUser(res);
            handleRegisterUser(true);
        }).finally(() => {
          navigate("/movies");
        })
      })
      .catch((err) => {
        console.error(err);
        handleRegisterUser(false);
        handleErrorApi(err);
      });
  };

  return(
    <section className='register'>
      <Link to='/' className='logo'>
        <img src={logo} alt='Логотип приложения' />
      </Link>
      <h1 className='register__title'>Добро пожаловать!</h1>
      <form className='register__form' onSubmit={handleSubmit}>
        <div className='register__wrapper'>
          <label className='register__input-name'>Имя</label>
          <input
            className='register__input'
            pattern='^[A-Za-zА-Яа-я\s\-]{2,30}$'
            value={values['name'] ? values['name'] : ''}
            name='name'
            type='text'
            onChange={handleChange}
            required
            placeholder='Введите имя'
            minLength={2}
            maxLength={16}
          />
        </div>
        <p className={isValid ? 'register__error register__error-hidden' : 'register__error'}>{isValid? 'Нет ошибки' : errors['name']}</p>
        <div className='register__wrapper'>
          <label className='register__input-name'>E-mail</label>
          <input
          className='register__input'
          type='text'
          pattern='^[a-zA-Z0-9_.]+@[a-zA-Z0-9_]+\.[a-z]{2,}$'
          value={values['email'] ? values['email'] : ''}
          name='email'
          onChange={handleChange}
          required
          placeholder='Введите e-mail'
          />
        </div>
        <p className={isValid ? 'register__error register__error-hidden' : 'register__error'}>{isValid? 'Нет ошибки' : errors['email']}</p>
        <div className='register__wrapper'>
          <label className='register__input-name'>Пароль</label>
          <input
          className='register__input'
          value={values['password'] ? values['password'] : ''}
          type='password'
          name='password'
          onChange={handleChange}
          required
          placeholder='Введите пароль'
          minLength={2}
          maxLength={16}
          />
        </div>
        <p className={isValid ? 'register__error register__error-hidden' : 'register__error'}>{isValid? 'Нет ошибки' : errors['password']}</p>
        <p className={ errorApi ? 'register__api-error' : 'register__api-error register__api-error-hidden' }>При регистрации произошла ошибка.</p>
        <button className={isValid ? 'register__submit-button' : 'register__submit-button register__submit-button_disabled' } type='submit' disabled={!isValid}>
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