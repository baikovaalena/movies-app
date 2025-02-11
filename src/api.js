import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    // accept: "application/json",
    Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
  },
});

export async function getMoviesList() {
  const response = await instance.get("discover/movie");
  return response.data;
}
