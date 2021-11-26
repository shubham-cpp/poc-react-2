import { configureStore } from "@reduxjs/toolkit";
import admissionReducer from "../features/Admission/admissionSlice";

export const store = configureStore({
  reducer: {
    admission: admissionReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
