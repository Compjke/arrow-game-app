export interface IPLaygroundStepsState {
  currentValue: string | null
  entredValue: string | null
  step: number
  success: boolean | null
}

export interface IPlaygroundState {
  currentStep: number
  steps: IPLaygroundStepsState[]
  totalCorrect: number
  totalUnCorrect: number
}
