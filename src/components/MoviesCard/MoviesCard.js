import React from "react";
import { mainApi } from "../../utils/MainApi";
import like from '../../images/like.svg';
import likeAct from '../../images/like_act.svg';
import deleteLogo from '../../images/delete-logo.svg';
import { useLocation } from "react-router-dom";

function MoviesCard({nameRu, poster, duration, trailer, country, director, year, description, nameEn, movieId, thumbnail, handleLocalStorageData, localStorageData}) {

  const location = useLocation();

  // стейт лайка
  const [isLiked, switchLike] = React.useState(false);

  function handleSwitchLike() {
    switchLike(!isLiked);
  }

  React.useEffect( () => {
    const currentUserFavoriteMoviesData = JSON.parse(localStorage.getItem('favoriteMoviesData'));
    if (currentUserFavoriteMoviesData) {
      const foundOfLike = currentUserFavoriteMoviesData.some( item => item.nameRU === nameRu);
      foundOfLike && handleSwitchLike();  } 
  }
  , []);

  function handleLikeClick () {
    handleSwitchLike();
// ищу карточку нужного фильма, чтобы удалить ее из локалсторадж и взять оттуда _id
    
    
    if (isLiked) {
      const favoriteMovie = JSON.parse(localStorage.getItem('favoriteMoviesData')).find((item) => item.nameRU === nameRu);
      mainApi.deletMovie(favoriteMovie._id)
      .then((res) => {
        const newFavoriteMoviesData = JSON.parse(localStorage.getItem('favoriteMoviesData')).filter((item) => item.nameRU !== nameRu);
        const newLocalStorageData = localStorageData.filter((item) => item.nameRU !== nameRu);
        localStorage.setItem('favoriteMoviesData', JSON.stringify(newFavoriteMoviesData));
        (location.pathname === '/saved-movies') && handleLocalStorageData(newLocalStorageData);
      }).catch((err) => {
        console.error(err);
      }).finally(() => {
      
      });
      
      
    } else {
      

      mainApi.addMovie ({nameRu, poster, duration, trailer, country, director, year, description, nameEn, movieId, thumbnail})
    .then((res) => {
      const currentUserMD = JSON.parse(localStorage.getItem('favoriteMoviesData'));
      localStorage.setItem('favoriteMoviesData', JSON.stringify([...currentUserMD, res]));
    }).catch((err) => {
      console.error(err);
    })
    .finally(() => {
      
    });
    }
  };

  return(
    <section className='movies-card'>
      <a href={trailer} className='movies-card__preview-link' target='_blank' rel='noreferrer'>
        <img src={poster} alt={nameRu} className='movies-card__preview'/>
      </a>
      <div className='movies-card__wrapper'>
        <h2 className='movies-card__title'>{nameRu}</h2>
        <button className='movies-card__like-wrapper' type='button' onClick={handleLikeClick}>
          <img src={(location.pathname === '/saved-movies') ?  deleteLogo : (isLiked? likeAct : like)} alt='сердечко' className='movies-card__like'/>
        </button>
      </div>
      <p className='movies-card__duration'>{ duration > 59 ? `${~~(duration/60)}ч${duration%60}м` : `${duration}м` }</p>
    </section>
  )
}

export default MoviesCard;