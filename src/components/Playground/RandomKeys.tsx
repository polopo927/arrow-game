import { useSelector } from "react-redux";
import { IMapArrow } from "../../redux/types";
import { RandomArrow } from "./RandomArrow";
import { WelcomeText } from "./WelcomeText";

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

export const RandomKeys: React.FC<IRandomKeysProps> = ({ isTimerActive }) => {
  const state = useSelector((state) => state.playground);
  return (
    <div>
      <h3>Random keys</h3>
      {state.steps.length === 0 ? (
        <WelcomeText isTimerActive={isTimerActive} />
      ) : (
        <RandomArrow />
      )}
    </div>
  );
};
