import React, { useEffect, useState } from "react";
import PersonsView from "./personsView";
import { connect } from "react-redux";
import { getPersons } from "../../store/persons";

interface PersonsProps {}

const Persons: React.FC<PersonsProps> = (props: any): any => {
	const [editMode, setEditMode] = useState(false);
	const [personEdit, setPersonEdit] = useState(false);
	const [person, setPerson] = useState("");

	const handleEditMode = () => {
		setEditMode(!editMode);
	};

	const handlePersonEdit = (person) => {
		setPerson(person);
		setPersonEdit(true);
	};

	const handleCancelPersonEdit = () => {
		setPersonEdit(false);
	};

	useEffect(() => {
		props.getData();
	}, []);

	return (
		<PersonsView
			editMode={editMode}
			handleEditMode={handleEditMode}
			personEdit={personEdit}
			person={person}
			setPerson={setPerson}
			handlePersonEdit={handlePersonEdit}
			handleCancelPersonEdit={handleCancelPersonEdit}
		/>
	);
};

const mapDispatchToProps = (dispatch) => {
	return {
		getData: () => {
			dispatch(getPersons());
		},
	};
};

export default connect(null, mapDispatchToProps)(Persons);
