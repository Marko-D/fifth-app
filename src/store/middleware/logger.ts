const Logger = params => store => next => action => {
	console.log("Environment: ", params);
  next(action);
};

export default Logger;