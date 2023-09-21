import React from 'react';

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
            <h3 className='profile__input-name'>Имя</h3>
            <input
              className='profile__input'
              value='Виталий'
              name='name'
              disabled = {isProfileUnDisabled ? true : false}
            />
          </div>
          <div className='profile__wrapper'>
            <h3 className='profile__input-name'>E-mail</h3>
            <input
            className='profile__input'
            value='pochta@yandex.ru'
            name='mail'
            disabled = {isProfileUnDisabled ? true : false}
          />
          </div>
          <button className={`profile__save-button ${isProfileUnDisabled && 'profile__save-button_activ'}`} type='submit' onClick={handleProfileUnDisabled}>
          Сохранить
          </button>
        </form>
        <button className={`profile__edit-button ${isProfileUnDisabled && 'profile__edit-button_hidden'}`} onClick={handleProfileActive}>Редактировать</button>
        <button className={`profile__sign-out-button ${isProfileUnDisabled && 'profile__sign-out-button_hidden'}`}>Выйти из аккаунта</button>
      </section>
    </>
    
  )
}

export default Profile;