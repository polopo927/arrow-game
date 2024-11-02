import { useDispatch } from "react-redux";
import { resetStore } from "../../redux/slices/playgoundSlice";
import { ResultMessage } from "./ResultMessage";

export interface IModalProps {
  setIsShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  isEndGame: boolean;
}

export const Modal: React.FC<IModalProps> = ({ isEndGame, setIsShowModal }) => {
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(resetStore());
    setIsShowModal(false);
  };
  return (
    <div>
      <h3>Modal</h3>
      <ResultMessage isEndGame={isEndGame} />
      <button onClick={handleClose}>Start New Game</button>
    </div>
  );
};
