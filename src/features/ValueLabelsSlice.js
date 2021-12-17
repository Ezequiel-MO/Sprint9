import { createSlice } from "@reduxjs/toolkit";

export const valueLabelsSlice = createSlice({
  name: "valueLabels",
  initialState: {
    valueLabels: {
      hotel: [],
      morningEvent: [],
      lunch: [],
      afternoonEvent: [],
      dinner: [],
    },
  },
  reducers: {
    SET_ValueLabels: (state, action) => {
      state.valueLabels =
        action.payload.name === "hotel"
          ? {
              ...state.valueLabels,
              hotel: action.payload.newValueLabels,
            }
          : action.payload.name === "morningEvent"
          ? {
              ...state.valueLabels,
              morningEvent: action.payload.newValueLabels,
            }
          : action.payload.name === "lunch"
          ? {
              ...state.valueLabels,
              lunch: action.payload.newValueLabels,
            }
          : action.payload.name === "afternoonEvent"
          ? {
              ...state.valueLabels,
              afternoonEvent: action.payload.newValueLabels,
            }
          : action.payload.name === "dinner"
          ? {
              ...state.valueLabels,
              dinner: action.payload.newValueLabels,
            }
          : state.valueLabels;
    },
  },
});

export const { SET_ValueLabels } = valueLabelsSlice.actions;
export const selectValueLabels = (state) => state.valueLabels.valueLabels;

export default valueLabelsSlice.reducer;
