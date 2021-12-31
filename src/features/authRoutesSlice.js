import { createSlice } from "@reduxjs/toolkit";

export const authRoutesSlice = createSlice({
  name: "authRoutes",
  initialState: {
    authRoutes: {
      hotelProjectForm: true,
    },
  },
  reducers: {
    AUTH_ROUTES: (state, action) => {
      state.authRoutes = {
        ...state.authRoutes,
        ...action.payload,
      };
    },
  },
});

export const { AUTH_ROUTES } = authRoutesSlice.actions;
export const selectAuthRoutes = (state) => state.authRoutes.authRoutes;

export default authRoutesSlice.reducer;
