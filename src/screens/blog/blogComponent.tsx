import React, { useEffect }  from "react";
import BlogView from "./blogView";
import { connect } from 'react-redux'
import { getRssFeed } from "../../store/blog";

interface BlogProps {}
// interface User {
// 	username: string;
// 	password: string;
// }
// interface OptionsData {
// 	method: any;
// 	url: string;
// 	data: User;
// }
const Blog: React.FC<BlogProps> = (props: any): any => {
	
	useEffect(() => {
		props.getData();
	}, []);

	// const navRegister = () => {
	// 	props.navigation.navigate("Register");
	// };

	return (
		<BlogView  />
	);
};

const mapDispatchToProps = (dispatch) => {
	console.log("BLOOOG mapDispatchToProps");
	return {
		getData: () => {
			dispatch(getRssFeed());
		},
	};
};

// for redux connect to work this is where we export the component not on function declaration 
// and also components must start with capital letter
// https://stackoverflow.com/questions/44474031/mapstatetoprops-not-getting-called-at-all
export default connect(null, mapDispatchToProps)(Blog)
