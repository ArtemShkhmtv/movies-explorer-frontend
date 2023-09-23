import userPhoto from '../../images/student.png';
import MoviesCard from '../MoviesCard/MoviesCard';


function MoviesCardList () {
  return (
    <section className='cards-grid'>
      <div className="cards-grid__wrapper">
        <MoviesCard alt={'постер'}/>
        <MoviesCard alt={'постер'}/>
        <MoviesCard alt={'постер'}/>
        <MoviesCard alt={'постер'}/>
        <MoviesCard alt={'постер'}/>
        <MoviesCard alt={'постер'}/>
        <MoviesCard alt={'постер'}/>
        <MoviesCard alt={'постер'}/>
      </div>
      <button className='cards-grid__add-btn' type='button'>Ещё</button>
    </section>
    
  )
}

export default MoviesCardList;