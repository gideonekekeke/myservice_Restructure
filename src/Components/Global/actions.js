import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	current: null,
};

const actions = createSlice({
	name: "myservice",
	initialState,
	reducers: {
		user: (state, { payload }) => {
			state.current = payload;
		},

		signOut: (state) => {
			state.current = null;
		},
	},
});

export const {

	user,
	signOut,
} = actions.actions;
export default actions.reducer;
