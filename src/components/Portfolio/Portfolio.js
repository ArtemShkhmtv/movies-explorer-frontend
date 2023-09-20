import pointer from '../../images/pointer.svg';

function Portfolio() {
  return (
    <section className="portfolio">
      <h5 className='portfolio__subhead'>Портфолио</h5>
      <nav>
        <ul className='portfolio__links'>
          <li className='portfolio__item'>
            <a href='https://github.com/ArtemShkhmtv/how-to-learn' rel='noreferrer' target='_blank' className='portfolio__link'>Статичный сайт</a>
            <img src={pointer} alt='стрелка' className="portfolio__pointer"/>
          </li>
          <li className='portfolio__item'>
            <a href='https://github.com/ArtemShkhmtv/russian-travel' rel='noreferrer' target='_blank' className='portfolio__link'>Адаптивный сайт</a>
            <img src={pointer} alt='стрелка' className="portfolio__pointer"/>
          </li>
          <li className='portfolio__item'>
            <a href='https://github.com/ArtemShkhmtv/mesto' rel='noreferrer' target='_blank' className='portfolio__link'>Одностраничное приложение</a>
            <img src={pointer} alt='стрелка' className="portfolio__pointer"/>
          </li>
        </ul>
      </nav>
    </section>
  )
}

export default Portfolio;