import React, { useEffect }  from "react";
import BlogView from "./blogView";
import { connect } from 'react-redux'
import { getRssFeed, searchRssFeed } from "../../store/blog";
import { useForm, Controller } from "react-hook-form";
import ConnectionControl from "../../components/connectionControl";

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
	// FORM
	const onSubmit = (data) => {
		// console.log(data);
		props.searchBlog(data);
	};


	const getData = () => {
		props.getBlogData();
	};

	

	
	useEffect(() => {
		getData()
	}, []);

	// const navRegister = () => {
	// 	props.navigation.navigate("Register");
	// };

	return (
		<>
			<ConnectionControl refresh={getData}/>
			<BlogView  onSubmit={onSubmit} onClear={getData}/>
		</>
	);
};

const mapDispatchToProps = (dispatch) => {
	// console.log("BLOOOG mapDispatchToProps");
	return {
		getBlogData: () => {
			dispatch(getRssFeed());
		},
		searchBlog: (term) => {
			dispatch(searchRssFeed(term));
		}
	};
};

// for redux connect to work this is where we export the component not on function declaration 
// and also components must start with capital letter
// https://stackoverflow.com/questions/44474031/mapstatetoprops-not-getting-called-at-all
export default connect(null, mapDispatchToProps)(Blog)
