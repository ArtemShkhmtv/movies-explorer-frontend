import React from "react";
import { moviesApi } from "../../utils/MoviesApi";
import { useLocation } from "react-router-dom";

function SearchForm({ handlePreloaderActive, handleLocalStorageData, handleResize, checkboxState, handlecheckboxState }) {
  const location = useLocation();

// стейт валидации при сабмите
const [isValid, setValid] = React.useState(true);

// обработчик проверки текущей страницы
function handleSetValid(status) {
  setValid(status);
}  


// стейт страницы сохраненных фильмов
const [isSavedMovies, setSavedMovies] = React.useState(false);

// обработчик проверки текущей страницы
function handleSavedMovies(status) {
  setSavedMovies(status);
}

// // стейт чекбокса сохраненных фильмов
// const [isCheckboxSaveMovies, setCheckboxSaveMovies] = React.useState(false);

// // обработчик проверки текущей страницы
// function handleCheckboxSaveMovies() {
//   setSavedMovies(!isCheckboxSaveMovies);
// }


  // стейт строки поиска
  const [formValue, setFormValue] = React.useState({
    search: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  // стейт сообщения по результатам поиска
  const [resultMessage, setResultMessage] = React.useState('');

  function handleResultMessage(text) {
    setResultMessage(text);
  }

  // // стейт состояния чекбокса
  // const [checkboxState, setcheckboxState] = React.useState(false);

  // function handlecheckboxState() {
  //   setcheckboxState(!checkboxState);
  //   localStorage.setItem('checkboxState', JSON.stringify(!checkboxState));
  // }

  // проверка наличия данных в локалсторадж
  React.useEffect(() => {
    (location.pathname === '/saved-movies') ? handleSavedMovies(true) : handleSavedMovies(false);
    function getLocalStorageData() {
      const currentUserSearch = JSON.parse(localStorage.getItem('currentUserSearch'));
      const currentUserMoviesData = JSON.parse(localStorage.getItem('currentUserMoviesData'));
      currentUserSearch && handleLocalStorageData(currentUserMoviesData);
      currentUserSearch && (formValue.search = currentUserSearch);
      (currentUserMoviesData && currentUserMoviesData.length === 0) && (handleResultMessage('Ничего не найдено'));
  };

    // !localStorage.getItem('favoriteMoviesData') && getFavotiteMovies();

    const storageCheckboxState = JSON.parse(localStorage.getItem('checkboxState'));

    if (location.pathname !== '/saved-movies') {
      if (storageCheckboxState) {
        if (storageCheckboxState === checkboxState) {
          handlecheckboxState();
          handlecheckboxState(); // двойновый вызов для имитации двойного отрицания, обновления стейта состояния чекбокса при загрузке страницы
        } else {
          handlecheckboxState();
        } 
      } else {
        localStorage.setItem('checkboxState', JSON.stringify(checkboxState));
      }
    } else {
      return;
    }

    location.pathname !== '/saved-movies' && getLocalStorageData();
  }, []);

  React.useEffect(() => {
    if (location.pathname === '/saved-movies') {
      localStorage.getItem('favoriteMoviesData') && handleFavoriteMoviesMount();

    } else {
      localStorage.getItem('moviesData') ? handleMoviesMount() : handleLocalStorageData('');
    } 
  }, [checkboxState]);

  // логика проверки локалстораж и отрисовки 
  function handleMoviesMount() {
    const moviesData = JSON.parse(localStorage.getItem('moviesData'));
      const search = moviesData.filter( (item) => {
        if (checkboxState) {
          return (item.duration < 41) && (item.nameRU.toLowerCase().includes(formValue.search.toLowerCase()) 
          || item.nameEN.toLowerCase().includes(formValue.search.toLowerCase()));
        } else {
          return item.nameRU.toLowerCase().includes(formValue.search.toLowerCase()) 
          || item.nameEN.toLowerCase().includes(formValue.search.toLowerCase());
        }
      });
      // отрисовка сообщения или фильмов
      if (search.length === 0) {
        handleResultMessage('Ничего не найдено');
        handleLocalStorageData(search);
      }  else {
        handleLocalStorageData(search);
        handleResultMessage('');
      };
      localStorage.setItem('currentUserMoviesData', JSON.stringify(search));
      localStorage.setItem('currentUserSearch', JSON.stringify(formValue.search));
  }

  const handleSubmitApi = (e) => {
    e.preventDefault();
    if (formValue.search === '') {
      handleSetValid(false);
    } else {
      handleResize(e);
      handleSetValid(true);
      handlePreloaderActive(true);
        moviesApi
          .getMovies(formValue.search)
            .then((res) => {
              handleResultMessage('');
              const search = res.filter( (item) => {
                if (checkboxState) {
                  return (item.duration < 41) && (item.nameRU.toLowerCase().includes(formValue.search.toLowerCase()) 
                  || item.nameEN.toLowerCase().includes(formValue.search.toLowerCase()));
                } else {
                  return item.nameRU.toLowerCase().includes(formValue.search.toLowerCase()) 
                  || item.nameEN.toLowerCase().includes(formValue.search.toLowerCase());
                }
                
              });
              // отрисовка сообщения или фильмов
              if (search.length === 0) {
                handleResultMessage('Ничего не найдено');
                handleLocalStorageData(search);
              }  else {
                handleLocalStorageData(search);
                handleResultMessage('');
              };
              localStorage.setItem('moviesData', JSON.stringify(res));
              localStorage.setItem('currentUserMoviesData', JSON.stringify(search));
              localStorage.setItem('currentUserSearch', JSON.stringify(formValue.search));
            })
        .catch((err) => {
          handleResultMessage('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз');
          console.error(err);
        })
        .finally(() => {
          handlePreloaderActive(false);
        });
    }
    
  };
  
  const handleSubmitLocal = (e) => {
    e.preventDefault();
    if (formValue.search === '') {
      handleSetValid(false);
    } else {
    handleSetValid(true);
    handleMoviesMount();
    handleResize(e);
    }
  }

  function handleFavoriteMoviesMount() {
    const favoriteMoviesData = JSON.parse(localStorage.getItem('favoriteMoviesData'));
    const search = favoriteMoviesData.filter( (item) => {
      if (checkboxState) {
        return (item.duration < 41) && (item.nameRU.toLowerCase().includes(formValue.search.toLowerCase()) 
        || item.nameEN.toLowerCase().includes(formValue.search.toLowerCase()));
      } else {
        return item.nameRU.toLowerCase().includes(formValue.search.toLowerCase()) 
        || item.nameEN.toLowerCase().includes(formValue.search.toLowerCase());
      }
    });
   
    // отрисовка сообщения или фильмов
    if (search.length === 0) {
      handleResultMessage('Ничего не найдено');
      handleLocalStorageData(search);
    }  else {
      handleLocalStorageData(search);
      handleResultMessage('');
    };
  };

  const handleSubmitMainApi = (e) => {
    e.preventDefault();
    if (formValue.search === '') {
      handleSetValid(false);
    } else {
      handleSetValid(true);
      handleFavoriteMoviesMount();
      handleResize(e);
    }
  }

  return(
    <section className='search-form'>
      <form noValidate onSubmit={(isSavedMovies ? handleSubmitMainApi : ((localStorage.getItem('moviesData') && localStorage.getItem('moviesData').length) ? handleSubmitLocal : handleSubmitApi))}>
        <div className='search-form__form' >
          <input 
            className='search-form__input' 
            type='search' 
            placeholder='Фильм' 
            required
            value={formValue.search}
            name='search'
            onChange={handleChange}
          ></input>
          <button className='search-form__btn' type='submit'>Найти</button>
        </div>
        <p className={isValid ? 'search-form__error search-form__error-hidden' : 'search-form__error'}>Нужно ввести ключевое слово</p>
        <div className='filter-checkbox' >
          <input className='filter-checkbox__nativ' type='checkbox' id='checkbox' checked={checkboxState} onChange={handlecheckboxState}></input>
          <div className='filter-checkbox__custom'>
            <label className='filter-checkbox__button' htmlFor='checkbox'></label>
          </div>
          <p className='filter-checkbox__name'>Короткометражки</p>
        </div>      
      </form>
      <p className='search-form__message_active '>{resultMessage}</p>
    </section>
  )
}

export default SearchForm;