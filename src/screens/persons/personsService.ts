import axios from "axios";

const PersonsService = {
	persons(): Promise<any> {
		return axios.get("https://jsonplaceholder.typicode.com/users/");
	},
};

export default PersonsService;
