import filmOne from '../../images/film1.png';
import like from '../../images/like.svg';

function MoviesCard({alt}) {
  return(
    <section className='movies-card'>
      <img src={filmOne} alt={alt} className='movies-card__preview'/>
      <div className='movies-card__wrapper'>
        <h2 className='movies-card__title'>33 слова о дизайне</h2>
        <button className='movies-card__like-wrapper' type='button'>
          <img src={like} alt='сердечко' className='movies-card__like'/>
        </button>
      </div>
      <p className='movies-card__duration'>1ч42м</p>
    </section>
  )
}

export default MoviesCard;