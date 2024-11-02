import { useSelector } from "react-redux";
import { MAP_ARROW } from "../RandomKeys";
import { IMapArrow } from "../../../redux/types";

export const useKeyPressedElement = (): string => {
  const state = useSelector((state) => state.playground);

  if (state.steps.length) {
    const enteredValue = state.steps[state.currentStep - 1].enteredValue;

    if (enteredValue) {
      return MAP_ARROW[enteredValue as keyof IMapArrow];
    }
  }

  return "⌛️";
};
