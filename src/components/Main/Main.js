import React from "react";
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Main() {
  // подписка на контекс данных пользователя
  const currentUser = React.useContext(CurrentUserContext);

  return(
    <>
      <Promo />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
    </>
  )
};

export default Main;