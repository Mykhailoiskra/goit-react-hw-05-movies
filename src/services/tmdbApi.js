const KEY = "2bd63387ebd1c73ba3770ca5b24c8e07";
const BASE_URL = "https://api.themoviedb.org/3/";

export async function getTrendingMovies() {
  const response = await fetch(`${BASE_URL}trending/movie/week?api_key=${KEY}`);

  return response.ok
    ? response.json()
    : Promise.reject(new Error("Something is wrong"));
}

export async function getMovieById(id) {
  const response = await fetch(
    `${BASE_URL}movie/${id}?api_key=${KEY}&language=en-US`
  );

  return response.ok
    ? response.json()
    : Promise.reject(new Error("Something is wrong"));
}
