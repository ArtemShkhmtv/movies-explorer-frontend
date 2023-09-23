import React from 'react';
import logo from '../../images/logo.svg';
import userLogo from '../../images/user-logo.svg';
import { NavLink, Link, useLocation } from 'react-router-dom';

function HeaderAuth() {

  const [isMenuOpen, setMenuOpen] = React.useState(false);

  function handleMenuOpen(act) {
    setMenuOpen(act);
  }

  // колбэк закрытия попапов
  function closeAllPopups() {
    handleMenuOpen(false);
  }

  const location = useLocation();
  return (
    <>
    <header className={location.pathname === '/' ? 'header' : 'header header_white'}>
      <Link to='/' >
        <img src={logo} alt='Логотип приложения' className='logo' />
      </Link>
      <button onClick={handleMenuOpen} className={location.pathname === '/' ? 'header__menu-btn' : 'header__menu-btn header__menu-btn_white'} type='button'>
        <span className={location.pathname === '/' ? 'header__btn-span' : 'header__btn-span header__btn-span_white'}></span>
        <span className={location.pathname === '/' ? 'header__btn-span' : 'header__btn-span header__btn-span_white'}></span>
        <span className={location.pathname === '/' ? 'header__btn-span' : 'header__btn-span header__btn-span_white'}></span>
      </button>
        <nav className={isMenuOpen ? 'navigation navigation_opened' : 'navigation'}> 
          <button onClick={closeAllPopups} className='close-button' type='button'></button>
          <div className='navigation__menu'>
            <NavLink to='/' className={location.pathname === '/' ? ({isActive}) =>`${isActive ? 'navigation__item navigation__item_selected navigation__item_white' : 'navigation__item navigation__item_white'}` : ({isActive}) =>`${isActive ? 'navigation__item navigation__item_selected' : 'navigation__item'}`}>
              Главная
            </NavLink>
            <NavLink to='/movies' className={location.pathname === '/' ? ({isActive}) =>`${isActive ? 'navigation__item navigation__item_selected navigation__item_white' : 'navigation__item navigation__item_white'}` : ({isActive}) =>`${isActive ? 'navigation__item navigation__item_selected' : 'navigation__item'}`}>
              Фильмы
            </NavLink>
            <NavLink to='/saved-movies' className={location.pathname === '/' ? ({isActive}) =>`${isActive ? 'navigation__item navigation__item_selected navigation__item_white' : 'navigation__item navigation__item_white'}` : ({isActive}) =>`${isActive ? 'navigation__item navigation__item_selected' : 'navigation__item'}`}>
              Сохранённые фильмы
            </NavLink>
          </div>
          <Link to='/profile' className='navigation__auth-menu navigation__auth-menu_films'>
            <p className='navigation__user'>Аккаунт</p>
            <div className='navigation__user-logo-wrapper'>
              <img src={userLogo} alt='Логотип пользователя' className='navigation__user-logo' />
            </div> 
          </Link>
          
        </nav>
    </header>
    <div className={isMenuOpen ? 'overlay overlay_opened' : 'overlay' }></div>      
    </>
    
  );
}

export default HeaderAuth;
