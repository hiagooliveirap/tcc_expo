import axios from 'axios';

const api = axios.create({
    baseURL: 'http:/10.67.23.142:3000/'
});

export default api;