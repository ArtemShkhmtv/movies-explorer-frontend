import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function NotFound() {
const navigate = useNavigate();
  const toBack = () => {
    navigate('/signup');
  }

  return(
    <section className='not-found'>
      <h1 className='not-found__title'>404</h1>
      <p className='not-found__subtitle'>Страница не найдена</p>
      <button className='not-found__button' type='button' onClick={toBack}>
        Назад
      </button>
      
    </section>
  )
}

export default NotFound;