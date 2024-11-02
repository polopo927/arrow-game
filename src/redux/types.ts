export interface IStepsState {
  step: number;
  currentValue: string | null;
  enteredValue: string | null;
  success: boolean | null;
}

export interface IPlaygroundState {
  currentStep: number;
  steps: IStepsState[];
  totalSuccess: number;
  totalUnsuccess: number;
}

export interface IMapArrow {
  ArrowUp: string;
  ArrowDown: string;
  ArrowRight: string;
  ArrowLeft: string;
}
