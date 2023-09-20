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
        {/* <MoviesCard/>
        <MoviesCard/>
        <MoviesCard/> */}
        {/* <MoviesCard/>
        <MoviesCard/>
        <MoviesCard/>
        <MoviesCard/>
        <MoviesCard/>
        <MoviesCard/>
        <MoviesCard/>
        <MoviesCard/> */}
          {/* {cards.map((element) => {
            return (
              <Card
                key={element._id}
                link={element.link}
                name={element.name}
                likes={element.likes}
                onCardClick={onCardClick}
                owner={element.owner}
                onCardLike={onCardLike}
                element={element}
                onCardDelete={onCardDelete}
              />
            );
          })} */}
      </div>
      <button className='cards-grid__add-btn'>Ещё</button>
    </section>
    
  )
}

export default MoviesCardList;