import React from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import SearchForm from "../SearchForm/SearchForm";

function SavedMovies({isPreloaderActive, handlePreloaderActive, handleLocalStorageData, localStorageData, handleLocalStorageFavoriteMoviesData, moviesToView, moviesToAdd, handleMoviesToView, handleResize}) {

  // стейт чекбокса сохраненных фильмов
const [isCheckboxSaveMovies, setCheckboxSaveMovies] = React.useState(false);

// обработчик проверки текущей страницы
function handleCheckboxSaveMovies() {
  setCheckboxSaveMovies(!isCheckboxSaveMovies);
}

  return(
    <>
      <SearchForm 
        handlePreloaderActive={handlePreloaderActive}
        handleLocalStorageData = {handleLocalStorageData}
        handleResize={handleResize}
        checkboxState={isCheckboxSaveMovies}
        handlecheckboxState={handleCheckboxSaveMovies}
      />
      {isPreloaderActive && <Preloader/>}
      <MoviesCardList 
        localStorageData={localStorageData}
        moviesToView={moviesToView}
        moviesToAdd={moviesToAdd}
        handleMoviesToView={handleMoviesToView}
        handleLocalStorageData={handleLocalStorageData}
      />
    </>
  )
}

export default SavedMovies;