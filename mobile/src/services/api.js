import axios from 'axios';

const api = axios.create({
  baseURL: 'http://?.?.?.?:3333', // COLOQUE SEU IP
});

export default api;
