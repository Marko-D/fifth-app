import axios, { AxiosRequestConfig, AxiosInstance } from "axios";
// import { useSelector } from 'react-redux';

// class AuthService {
//   token = useSelector((state) => state.auth.token);

//   interceptor = () => {
//     axios.interceptors.request.use((config: AxiosRequestConfig) => {
//       config.headers.authorization = `JWT ${this.token}`;
//       return config;
//     }), error => {
//       return Promise.reject(error)
//     }
//   }

// 	init = () => {
// 		this.setInterceptors();
// 	};

// 	setInterceptors = () => {
// 		this.interceptor()
//   };
// }

// export default new AuthService;

// import axios, { AxiosRequestConfig, AxiosInstance } from 'axios'
// import { useSelector } from 'react-redux';

// const token = useSelector((state) => state.auth.token);

const requestInterceptor = (token) => {
	axios.interceptors.request.use((config: AxiosRequestConfig) => {
		if (!!token) {
			let headers = {
				"Authorization": `JWT ${token}`,
				"Accept": "application/json, text/plain, */*",
				"Content-Type": "application/json; charset=utf-8",
				"Access-Control-Allow-Origin": "*",
				"Access-Control-Allow-Headers": "*",
			};

			axios.defaults.headers.common = headers;
		} else {
			axios.defaults.headers.common["Authorization"] = null;
		}
		return config;
	}),
		(error) => {
			return Promise.reject(error);
		};
};

const responseInterceptor = () => {
	axios.interceptors.response.use(
		(response) => {
			return response;
		},
		(error) => {
      console.log('responseInterceptor errrrr', JSON.stringify(error, null, "    ") );

			if (401 === error.response.status) {
				return {
					title: "Session Expired",
					text:
						"Your session has expired. Would you like to be redirected to the login page?",
					type: "warning",
					showCancelButton: true,
					confirmButtonColor: "#DD6B55",
					confirmButtonText: "Yes",
					closeOnConfirm: false,
				};
			} else {
				return Promise.reject(error);
			}
		}
	);
};

const AuthService = {
	init(token) {
		this.setInterceptors(token);
	},

	setInterceptors(token) {
		requestInterceptor(token);
		// responseInterceptor();
	},

	authDefaults(token) {
    if (!!token) {
			let headers = {
				"Authorization": `JWT ${token}`,
				"Accept": "application/json, text/plain, */*",
				"Content-Type": "application/json; charset=utf-8"
			};

			axios.defaults.headers.common = headers;
		} else {
			axios.defaults.headers.common["Authorization"] = null;
		}


		// return axios.create({
		// 	headers: {
		// 		Authorization: `JWT ${token}`,
		// 	},
		// });
	},
};

export default AuthService;
