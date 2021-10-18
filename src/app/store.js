import { configureStore } from "@reduxjs/toolkit";
import userIsSearchingProjectReducer from "../features/UserIsSearchingProjectSlice";

export default configureStore({
  reducer: {
    userIsSearchingProject: userIsSearchingProjectReducer,
  },
});
