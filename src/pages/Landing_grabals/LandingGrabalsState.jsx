import { createSlice } from "@reduxjs/toolkit";

export const LandingGrabalsState = createSlice({
  name: "landinggrabals",
  initialState: {
    form_modal: "login",
  },
  reducers: {
    SetFormModal: (state, action) => {
      state.form_modal = action.payload;
    },
  },
});

export const { SetFormModal } = LandingGrabalsState.actions;
export default LandingGrabalsState.reducer;