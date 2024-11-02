import { useSelector } from "react-redux";
import { IMapArrow, IStepsState } from "../../redux/types";
import cls from "../../styles/randomArrow.module.css";
import { MAP_ARROW } from "./RandomKeys";

export const RandomArrow = () => {
  const state = useSelector((state) => state.playground);

  const getStylesRandomKeys = (el: IStepsState): string => {
    if (el.success && el.success !== null) {
      return cls.iconSuccess;
    }

    if (!el.success && el.success !== null) {
      return cls.iconUnsuccess;
    }

    return cls.icon;
  };
  return (
    <div>
      {state.steps.map((el: IStepsState) => (
        <span key={el.step} className={getStylesRandomKeys(el)}>
          {MAP_ARROW[el.currentValue as keyof IMapArrow]}
        </span>
      ))}
    </div>
  );
};
