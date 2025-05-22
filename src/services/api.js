import axios from 'axios';

const api = axios.create({
  baseURL: 'http://storyhubapi-xy3q.onrender.com',
});

export default api; 