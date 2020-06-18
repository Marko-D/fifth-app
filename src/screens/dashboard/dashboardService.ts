import axios from "axios";
import API from "../../../config/env";

const endpoint = API.admin;

const DashboardService = {
	connectionGroupInfo(id, params?: any): Promise<any> {
		return axios.get(`${endpoint}dashboard/${id}/connectionGroupInfo`, params);
	},
};

export default DashboardService;
