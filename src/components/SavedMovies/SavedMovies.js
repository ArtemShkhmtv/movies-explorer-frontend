import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import SearchForm from "../SearchForm/SearchForm";

function SavedMovies({isPreloaderActive, handlePreloaderActive, handleLocalStorageData, localStorageData, handleLocalStorageFavoriteMoviesData, moviesToView, moviesToAdd, handleMoviesToView, handleResize}) {
  return(
    <>
      <SearchForm 
        handlePreloaderActive={handlePreloaderActive}
        handleLocalStorageData = {handleLocalStorageData}
        handleResize={handleResize}
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