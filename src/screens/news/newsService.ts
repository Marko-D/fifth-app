import axios from "axios";
import API from "../../../config/env";

const endpoint = API.admin;

const NewsService = {
  // https://qa-ems.emergenetics.com/news?CurrentPage=1&PageSize=10&Status=Active&Types=News
	news(params?: any): Promise<any> {
		return axios.get(`${endpoint}/news`);
	},
};

export default NewsService;
