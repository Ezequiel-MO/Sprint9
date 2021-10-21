import { configureStore } from "@reduxjs/toolkit";
import userIsSearchingProjectReducer from "../features/UserIsSearchingProjectSlice";
import activeCodeReducer from "../features/ActiveCodeSlice";

export default configureStore({
  reducer: {
    userIsSearchingProject: userIsSearchingProjectReducer,
    activeCode: activeCodeReducer,
  },
});
