import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
  },
});

export async function getMoviesList(selectedGenres, endDate, startDate) {
  const selectedGenresToString = selectedGenres.join(",");

  const response = await instance.get("discover/movie", {
    params: {
      with_genres: selectedGenresToString,
      "primary_release_date.gte": startDate,
      "primary_release_date.lte": endDate,
    },
  });
  return response.data;
}

export async function getGenres() {
  const response = await instance.get("/genre/movie/list");
  return response.data?.genres;
}
