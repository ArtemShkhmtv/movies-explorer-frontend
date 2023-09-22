function Techs() {
  return(
    <section className="techs">
      <h3 className='section-title'>Технологии</h3>
      <div className='techs__wrapper'>
        <h3 className='techs__title'>7 технологий</h3>
        <p className='techs__subtitle'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
        <ul className='techs__grid'>
          <li className="techs__grid-item">HTML</li>
          <li className="techs__grid-item">CSS</li>
          <li className="techs__grid-item">JS</li>
          <li className="techs__grid-item">React</li>
          <li className="techs__grid-item">Git</li>
          <li className="techs__grid-item">Express.js</li>
          <li className="techs__grid-item">mongoDB</li>
        </ul>
      </div>
    </section>
  );
};

export default Techs;