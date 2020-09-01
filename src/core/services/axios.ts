import axios from 'axios';

import ENV from '../../../config/env';

const client = (env, token = null) => {
    const defaultOptions = {
        headers: {
          "Authorization": token ? `JWT ${token}` : '',
          "Accept": "application/json, text/plain, */*",
          "Content-Type": "application/json; charset=utf-8"
        }
    };

    const urlWihtEnv = ENV[env];
    
    return {
        get: (url, options = {}) => axios.get(`${urlWihtEnv}${url}`, { ...defaultOptions, ...options }),
        post: (url, data, options = {}) => axios.post(`${urlWihtEnv}${url}`, data, { ...defaultOptions, ...options }),
        put: (url, data, options = {}) => axios.put(`${urlWihtEnv}${url}`, data, { ...defaultOptions, ...options }),
        delete: (url, options = {}) => axios.delete(`${urlWihtEnv}${url}`, { ...defaultOptions, ...options }),
    };
};

export default client;

// This is how to use it 
// const request = client('MY SECRET TOKEN');
// request.get(PAGES_URL);