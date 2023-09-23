import pointer from '../../images/pointer.svg';

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className='portfolio__subhead'>Портфолио</h2>
      <nav>
        <ul className='portfolio__links'>
          <li>
            <a href='https://github.com/ArtemShkhmtv/how-to-learn' rel='noreferrer' target='_blank' className='portfolio__link'>
              Статичный сайт
              <img src={pointer} alt='стрелка' className="portfolio__pointer"/>
            </a>
          </li>
          <li>
            <a href='https://github.com/ArtemShkhmtv/russian-travel' rel='noreferrer' target='_blank' className='portfolio__link'>
              Адаптивный сайт
            <img src={pointer} alt='стрелка' className="portfolio__pointer"/>
            </a>
          </li>
          <li>
            <a href='https://github.com/ArtemShkhmtv/mesto' rel='noreferrer' target='_blank' className='portfolio__link'>
              Одностраничное приложение
              <img src={pointer} alt='стрелка' className="portfolio__pointer"/>
            </a>
          </li>
        </ul>
      </nav>
    </section>
  )
}

export default Portfolio;