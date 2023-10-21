import { dataMoviesApi } from "./const";

class MoviesApi {
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

  
  async getMovies() {
    const response = await this._request("/beatfilm-movies", {
      method: "GET",
      headers: {
        ...this.headers,
      },
      
    });
    return response;
  }
}

// создание экземпляра класса Апи
const moviesApi = new MoviesApi(dataMoviesApi);

export { moviesApi };
