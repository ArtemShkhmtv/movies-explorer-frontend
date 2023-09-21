import userPhoto from '../../images/student.png';
import MoviesCard from '../MoviesCard/MoviesCard';


function MoviesCardList () {
  return (
    <section className='cards-grid'>
      <div className="cards-grid__wrapper">
        <MoviesCard/>
        <MoviesCard/>
        <MoviesCard/>
        <MoviesCard/>
        <MoviesCard/>
        <MoviesCard/>
        <MoviesCard/>
        <MoviesCard/>
      </div>
      <button className='cards-grid__add-btn'>Ещё</button>
    </section>
    
  )
}

export default MoviesCardList;