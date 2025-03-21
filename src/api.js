import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
  },
});

export async function getMoviesList(
  selectedGenres,
  endDate,
  startDate,
  sortBy,
) {
  const selectedGenresToString = selectedGenres.join(",");

  const response = await instance.get("discover/movie", {
    params: {
      with_genres: selectedGenresToString,
      "primary_release_date.gte": startDate,
      "primary_release_date.lte": endDate,
      sort_by: sortBy,
      "vote_count.gte": 200,
    },
  });

  return response.data;
}

export async function getGenres() {
  const response = await instance.get("/genre/movie/list");
  return response.data?.genres;
}

export async function getDetails(id) {
  const response = await instance.get(`/movie/${id}`, {
    params: {
      append_to_response: "credits",
    },
  });
  return response.data;
}
