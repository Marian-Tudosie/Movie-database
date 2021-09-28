import axios from 'axios';

const apiKey = `eb7eb94197a4e5280a942b4a5d94f674`

export const searchMovies = (query) => {
  const URL = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}&language=en-US`
  return axios.get(URL)
}

export const searchActors = (query) => {
  const URL = `https://api.themoviedb.org/3/search/person?api_key=${apiKey}&query=${query}&language=en-US`
  return axios.get(URL)
}
