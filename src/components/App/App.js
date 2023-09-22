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
import { Routes, Route, useLocation } from "react-router-dom";
import Footer from '../Footer/Footer';

function App() {
  const location = useLocation();
  const [isLoggedIn, setLoggedIn] = React.useState(true);

  return (
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
            <Movies />
          }/>
          <Route path='/saved-movies' element={
            <SavedMovies />
          }/>
          <Route path='/profile' element={
            <Profile />
          }/>
          <Route path='/signin' element={
            <Register />
          }/>
          <Route path='/signup' element={
            <Login />
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
    
  );
}

export default App;
