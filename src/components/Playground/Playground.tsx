import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { Controls } from "./Controls";
import {
  setCurrentStep,
  setSteps,
  setUnsuccess,
} from "../../redux/slices/playgoundSlice";
import { RandomKeys } from "./RandomKeys";
import { KeyPressed } from "./KeyPressed";
import { Score } from "./Score";
import { Modal } from "../modal/Modal";

export const Playground: React.FC = () => {
  const state = useSelector((state) => state.playground);
  const dispatch = useDispatch();

  const [isTimerActive, setIsTimerActive] = useState<boolean>(false);
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const [isEndGame, setIsEndGame] = useState<boolean>(false);

  const timerId = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (isTimerActive) {
      timerId.current = setInterval(() => {
        dispatch(setUnsuccess());
        dispatch(setCurrentStep());
        dispatch(setSteps());
      }, 2000);
    }

    return () => {
      if (timerId.current) {
        clearInterval(timerId.current);
      }
    };
  }, [isTimerActive, dispatch]);

  useEffect(() => {
    const isSuccess = state.totalSuccess === 3;
    const isUnsuccess = state.totalUnsuccess === 3;

    isSuccess && setIsEndGame(true);
    isUnsuccess && setIsEndGame(false);

    if (isSuccess || isUnsuccess) {
      setIsShowModal(true);
      setIsTimerActive(false);
    }
  }, [state.totalSuccess, state.totalUnsuccess]);

  return (
    <div>
      {state.currentStep}
      <Controls
        isTimerActive={isTimerActive}
        setIsTimerActive={setIsTimerActive}
      />
      <RandomKeys isTimerActive={isTimerActive} />
      <KeyPressed isTimerActive={isTimerActive} />
      <Score />
      {isShowModal && (
        <Modal setIsShowModal={setIsShowModal} isEndGame={isEndGame} />
      )}
    </div>
  );
};
