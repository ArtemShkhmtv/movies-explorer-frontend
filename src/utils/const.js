
const DESKTOP_WIDTH = 1239;
const MINIDESKTOP_WIDTH = 999;
const TABLET_WIDTH = 767;

const DESKTOP_MOVIES_COUNT = 16;
const MINIDESKTOP_MOVIES_COUNT = 9;
const TABLET_MOVIES_COUNT = 8;
const MOBILE_MOVIES_COUNT = 5;

const DESKTOP_MOVIES_ADD = 4;
const MINIDESKTOP_MOVIES_ADD = 3;
const TABLET_MOVIES_ADD = 2;

const dataAuthApi = {
  // baseUrl: "https://api.artpr.nomoredomainsicu.ru",
  baseUrl: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
};

const dataMoviesApi = {
  baseUrl: "https://api.nomoreparties.co",
  headers: {
    "Content-Type": "application/json",
  },
};

export {
  dataAuthApi,
  dataMoviesApi,
  DESKTOP_WIDTH,
  DESKTOP_MOVIES_COUNT,
  MINIDESKTOP_WIDTH,
  TABLET_WIDTH,
  TABLET_MOVIES_COUNT,
  MOBILE_MOVIES_COUNT,
  DESKTOP_MOVIES_ADD,
  MINIDESKTOP_MOVIES_ADD,
  TABLET_MOVIES_ADD,
  MINIDESKTOP_MOVIES_COUNT
 };
