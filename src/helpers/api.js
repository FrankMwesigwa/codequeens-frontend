import axios from 'axios';

const token = window.localStorage.getItem("token");

const axiosIntance = axios.create({
  baseURL: 'http://localhost:5000',
  headers: {
    Authorization: token ? `Bearer ${token}` : "",
  },
});

export default axiosIntance;