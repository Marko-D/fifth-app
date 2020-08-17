import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  translationsLoaded: null,
  translations: {}
};

const InitializeReducer = createSlice({
	name: "initialize",
	initialState,
	reducers: {
		translationsLoaded: (state: any, action: any) => {
			console.log('translationsLoaded action-------------',action)
			state.translationsLoaded = action.payload;
    },
    translations: (state: any, action: any) => {
			console.log('translationsLoaded action-------------',action)
			state.translations = action.payload;
		},
		translationsRemoved: (state: any) => {
			console.log('translationsRemoved state-------------',state)
			state.translationsLoaded = false;
		},
	},
});

export const { translations, translationsLoaded, translationsRemoved } = InitializeReducer.actions;
export default InitializeReducer.reducer;
