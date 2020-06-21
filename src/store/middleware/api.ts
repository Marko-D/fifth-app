import axios from "axios";
import * as actions from "../api";

const Api = ({ dispatch, getState }) => next => async action => {

  if (action.type !== actions.apiRequestStart.type) {
    return next(action);
  }
  
	const { url, method, data, onStart, onSuccess, onError, params } = action.payload;
  
  if(onStart){
    dispatch({ type: onStart });
  }
  
  next(action);

	try {
    // Grab the token from state
    const token = getState().auth.token;
    const defaultOptions = {
      headers: {
        Authorization: token ? `JWT ${token}` : '',
        "Accept": "application/json, text/plain, */*",
        "Content-Type": "application/json; charset=utf-8"
      }
    };
    
    const options = {
      ...defaultOptions,
      ...data,
      ...params
    };

    const response = await axios[method](url, options);

    dispatch(actions.apiRequestSuccess(response.data.payload));
    if(onSuccess){
      dispatch({ type: onSuccess, payload: response.data.payload });
    }
	} catch (error) {
    dispatch(actions.apiRequestError(error.message));
    if(onError){
      dispatch({ type: onError, payload: error.message });
    }
	}
};

export default Api;

// import axios from 'axios';
// import AuthReducer from '../auth';

// const Api = ({ getState, dispatch }) => next => async action => {
//   // Ignore anything that's not calling the api
//   if (action.type !== actions.apiRequestStart.type) {
//     return next(action);
//   }

//   // Grab the token from state
//   const token  = getState().auth.token;
//   if (!!token) {
//     let headers = {
//       "Authorization": `JWT ${token}`,
//     };

//     axios.defaults.headers.common = headers;
//   } else {
//     axios.defaults.headers.common["Authorization"] = null;
//   }

//   // Format the request and attach the token.
//   const { url, method, data, onSuccess, onError, params } = action.payload;

//   // const defaultOptions = {
//   //   headers: {
//   //     Authorization: token ? `JWT ${token}` : '',
//   //   }
//   // };

//   const options = {
//     // ...defaultOptions,
//     ...params
//   };

//   try {
//     // const response = await axios[method](url, data, options);
//     const response = await axios.request({
//       url,
//       method,
//       data,
//     });
//     dispatch({type: onSuccess, payload: response.data})
//   } catch (err) {
//     dispatch({type: onError, payload: err.message})
//   }

//   return next(action);
// };

// export default Api;
