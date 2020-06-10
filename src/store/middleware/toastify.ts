import Toast from 'react-native-simple-toast';

const Toastify = store => next => action => {
  let a = action.type;
  let isError = a.includes("Error");

  if (isError){
    Toast.show(action.payload);
    next(action)
  } else {
    next(action)
  }
}

export default Toastify;