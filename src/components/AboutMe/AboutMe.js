import userPhoto from '../../images/student.png';

function AboutMe() {
  return (
    <section className='about-me'>
      <h2 className='section-title'>Студент</h2>
      <div className='about-me__profile'>
        <div className='about-me__wrapper'>
          <h3 className='about-me__title'>Виталий</h3>
          <h4 className='about-me__subtitle'>Фронтенд-разработчик, 30 лет</h4>
          <p className='about-me__description'>Я&nbsp;родился и&nbsp;живу в&nbsp;Саратове, 
            закончил факультет экономики СГУ. У&nbsp;меня есть жена 
            и&nbsp;дочь. Я&nbsp;люблю слушать музыку, а&nbsp;ещё увлекаюсь бегом. 
            Недавно начал кодить. С&nbsp;2015 года работал в&nbsp;компании &laquo;СКБ Контур&raquo;. 
            После того, как прошёл курс по&nbsp;веб-разработке, начал заниматься фриланс-заказами и&nbsp;
            ушёл с&nbsp;постоянной работы.
          </p>
          <a className='about-me__link' href='https://github.com/ArtemShkhmtv' rel='noreferrer' target='_blank'>Github</a>
        </div>
        <img src={userPhoto} alt='Фото студента' className="about-me__avatar"/>
      </div>
    </section>
  );
};

export default AboutMe;