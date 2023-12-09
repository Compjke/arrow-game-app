import { ARR_ARROW_CODES } from "../../constans"
import playGroundSlice, {
  initialState,
  setEntredValue,
  setCurrentStep,
  setRandomSteps,
} from "../playGround.slice"

describe("reducer setEntredValue", () => {
  it("check setEntredValue", () => {
    const someEntredValue = ARR_ARROW_CODES[0]
    const setCurrentStepState = playGroundSlice(initialState, setCurrentStep())
    const setStepState = playGroundSlice(setCurrentStepState, setRandomSteps())

    const setEntredValueState = playGroundSlice(
      setStepState,
      setEntredValue(someEntredValue),
    )

    expect(setStepState.steps[0].entredValue).toBe(null)
    expect(setEntredValueState.steps[0].entredValue).toBe(someEntredValue)
  })

  it("chekTotalSuccessFull & totalUnSuccessFuf", () => {
    const setCurrentStepState = playGroundSlice(initialState, setCurrentStep())
    const setStepState = playGroundSlice(setCurrentStepState, setRandomSteps())
    const setEntredValueState = playGroundSlice(
      setStepState,
      setEntredValue(setStepState.steps[0].currentValue),
    )
    expect(setStepState.totalCorrect).toBe(0)
    expect(setStepState.totalUnCorrect).toBe(0)
    expect(setEntredValueState.totalCorrect).toBe(1)
    expect(setEntredValueState.totalUnCorrect).toBe(0)
  })
})
