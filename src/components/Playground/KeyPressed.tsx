import { useCallback, useEffect } from "react";
import { MAP_ARROW } from "./RandomKeys";
import { setEnteredValue } from "../../redux/slices/playgoundSlice";
import { useDispatch } from "react-redux";
import { useKeyPressedElement } from "./hooks/hooks";

export interface IKeyPressedProps {
  isTimerActive: boolean;
}

export const KeyPressed: React.FC<IKeyPressedProps> = ({ isTimerActive }) => {
  const dispatch = useDispatch();
  const keyPressedElement = useKeyPressedElement();
  const handleKeydown = useCallback(
    (e: KeyboardEvent) => {
      if (MAP_ARROW.hasOwnProperty(e.key) && isTimerActive) {
        dispatch(setEnteredValue(e.key));
      }
    },
    [dispatch, isTimerActive],
  );
  useEffect(() => {
    window.addEventListener("keydown", handleKeydown);

    return () => window.removeEventListener("keydown", handleKeydown);
  });
  return (
    <div>
      <h3>KeyPressed</h3>
      <span>{keyPressedElement}</span>
    </div>
  );
};
