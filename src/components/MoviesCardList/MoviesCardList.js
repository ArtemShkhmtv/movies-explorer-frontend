
import React from "react";
import MoviesCard from '../MoviesCard/MoviesCard';
import { useLocation } from "react-router-dom";

function MoviesCardList ({ localStorageData, moviesToView, moviesToAdd, handleMoviesToView, handleLocalStorageData}) {
  const location = useLocation();

  function addMovies() {
    handleMoviesToView(moviesToView + moviesToAdd);
  }

  return (
    <section className='cards-grid'>
      <div className="cards-grid__wrapper">
        { (localStorageData && localStorageData.length !== 0 ) && localStorageData.slice(0, moviesToView).map ((el, num) => {
          return(
            <MoviesCard 
            key={el._id || el.id}
            movieId={num.toString()}
            nameRu = {el.nameRU}
            poster = {(location.pathname === '/saved-movies') ? el.image : `https://api.nomoreparties.co${el.image.url}`}
            duration = {el.duration}
            trailer = {el.trailerLink}
            country = {el.country}
            director = {el.director}
            year = {el.year}
            description = {el.description}
            nameEn = {el.nameEN}
            thumbnail = { el.trailerLink}
            handleLocalStorageData={handleLocalStorageData}
            localStorageData = {localStorageData}
            />
          )
        })}
      </div>
      <button className={ ((location.pathname === '/saved-movies') || (moviesToView >= localStorageData.length)) ?  'cards-grid__add-btn_hidden' : 'cards-grid__add-btn' } type='button' onClick={addMovies}>Ещё</button>
    </section>
    
  )
}

export default MoviesCardList;