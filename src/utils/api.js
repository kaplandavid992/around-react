 class Api{
    constructor({ baseUrl, headers }) {
      this._baseUrl = baseUrl;
      this._headers = headers;
    }
  
    getInitialCards() {
      return fetch(`${this._baseUrl}/cards`, { headers: this._headers })
        .then(this._checkResponse)
    }
  
    postNewCard({ name, link }) {
      return fetch(`${this._baseUrl}/cards`, {
        method: "POST",
        headers: this._headers,
        body: JSON.stringify({
          name,
          link,
        }),
      })
        .then(this._checkResponse)
    }
  
    confirmDelete(cardId) {
      return fetch(`${this._baseUrl}/cards/${cardId}`, {
        method: "DELETE",
        headers: this._headers,
      })
        .then(this._checkResponse)
    }
  
    changeLikeCardStatus(cardId, isLiked) {
      return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
        method: isLiked ? "PUT" : "DELETE",
        headers: this._headers,
      })
        .then(this._checkResponse)
    }
  
    getUserInfo() {
      return fetch(`${this._baseUrl}/users/me`, { headers: this._headers })
        .then(this._checkResponse)
    }
  
    editUserInfo({ name, about }) {
      return fetch(`${this._baseUrl}/users/me`, {
        method: "PATCH",
        headers: this._headers,
        body: JSON.stringify({
          name,
          about
        }),
      })
        .then(this._checkResponse)
    }
  
    editAvatarImage({avatar}) {
      return fetch(`${this._baseUrl}/users/me/avatar`, {
        method: "PATCH",
        headers: this._headers,
        body: JSON.stringify({
          avatar
        }),
      })
        .then(this._checkResponse)
    }
  
    _checkResponse(res) {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Error ${res.status}`);
    }
}

const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/group-12",
  headers: {
    authorization: "d117ca4c-01ef-4f19-abee-387b4e32e69d",
    "Content-Type": "application/json",
  },
});
  
export default api;
  