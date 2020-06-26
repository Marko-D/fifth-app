import axios from "axios";

const BlogService = {
	getRssFeed(): Promise<any> {
		return axios.get("https://www.emergenetics.com/blog/feed/");
	},
};

export default BlogService;
