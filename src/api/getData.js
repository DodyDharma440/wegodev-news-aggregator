import axios from "axios";

export const getData = ({ type, query }) => {
  const url = `https://newsapi.org/v2/${type}?q=${query}&apiKey=0b1eab85c7934f29b778cb90cf9a7ff3`;
  return axios.get(url);
};
