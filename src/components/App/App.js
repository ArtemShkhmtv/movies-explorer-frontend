import './App.css';
import React from 'react';
import HeaderAuth from '../HeaderAuth/HeaderAuth';
import HeaderNoAuth from '../HeaderNoAuth/HeaderNoAuth';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import SavedMovies from '../SavedMovies/SavedMovies';
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Footer from '../Footer/Footer';
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { authApi } from '../../utils/authApi';
import {DESKTOP_WIDTH, DESKTOP_MOVIES_COUNT, TABLET_WIDTH, TABLET_MOVIES_COUNT, MOBILE_MOVIES_COUNT, MINIDESKTOP_WIDTH, DESKTOP_MOVIES_ADD, MINIDESKTOP_MOVIES_ADD, TABLET_MOVIES_ADD, MINIDESKTOP_MOVIES_COUNT} from '../../utils/const'

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  // стейт входа в приложение
  const [isLoggedIn, setLoggedIn] = React.useState(false);

  function handleLoggedIn(status) {
    setLoggedIn(status);
    
  }

  // стейт текущего пользователя
  const [currentUser, setCurrentUser] = React.useState({});

  function handleCurrentUser(user) {
    setCurrentUser(user);
  }

  // стейт активации прелоадера
  const [isPreloaderActive, setPreloaderActive] = React.useState(false);

  function handlePreloaderActive(act) {
    setPreloaderActive(act);
  }

  // стейт карточек фильмов
  const [localStorageData, setLocalStorageData] = React.useState([]);

  function handleLocalStorageData(data) {
    setLocalStorageData(data);
  }


  // стейт карточек избранных фильмов
  const [localStorageFavoriteMoviesData, setLocalStorageFavoriteMoviesData] = React.useState([]);

  function handleLocalStorageFavoriteMoviesData(data) {
    setLocalStorageFavoriteMoviesData(data);
  }

  // стейт числа карточек для отображения
  const [moviesToView, setMoviesToView] = React.useState(16);

  function handleMoviesToView(value) {
    setMoviesToView(value);
  }

  // стейт числа карточек для добавления
  const [moviesToAdd, setMoviesToAdd] = React.useState(4);

  function handleMoviesToAdd(value) {
    setMoviesToAdd(value);
  }

  // стейт ошибки с сервера
  const [errorApi, setErrorApi] = React.useState('');

  function handleErrorApi(value) {
    setErrorApi(value);
  }

  // установка параметров отображения и добавления карточек
  function handleResize(evt) {
    if (window.innerWidth > DESKTOP_WIDTH) {
      handleMoviesToView(DESKTOP_MOVIES_COUNT);
      handleMoviesToAdd(DESKTOP_MOVIES_ADD);
    } else if (window.innerWidth > MINIDESKTOP_WIDTH) {
      handleMoviesToView(MINIDESKTOP_MOVIES_COUNT);
      handleMoviesToAdd(MINIDESKTOP_MOVIES_ADD);
    } else if (window.innerWidth > TABLET_WIDTH) {
      handleMoviesToView(TABLET_MOVIES_COUNT);
      handleMoviesToAdd(TABLET_MOVIES_ADD);
    } else {
      handleMoviesToView(MOBILE_MOVIES_COUNT);
      handleMoviesToAdd(TABLET_MOVIES_ADD);
    }
  }

  // хук получения и измения данных текущего пользователя
  React.useEffect(() => {
    async function getUserInfo() {
      try {
        const userData = await authApi.getUser();
        setCurrentUser(userData);
      } catch (error) {
        console.error(error);
      }
    }
    
    getUserInfo();
    checkToken();

    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    }
    //eslint-disable-next-line
  }, []);

  // обработчик проверки токена
  function checkToken() {
      authApi
        .getUser()
        .then((data) => {
          if (!data) {
            return;
          }
          setLoggedIn(true);
          navigate("/movies");
        })
        .catch((err) => console.error(err));
  }


  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='app'>
        {(location.pathname === '/' || location.pathname === '/movies' || location.pathname === '/saved-movies' || location.pathname === '/profile')  && (
          <>
            {isLoggedIn?<HeaderAuth/> : <HeaderNoAuth/>}
          </>
        )}
        <main>
          <Routes>
            <Route path='/' element={
              <Main />
            }/>
            <Route path='/movies' element={
              <ProtectedRoute
                isLoggedIn={isLoggedIn}
                element={Movies}
                isPreloaderActive={isPreloaderActive}
                handlePreloaderActive={handlePreloaderActive}
                handleLocalStorageData={handleLocalStorageData}
                localStorageData={localStorageData}
                moviesToView={moviesToView}
                moviesToAdd={moviesToAdd}
                handleMoviesToView={handleMoviesToView}
                handleResize={handleResize}
              />
            }/>
            <Route path='/saved-movies' element={
              <ProtectedRoute
              isLoggedIn={isLoggedIn}
              element={SavedMovies}
              isPreloaderActive={isPreloaderActive}
              handlePreloaderActive={handlePreloaderActive}
              handleLocalStorageData={handleLocalStorageData}
              localStorageData={localStorageData}
              handleLocalStorageFavoriteMoviesData={handleLocalStorageFavoriteMoviesData}
              moviesToView={moviesToView}
              moviesToAdd={moviesToAdd}
              handleMoviesToView={handleMoviesToView}
              handleResize={handleResize}
            />
            }/>
            <Route path='/profile' element={
              <ProtectedRoute
              isLoggedIn={isLoggedIn}
              element={Profile}
              handleLoggedIn={handleLoggedIn}
              handleCurrentUser={handleCurrentUser}
              errorApi={errorApi}
              handleErrorApi={handleErrorApi}
            />
            }/>
            <Route path='/signin' element={
              <Register 
                handleRegisterUser={handleLoggedIn}
                handleCurrentUser={handleCurrentUser}
                errorApi={errorApi}
                handleErrorApi={handleErrorApi}
              />
            }/>
            <Route path='/signup' element={
              <Login 
                handleLoggedIn={handleLoggedIn}
                handleCurrentUser={handleCurrentUser}
                errorApi={errorApi}
                handleErrorApi={handleErrorApi}
              />
            }/>
            <Route path='*' element={
              <NotFound />
            }/>
          </Routes>
        </main>
        {(location.pathname === '/' || location.pathname === '/movies' || location.pathname === '/saved-movies')  && (
          <Footer />
        )}
      </div>
    </CurrentUserContext.Provider>

    
    
  );
}

export default App;
