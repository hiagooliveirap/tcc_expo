import axios from 'axios';

  /* Conexão com a API */
const api = axios.create({
    baseURL: 'http://172.16.0.51:3333'
});

export default api;
