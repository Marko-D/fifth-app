import axios from "axios";

const Api = ({dispatch}) => next => async action => {
  if (action.type !== "apiCallBegan") return next(action);
  next(action);
  const { url, method, data, onSuccess, onError } = action.payload;
  
  try{
    const response = await axios.request({
      url,
      method,
      data
    })
    console.log('response-----------------',response)
    
    dispatch({type: onSuccess, payload: response.data})
  } catch(err){    
    console.log('err-----------------',err)
    dispatch({type: onError, payload: err.message})
  }
};

export default Api;
