class DataSource {
  static searchFilm(keyword) {

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhODQ1ZGNiMjkwZTY3MGUzMmJjNGUwYzMzYzMwMzVlNyIsInN1YiI6IjY1MTNhNThlMDc0NWUxMDBhYzU3ODM4YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QLJqq1Zd1Q4tkxNlJh7qLEtbfaikPr8lTyGLh0HJ4pc'
      }
    };

    return fetch(`https://api.themoviedb.org/3/search/movie?query=${keyword}&include_adult=false`, options)

      .then(response => {
        return response.json();
      })
      .then(responseJson => {
        if (responseJson.results) {
          return Promise.resolve(responseJson.results);
        } else {
          return Promise.reject(`${keyword} is not found`);
        }
      });
  }
}

export default DataSource;