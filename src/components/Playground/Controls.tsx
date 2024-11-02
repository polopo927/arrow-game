export interface IControlsProps {
  isTimerActive: boolean;
  setIsTimerActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Controls: React.FC<IControlsProps> = ({
  isTimerActive,
  setIsTimerActive,
}) => {
  return (
    <div>
      <button onClick={() => setIsTimerActive(true)} disabled={isTimerActive}>
        Play
      </button>
      <button onClick={() => setIsTimerActive(false)} disabled={!isTimerActive}>
        Pause
      </button>
    </div>
  );
};
