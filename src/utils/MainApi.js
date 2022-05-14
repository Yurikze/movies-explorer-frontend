class MainApi {
  constructor({ baseUrl, headers }) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  _parseResponse(res) {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Ошибка: ${res.status}`);
  }

  signup({ email, password, name }) {
    console.log(email, password, name);
    return fetch(`${this.baseUrl}/signup`, {
      method: 'POST',
      headers: this.headers,
      credentials: 'include',
      body: JSON.stringify({ email, password, name }),
    }).then(this._parseResponse);
  }

  signin({ email, password }) {
    return fetch(`${this.baseUrl}/signin`, {
      method: 'POST',
      headers: this.headers,
      credentials: 'include',
      body: JSON.stringify({ email, password }),
    }).then(this._parseResponse);
  }

  signout() {
    return fetch(`${this.baseUrl}/signout`, {
      method: 'POST',
      headers: this.headers,
      credentials: 'include',
    }).then(this._parseResponse)
  }

  getContent() {
    return fetch(`${this.baseUrl}/users/me`, {
      method: 'GET',
      credentials: 'include',
      headers: this.headers,
    }).then(this._parseResponse);
  }

  updateUser({name, email}) {
    return fetch(`${this.baseUrl}/users/me`, {
      method: 'PATCH',
      credentials: 'include',
      headers: this.headers,
      body: JSON.stringify({ name, email }),
    }).then(this._parseResponse);
  }
}

export const mainApi = new MainApi({
  baseUrl: 'http://localhost:4000/api',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});
