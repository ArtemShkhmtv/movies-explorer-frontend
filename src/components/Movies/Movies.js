import React from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
// import { moviesApi } from "../../utils/MoviesApi";
import Preloader from "../Preloader/Preloader";
import { mainApi } from "../../utils/MainApi";

function Movies({isPreloaderActive, handlePreloaderActive, handleLocalStorageData, localStorageData, moviesToView, moviesToAdd, handleMoviesToView, handleResize}) {

  // стейт состояния чекбокса
  const [checkboxState, setcheckboxState] = React.useState(false);

  function handlecheckboxState() {
    setcheckboxState(!checkboxState);
    localStorage.setItem('checkboxState', JSON.stringify(!checkboxState));
  }

  React.useEffect( () => {
    !localStorage.getItem('favoriteMoviesData') && getFavoriteMovies();
  }
  , []);

  // получение массива избранных фильмов для отрисовки лайков
  const getFavoriteMovies = () => {
    mainApi.getFavoriteMovies()
    .then((res) => {
    localStorage.setItem('favoriteMoviesData', JSON.stringify(res));
  })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {
    });
}

  return(
    <>
      <SearchForm 
        // handleSubmit={localStorageData ? handleSubmitLocal : handleSubmitApi}
        handlePreloaderActive = {handlePreloaderActive}
        handleLocalStorageData = {handleLocalStorageData}
        handleResize={handleResize}
        checkboxState={checkboxState}
        handlecheckboxState={handlecheckboxState}
      />
      {isPreloaderActive && <Preloader/>}
      {localStorageData && <MoviesCardList 
        localStorageData={localStorageData}
        moviesToView={moviesToView}
        moviesToAdd={moviesToAdd}
        handleMoviesToView={handleMoviesToView}
        handleLocalStorageData={handleLocalStorageData}
      />}
      
    </>
  )
}

export default Movies;