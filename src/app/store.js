import { configureStore } from "@reduxjs/toolkit";
import userIsSearchingProjectReducer from "../features/UserIsSearchingProjectSlice";
import activeCodeReducer from "../features/ActiveCodeSlice";
import authRoutesReducer from "../features/authRoutesSlice";

export default configureStore({
  reducer: {
    userIsSearchingProject: userIsSearchingProjectReducer,
    activeCode: activeCodeReducer,
    authRoutes: authRoutesReducer,
  },
});
