import axios from 'axios';

  /* Conexão com a API */
const api = axios.create({
    baseURL: 'http://10.67.23.96:3333'
});

export default api;
