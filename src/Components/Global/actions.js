import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	current: null,
	serchValue: null,
	serviceId: null,
	MainUser: [],
	otherUser: [],
	AddingFriends: [],
	showing: false,
	sentTo: null,
	bookID: null,
	stepID: null,
};

const actions = createSlice({
	name: "myservice",
	initialState,
	reducers: {
		user: (state, { payload }) => {
			state.current = payload;
		},
		allUsers: (state, { payload }) => {
			state.MainUser = payload;
		},
		searching: (state, { payload }) => {
			state.serchValue = payload;
		},
		sendingUser: (state, { payload }) => {
			state.sentTo = payload;
		},
		getServiceId: (state, { payload }) => {
			state.serviceId = payload;

			state.showing = true;
		},

		signOut: (state) => {
			state.current = null;
		},
		shootFriend: (state, { payload }) => {
			state.AddingFriends = payload;
		},
		otherUsers: (state, { payload }) => {
			state.otherUser = payload;
		},
		sendBookID: (state, { payload }) => {
			state.bookID = payload;
		},
		createStepID: (state, { payload }) => {
			state.stepID = payload;
		},
		clearSearch: (state) => {
			state.serchValue = null;
		},
	},
});

export const {
	user,
	signOut,
	searching,
	getServiceId,
	shootFriend,
	allUsers,
	otherUsers,
	sendingUser,
	clearSearch,
	sendBookID,
	createStepID,
} = actions.actions;
export default actions.reducer;
