const ENDPOINT = "https://64f88fe5824680fd217fc5d8.mockapi.io/";
const LIMIT = 10;

const request = axios.create({
  baseURL: ENDPOINT,
  timeout: 10000,
});