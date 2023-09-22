import React from 'react';
import { Link } from 'react-router-dom';

function Profile() {
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
        <h1 className='profile__name'>Привет, Виталий!</h1>
        <form className='profile__form'>
          <div className='profile__wrapper'>
            <label className='profile__input-name'>Имя</label>
            <input
              className='profile__input'
              value='Виталий'
              name='name'
              disabled = {isProfileUnDisabled ? false : true}
            />
          </div>
          <div className='profile__wrapper'>
            <label className='profile__input-name'>E-mail</label>
            <input
            className='profile__input'
            value='pochta@yandex.ru'
            name='mail'
            disabled = {isProfileUnDisabled ? false : true}
          />
          </div>
          <button className={`profile__save-button ${isProfileUnDisabled && 'profile__save-button_activ'}`} type='submit' onClick={handleProfileUnDisabled}>
          Сохранить
          </button>
        </form>
        <button className={`profile__edit-button ${isProfileUnDisabled && 'profile__edit-button_hidden'}`} onClick={handleProfileActive} type='button'>Редактировать</button>
        <Link to='/'>
          <button className={`profile__sign-out-button ${isProfileUnDisabled && 'profile__sign-out-button_hidden'}`} type='submit'>
            Выйти из аккаунта
          </button>
        </Link>
      </section>
    </>
    
  )
}

export default Profile;