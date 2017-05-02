const BASE_URL = 'http://localhost:8081/api/chat/'

let fakedFetch = (url, info) => {

}

export default class ApiService {
  static login(username, password) {
    let _headers = new Headers();
    _headers.append('Content-Type', 'application/json');

    let form = {
      username,
      password
    };

    try {
      return fetch(BASE_URL + 'create', {
        method: 'POST',
        headers: _headers,
        body: JSON.stringify(form)
      })
        .then((response) => {
          if (response.ok) {
            return response.json()
              .then((responseData) => {
                return responseData;
              });
          }

          return response.json()
            .then((error) => {
              return Promise.reject(error);
            });
        })
        .catch((error) => {
          return Promise.reject(error);
        });
    } catch (error) {
      return Promise.reject(error);
    }
  }
}
