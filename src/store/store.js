import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counterSlice";
import authReducer from "../features/authSlice";
import { LandingGrabalsState } from "../pages/Landing_grabals/LandingGrabalsState";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    landing_page: LandingGrabalsState.reducer,
  },
});
