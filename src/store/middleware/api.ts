// import axios from "axios";

// const Api = ({dispatch}) => next => async action => {
//   if (action.type !== "apiCallBegan") return next(action);
//   next(action);
//   const { url, method, data, onSuccess, onError } = action.payload;
  
//   try{
//     const response = await axios.request({
//       url,
//       method,
//       data
//     })
//     console.log('response-----------------',response)
    
//     dispatch({type: onSuccess, payload: response.data})
//   } catch(err){    
//     console.log('err-----------------',err)
//     dispatch({type: onError, payload: err.message})
//   }
// };

// export default Api;


import axios from 'axios';
import AuthReducer from '../auth';

const Api = ({ getState, dispatch }) => next => async action => {
  // Ignore anything that's not calling the api
  if (action.type !== 'dashboard/getSubmit') {
    return next(action);
  }

  // Grab the token from state
  const { token } = getState().auth.token;

  // Format the request and attach the token.
  const { method, onSuccess, onError, params, url } = action.payload;

  const defaultOptions = {
    headers: {
      Authorization: token ? `JWT ${token}` : '',
    }
  };

  const options = {
    ...defaultOptions,
    ...params
  };

  try {
    const response = await axios[method](url, options);
    dispatch({type: onSuccess, payload: response.data})
  } catch (err) {
    dispatch({type: onError, payload: err.message})
  }

  return next(action);
};

export default Api;