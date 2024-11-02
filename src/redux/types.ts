export interface IStepsState {
  currentValue: string;
}

export interface IPlaygroundState {
  currentStep: number;
  steps: IStepsState[];
}

export interface IMapArrow {
  ArrowUp: string;
  ArrowDown: string;
  ArrowRight: string;
  ArrowLeft: string;
}
