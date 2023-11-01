import { dataAuthApi } from "./const";

class AuthApi {
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

  // авторизация пользователя
  async register(name, email, password) {
    const response = await this._request("/signup", {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
      credentials: 'include',
    });
    return response;
  }

  // регистрация пользователя
  async authorize(email, password) {
    const response = await this._request("/signin", {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify({
        email: email,
        password: password,
      }),
      credentials: 'include',
    });
    return response;
  }

  //проверка авторизации
  async getUser() {
    const response = await this._request("/users/me", {
      method: "GET",
      headers: {
        ...this.headers,
      },
      credentials: 'include',
    });
    return response;
  };


  // выход из аккаунта
  async loggout() {
    const response = await this._request("/signout", {
      method: "POST",
      credentials: 'include',
      headers: {
        ...this.headers,
      },
    });
    return response;
  }

  // сохранение изменений профиля
  async saveUserInfo(newName, newEmail) {
    const response = await this._request("/users/me", {
      method: "PATCH",
      credentials: 'include',
      headers: this.headers,
      body: JSON.stringify({
        name: newName,
        email: newEmail,
      }),
    });
    return response;
  }
}

// создание экземпляра класса Апи
const authApi = new AuthApi(dataAuthApi);

export { authApi };
