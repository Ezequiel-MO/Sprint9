import { createSlice } from "@reduxjs/toolkit";

export const userIsSearchingProjectSlice = createSlice({
  name: "userIsSearchingProject",
  initialState: {
    userIsSearchingProject: false,
  },
  reducers: {
    SET_UserIsSearchingProject: (state, action) => {
      state.userIsSearchingProject = action.payload;
    },
  },
});

export const { SET_UserIsSearchingProject } =
  userIsSearchingProjectSlice.actions;

export const selectUserIsSearchingProject = (state) =>
  state.userIsSearchingProject.userIsSearchingProject;

export default userIsSearchingProjectSlice.reducer;
