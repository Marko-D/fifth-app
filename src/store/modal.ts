// import {combineReducers} from 'redux';
// import {createReducer} from '@reduxjs/toolkit';

// const showModal = ({id, modalProps = {}}) => {
//   return dispatch => {
//     dispatch({
//       type: 'MODAL__SET_ID',
//       payload: id,
//     });

//     dispatch({
//       type: 'MODAL__SET_MODAL_PROPS',
//       payload: modalProps,
//     });
//   };
// };

// const hideModal = () => {
//   return dispatch => {
//     dispatch({
//       type: 'MODAL__SET_ID',
//       payload: '',
//     });

//     dispatch({
//       type: 'MODAL__SET_MODAL_PROPS',
//       payload: {},
//     });
//   };
// };

// export const ModalActions = {
//   showModal,
//   hideModal,
// };

// const ID_INITIAL_STATE = '';

// export const id = createReducer(ID_INITIAL_STATE, {
//   ['MODAL__SET_ID'](state, {payload}) {
//     return payload;
//   },
// });

// const MODAL_PROPS_INITIAL_STATE = {};

// export const modalProps = createReducer(MODAL_PROPS_INITIAL_STATE, {
//   ['MODAL__SET_MODAL_PROPS'](state, {payload}) {
//     return payload;
//   },
// });

// export const ModalReducer = combineReducers({
//   id,
//   modalProps,
// });

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	
};

const ModalReducer = createSlice({
	name: "modal",
	initialState,
	reducers: {
		showModal: (state: any, action: any) => {
      debugger
			console.log('tokenAdded action-------------',action)
      state.id = action.payload.id;
      state.modalProps = action.payload.modalProps
		},
		hideModal: (state: any, action: any) => {
			console.log('tokenAdded action-------------',action)
      state.id = '';
      state.modalProps = {}
		},
	},
});

export const { showModal, hideModal } = ModalReducer.actions;
export default ModalReducer.reducer;


// THUNK ASYNC FUNCTIONS
// Regular THUNK function
export const openModal = (modal) => async (	dispatch,	getState ) => {
	try {
		// const userId = getState().modal.currentUser.id;
		dispatch(showModal(modal));
	} catch (error) {
		console.log('errrrorr modal')
	}
};