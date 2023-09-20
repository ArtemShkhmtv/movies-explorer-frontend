
function Profile() {
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
              disabled
            />
          </div>
          <div className='profile__wrapper'>
            <h3 className='profile__input-name'>E-mail</h3>
            <input
            className='profile__input'
            value='pochta@yandex.ru'
            name='mail'
            disabled
          />
          </div>
          <button className='profile__save-button' type='submit'>
          Сохранить
          </button>
        </form>
        <button className='profile__edit-button'>Редактировать</button>
        <button className='profile__sign-out-button'>Выйти из аккаунта</button>
      </section>
    </>
    
  )
}

export default Profile;