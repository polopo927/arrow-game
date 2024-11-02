import { useSelector } from "react-redux";

export const Score = () => {
  const state = useSelector((state) => state.playground);
  return (
    <div>
      <h3>Score</h3>
      <span>Errors: {state.totalUnsuccess}</span>
      <span>Success: {state.totalSuccess}</span>
    </div>
  );
};
