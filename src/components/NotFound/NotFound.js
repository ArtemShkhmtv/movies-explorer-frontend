import { Link } from 'react-router-dom';

function NotFound() {
  return(
    <section className='not-found'>
      <h1 className='not-found__title'>404</h1>
      <h4 className='not-found__subtitle'>Страница не найдена</h4>
      <Link to='/' className='not-found__button'>
        Назад
      </Link>
      
    </section>
  )
}

export default NotFound;