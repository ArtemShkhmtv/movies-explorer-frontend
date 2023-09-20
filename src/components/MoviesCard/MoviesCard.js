import filmOne from '../../images/film1.png';
import like from '../../images/like.svg';

function MoviesCard() {
  return(
    <section className='movies-card'>
      <img src={filmOne} alt='кадр из фильма' className='movies-card__preview'/>
      <div className='movies-card__wrapper'>
        <h3 className='movies-card__title'>33 слова о дизайне</h3>
        <div className='movies-card__like-wrapper'>
          <img src={like} alt='сердечко' className='movies-card__like'/>
        </div>
      </div>
      <p className='movies-card__duration'>1ч42м</p>
    </section>
  )
}

export default MoviesCard;