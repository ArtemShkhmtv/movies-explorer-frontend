function AboutProject() {
  return (
    <section className='about-project' id='about-project'>
      <h2 className='section-title'>О проекте</h2>
      <div className='about-project__wrapper'>
        <div className='about-project__stage-wrapper'>
          <h3 className='about-project__stage'>Дипломный проект включал 5 этапов</h3>
          <p className='about-project__description'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className='about-project__stage-wrapper'>
          <p className='about-project__stage'>На выполнение диплома ушло 5 недель</p>
          <p className='about-project__description'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </div>
      <div className='about-project__grid'>
        <p className="about-project__grid-item">1 неделя</p>
        <p className="about-project__grid-item">4 недели</p>
        <p className="about-project__grid-item">Back-end</p>
        <p className="about-project__grid-item">Front-end</p>
      </div>
    </section>
  );
}
export default AboutProject;