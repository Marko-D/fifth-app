import axios from "axios";

const RoadmapsService = {
	roadmap(): Promise<any> {
		return axios.get("https://qa-lms.emergenetics.com/users/dfc5bf50-d7d6-4b46-96eb-7f2888d421f3/roadmaps/6038e61f-19f2-4b22-9487-f68af6c7c505?eventId=8d79f72b-55fe-48ae-9a76-0a67d57e0aa7");
	},
};

export default RoadmapsService;
