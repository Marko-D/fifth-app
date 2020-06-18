import axios, { AxiosRequestConfig, AxiosInstance } from 'axios'

const instance = axios.create({
  baseURL: '',

});

const token = null;

instance.defaults.headers.common['Authorization'] = token;

export default instance