const apiUrl = 'http://localhost:8888/api';

async function request(url, options) {
  let saveDataRequest = {};
  return fetch(url, options)
    .then((response) => {
      saveDataRequest = response;
      return response.json();
    })
    .then((json) => {
    console.log(json);
      if(saveDataRequest.status >= 200 && saveDataRequest.status < 300) {
        return {
          data: json,
        }
      } else {
        throw {
          status: saveDataRequest.status,
          data: json
        };
      }
    })
}

export default {
  authenticate: {
    login: async(data) => {
      return request(`${apiUrl}/authenticate/logins`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });
    },
    register: async(data) => {
      return fetch(`${apiUrl}/authenticate/registers`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      })
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        return {
          data: json,
        }
      });
    },
    logout: async() => {

    }
  },
  users: {
    get: () => {

    },
    getAll: () => {

    },
    set: () => {

    }
  }
}

/*
  get_users                  GET      ANY      ANY    /api/users
  get_user                   GET      ANY      ANY    /api/users/{user}
  patch_user                 PATCH    ANY      ANY    /api/users/{user}
  post_login                 POST     ANY      ANY    /api/authenticate/logins
  post_register              POST     ANY      ANY    /api/authenticate/registers
  get_artist                 GET      ANY      ANY    /api/artists/{artist}
  get_artists                GET      ANY      ANY    /api/artists
  patch_artist               PATCH    ANY      ANY    /api/artists/{artist}
  put_artists                PUT      ANY      ANY    /api/artists
  delete_artist              DELETE   ANY      ANY    /api/artists/{artist}
  get_location               GET      ANY      ANY    /api/locations/{location}
  get_locations              GET      ANY      ANY    /api/locations
  patch_location             PATCH    ANY      ANY    /api/locations/{location}
  put_locations              PUT      ANY      ANY    /api/locations
  delete_location            DELETE   ANY      ANY    /api/locations/{location}
  get_event                  GET      ANY      ANY    /api/events/{event}
  get_events                 GET      ANY      ANY    /api/events
  put_events                 PUT      ANY      ANY    /api/events
  patch_event                PATCH    ANY      ANY    /api/events/{event}
  delete_event               DELETE   ANY      ANY    /api/events/{event}
  post_search_artists        POST     ANY      ANY    /api/searches/artists
  post_search_events         POST     ANY      ANY    /api/searches/events
  post_search_locations      POST     ANY      ANY    /api/searches/locations
 */