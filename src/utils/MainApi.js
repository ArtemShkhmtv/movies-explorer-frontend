import { dataAuthApi } from "./const";

class Api {
  constructor({ baseUrl, headers }) {
    this.url = baseUrl;
    this.headers = headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
  }

  async _request(url, options) {
    return await fetch(`${this.url}${url}`, options).then(this._checkResponse);
  }

  //запрос сохраненных фильмов
  async getFavoriteMovies() {
    const response = await this._request('/movies', {
      method: "GET",
      headers: {
        ...this.headers,
      },
      credentials: 'include',
    });
    return response;
  }

  // добавить новый фильм
  async addMovie({country, director, duration, year, description, poster, trailer, nameRu, nameEn, thumbnail, movieId}) {
    const response = await this._request("/movies", {
      method: "POST",
      credentials: 'include',
      headers: this.headers,
      body: JSON.stringify({
        country: country,
        director: director,
        duration: duration,
        year: year,
        description: description,
        image: poster,
        trailerLink: trailer,
        nameRU: nameRu,
        nameEN: nameEn,
        thumbnail: thumbnail,
        movieId: movieId,
      }),
    });
    return response;
  }

  // удалить фильм
  async deletMovie(movieId) {
    const response = await this._request(`/movies/${movieId}`, {
      method: "DELETE",
      credentials: 'include',
      headers: this.headers,
    });
    return response;
  }

  // декларативная работа с фильмом
  changeLikeMovieStatus({country, director, duration, year, description, poster, trailer, nameRu, nameEn, thumbnail, movieId, isLiked}) {
    return isLiked ? this.deletMovie(movieId) : this.addMovie({country, director, duration, year, description, poster, trailer, nameRu, nameEn, thumbnail, movieId});
  }
}

// создание экземпляра класса Апи
const mainApi = new Api(dataAuthApi);

export { mainApi };
