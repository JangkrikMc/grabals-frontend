import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counterSlice";
import { LandingGrabalsState } from "../pages/Landing_grabals/LandingGrabalsState";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    landing_page: LandingGrabalsState.reducer,
  },
});
