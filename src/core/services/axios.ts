// import axios from "axios";

import ENV from '../../../config/env';

// // For common config
// const setHeaders = (token) => {
//   axios.defaults.headers.post["Content-Type"] = "application/json";
//   axios.defaults.headers.common['Authorization'] = token;
// }
  
// const lmsInstance = axios.create({
//     baseURL: ENV.lms
// });

// // const customAxios = axios.create({
// //     baseURL: 'https://some-custom-domain.com/api/'
// // });

// export {
//   setHeaders,
//   lmsInstance,
//   // customAxios
// };


import axios from 'axios';

const client = (env, token = null) => {
    const defaultOptions = {
        headers: {
            Authorization: token ? `JWT ${token}` : '',
        },
    };
    let urlWihtEnv = ENV[env]
    
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