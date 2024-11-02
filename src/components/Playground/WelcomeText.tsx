export interface IWelcomeTextProps {
  isTimerActive: boolean;
}

export const WelcomeText: React.FC<IWelcomeTextProps> = ({ isTimerActive }) => {
  if (isTimerActive) {
    return <span>Loading...</span>;
  }
  return (
    <span>
      Нажмите "Play" для старта игры и ждите первую стрелочку для нажатия
    </span>
  );
};
