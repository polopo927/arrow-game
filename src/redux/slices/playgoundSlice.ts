import { createSlice } from "@reduxjs/toolkit";
import { IPlaygroundState } from "../types";
import { ARR_ARROW } from "../../components/Playground/RandomKeys";

export const initialState: IPlaygroundState = {
  currentStep: 0,
  steps: [],
};

export const playgoundSlice = createSlice({
  name: "playground",
  initialState,
  reducers: {
    setCurrentStep: (state) => {
      state.currentStep += 1;
    },

    setSteps: (state) => {
      const randomKeys = Math.floor(Math.random() * ARR_ARROW.length);
      state.steps.push({
        currentValue: ARR_ARROW[randomKeys],
      });
    },
  },
});

export const { setCurrentStep, setSteps } = playgoundSlice.actions;
export default playgoundSlice.reducer;
