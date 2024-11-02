import { useSelector } from "react-redux";
import { IMapArrow } from "../../redux/types";

export interface IRandomKeysProps {
  isTimerActive: boolean;
}

export const MAP_ARROW: IMapArrow = {
  ArrowUp: "⬆️",
  ArrowDown: "⬇️",
  ArrowRight: "➡️",
  ArrowLeft: "⬅️",
};

export const ARR_ARROW = Object.keys(MAP_ARROW);

export const RandomKeys = ({ isTimerActive }) => {
  const state = useSelector((state) => state.playground);
  return (
    <div>
      {state.steps.map((el, index) => (
        <span key={index}>{MAP_ARROW[el.currentValue as keyof IMapArrow]}</span>
      ))}
    </div>
  );
};
