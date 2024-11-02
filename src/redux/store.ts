import { configureStore } from "@reduxjs/toolkit";
import playground from "./slices/playgoundSlice";

export const store = configureStore({
  reducer: {
    playground,
  },
});
