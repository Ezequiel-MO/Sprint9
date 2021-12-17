import { createSlice } from "@reduxjs/toolkit";

export const authRoutesSlice = createSlice({
  name: "authRoutes",
  initialState: {
    authRoutes: {
      hotelProjectForm: false,
      scheduleProjectForm: false,
    },
  },
  reducers: {
    AUTH_ROUTES: (state, action) => {
      state.authRoutes = {
        ...state.authRoutes,
        hotelProjectForm: action.payload.hotelProjectForm,
      };
    },
  },
});

export const { AUTH_ROUTES } = authRoutesSlice.actions;
export const selectAuthRoutes = (state) => state.authRoutes.authRoutes;

export default authRoutesSlice.reducer;
