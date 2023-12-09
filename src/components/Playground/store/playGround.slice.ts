import { createSlice } from "@reduxjs/toolkit"
import { IPlaygroundState } from "./types"
import { ARR_ARROW_CODES } from "../constans"

export const initialState: IPlaygroundState = {
  currentStep: 0,
  steps: [],
  totalCorrect: 0,
  totalUnCorrect: 0,
}

export const playGroundSlice = createSlice({
  name: "playground",
  initialState,
  reducers: {
    setCurrentStep: (state) => {
      state.currentStep += 1
    },
    setRandomSteps: (state) => {
      const random = Math.floor(Math.random() * ARR_ARROW_CODES.length)
      state.steps.push({
        currentValue: ARR_ARROW_CODES[random],
        entredValue: null,
        step: state.currentStep,
        success: null,
      })
    },
    setEntredValue: (state, action) => {
      if (state.steps.length) {
        const step = state.steps[state.currentStep - 1]
        const isCorrectEntredValue = step.currentValue === action.payload
        if (step.entredValue === null) {
          state.steps[state.currentStep - 1] = {
            ...step,
            entredValue: action.payload,
            success: isCorrectEntredValue,
          }
        }
        if (isCorrectEntredValue) {
          state.totalCorrect += 1
        } else {
          state.totalUnCorrect += 1
          state.totalCorrect = 0
        }
      } else {
        return
      }
    },
    setUnSuccess: (state) => {
      if (state.steps.length > 0) {
        const step = state.steps[state.currentStep - 1]
        if (step.entredValue === null) {
          state.totalCorrect = 0
          state.totalUnCorrect += 1
          state.steps[state.currentStep - 1] = {
            ...step,
            success: false,
          }
        }
      }
    },
    resetStore: () => initialState,
  },
})

export const {
  resetStore,
  setCurrentStep,
  setRandomSteps,
  setEntredValue,
  setUnSuccess,
} = playGroundSlice.actions
export default playGroundSlice.reducer
