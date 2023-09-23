import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';

function HeaderNoAuth() {
  return (
    <header className='header'>
      <Link to='/' >
        <img src={logo} alt='Логотип приложения' className='logo' />
      </Link>
      <nav className='header__wrapper'>
        <Link to='/signin'>
          <button className='header__signup-btn' type='button'>
            Регистрация
          </button>    
        </Link>
        <Link to='/signup'>
          <button className='header__signin-btn' type='button'>
            Войти
          </button>  
        </Link>
      </nav>
      
    </header>
    
  );
}

export default HeaderNoAuth;
