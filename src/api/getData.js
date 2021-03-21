import axios from "axios";

export const getData = ({ type, query }) => {
  const url = `https://newsapi.org/v2/${type}?q=${query}&apiKey=63af3285276b4f5babf175dae27c88df`;
  return axios.get(url);
};
