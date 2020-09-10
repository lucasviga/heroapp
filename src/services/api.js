import axios from 'axios';

const api = axios.create({
  baseURL: 'https://superheroapi.com/api/2280041122256491/',
});

export default api;
