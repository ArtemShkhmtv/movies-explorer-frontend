function Footer() {
  return (
    <footer className='footer'>
      <p className='footer__copyright-holder'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer__wrapper">
        <p className='footer__date'>©&nbsp;{new Date().getFullYear()}</p>
        <ul className="footer__link-menu">
          <li className='footer__item'>
            <a href='https://practicum.yandex.ru/' rel='noreferrer' target='_blank' className='footer__link'>Яндекс.Практикум</a>
          </li>
          <li className='footer__item'>
            <a href='https://github.com/yandex-praktikum' rel='noreferrer' target='_blank' className='footer__link'>Github</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;