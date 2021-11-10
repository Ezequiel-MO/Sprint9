import { createSlice } from "@reduxjs/toolkit";

export const activeCodeSlice = createSlice({
  name: "activeCode",
  initialState: {
    activeCode: "Enter your code",
  },
  reducers: {
    SET_ActiveCode: (state, action) => {
      state.activeCode = action.payload;
    },
  },
});

export const { SET_ActiveCode } = activeCodeSlice.actions;
export const selectActiveCode = (state) => state.activeCode.activeCode;

export default activeCodeSlice.reducer;
