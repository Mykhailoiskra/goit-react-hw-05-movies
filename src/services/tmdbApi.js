import axios from "axios";

const KEY = "2bd63387ebd1c73ba3770ca5b24c8e07";
const BASE_URL = "https://api.themoviedb.org/3/";

export async function getTrendingMovies() {
  return await axios
    .get(`${BASE_URL}trending/movie/week?api_key=${KEY}`)
    .then((res) => res.data)
    .catch((err) => console.log(err));
}

export async function getMovieById(id) {
  return await axios
    .get(`${BASE_URL}movie/${id}?api_key=${KEY}&language=en-US`)
    .then((res) => res.data)
    .catch((err) => console.log(err));
}

export async function getCast(id) {
  return await axios
    .get(`${BASE_URL}movie/${id}/credits?api_key=${KEY}&language=en-US`)
    .then((res) => res.data)
    .catch((err) => console.log(err));
}

export async function getReviews(id) {
  return await axios
    .get(`${BASE_URL}movie/${id}/reviews?api_key=${KEY}&language=en-US`)
    .then((res) => res.data)
    .catch((err) => console.log(err));
}

export async function findMovie(query, page) {
  return await axios
    .get(
      `${BASE_URL}search/movie?api_key=${KEY}&language=en-US&page=${page}&query=${query}`
    )
    .then((res) => res.data)
    .catch((err) => console.log(err));
}
