import React from 'react';
import { useNavigate } from 'react-router-dom';
import { authApi } from '../../utils/authApi';
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useFormWithValidation } from '../../utils/useValidate';

function Profile({ handleLoggedIn, handleCurrentUser, errorApi, handleErrorApi }) {
  const navigate = useNavigate();

  // подписка на контекс данных пользователя
  const currentUser = React.useContext(CurrentUserContext);

  const { values, handleChange, errors, isValid, setValues } = useFormWithValidation();

  React.useEffect(() => {
    handleErrorApi('');
  }, []);

  // очистка инпутов при открытии, подстановка данных профиля при их наличии в инпуты
  React.useEffect(() => {
    currentUser.name ? setValues({...values, 'name' : currentUser.name, 'email': currentUser.email}) : setValues({...values, 'name' : '', 'email' : ''});
  }, [currentUser]);

  // обработчик сабмита формы редактирования профиля
  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();

   authApi.saveUserInfo(values['name'], values['email'])
    .then((res) => {
      handleCurrentUser(res);
      alert('Данные успешно обновлены');
    })
    .catch((err) => {
      console.error(err);
      handleErrorApi(err);
    })
    .finally(()=> {
    });
  }

  // обработчик выхода из аккаунта
  const handleClick = (e) => {
    e.preventDefault();
    authApi
      .loggout()
      .then(() => {
        navigate("/");
        handleLoggedIn(false);
        localStorage.clear();
        handleCurrentUser({});
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {});
  };

  const [isProfileUnDisabled, setProfileUnDisabled] = React.useState(false);

  function handleProfileUnDisabled() {
    setProfileUnDisabled(false);
  }

  function handleProfileActive() {
    setProfileUnDisabled(true);
  }

  return (
    <>
      <section className='profile'>
        <h1 className='profile__name'>Привет, {currentUser.name}!</h1>
        <form className='profile__form' onSubmit={handleSubmit}>
          <div className='profile__wrapper'>
            <label className='profile__input-name'>Имя</label>
            <input
              className='profile__input'
              value={values['name'] ? values['name'] : ''}
              onChange={handleChange}
              pattern='^[A-Za-zА-Яа-я\s\-]{2,30}$'
              name='name'
              disabled = {(isProfileUnDisabled || isValid) ? false : true}
              placeholder='Введите имя'
              minLength={2}
              maxLength={16}
            />
          </div>
          <p className={isValid ? 'profile__error profile__error-hidden' : 'profile__error'}>{isValid? 'Нет ошибки' : errors['name']}</p>
          <div className='profile__wrapper'>
            <label className='profile__input-name'>E-mail</label>
            <input
            className='profile__input'
            type='text'
            pattern='^[a-zA-Z0-9_.]+@[a-zA-Z0-9_]+\.[a-z]{2,}$'
            value={values['email'] ? values['email'] : ''}
            onChange={handleChange}
            name='email'
            disabled = {(isProfileUnDisabled || isValid) ? false : true}
            placeholder='Введите email'
          />
          </div>
          <p className={isValid ? 'profile__error profile__error-hidden' : 'profile__error'}>{isValid? 'Нет ошибки' : errors['email']}</p>
          <p className={ errorApi ? 'profile__api-error' : 'profile__api-error profile__api-error-hidden' }>При редактировании профиля произошла ошибка.</p>
          <button 
            className={
              `profile__save-button ${isProfileUnDisabled && 'profile__save-button_activ'} 
              ${((values['name'] === currentUser.name && values['email'] === currentUser.email) || !isValid) && 'profile__save-button_disabled'}`
            } 
            type='submit' 
            onClick={handleProfileUnDisabled}
            disabled = {((values['name'] === currentUser.name && values['email'] === currentUser.email) || !isValid) ? true : false}
          >
          Сохранить
          </button>
        </form>
        <button className={`profile__edit-button ${isProfileUnDisabled && 'profile__edit-button_hidden'}`} onClick={handleProfileActive} type='button'>Редактировать</button>
          <button className={`profile__sign-out-button ${isProfileUnDisabled && 'profile__sign-out-button_hidden'}`} type='button' onClick={handleClick}>
            Выйти из аккаунта
          </button>
      </section>
    </>
    
  )
}

export default Profile;