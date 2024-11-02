export interface IResultMessageProps {
  isEndGame: boolean;
}

export const ResultMessage: React.FC<IResultMessageProps> = ({ isEndGame }) => {
  return isEndGame ? (
    <span>
      Поздравляем! <br /> Вы победили
    </span>
  ) : (
    <span>
      Поражение! <br /> Вы проиграли
    </span>
  );
};
