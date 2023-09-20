import promoLogo from '../../images/web-logo.png';

function Promo() {
  return(
    <section className='promo'>
      <div className='promo__wrapper'>
        <h1 className='promo__title'>Учебный проект студента факультета Веб-разработки.</h1>
        <h4 className='promo__subtitle'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</h4>
        <a className='promo__link' href='#about-project'>Узнать больше</a>
      </div>
      <img src={promoLogo} alt='Логотип веб' className="promo__logo"/>
    </section>
  )
};

export default Promo;