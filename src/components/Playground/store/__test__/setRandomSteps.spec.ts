import playGroundSlice, {
  initialState,
  setCurrentStep,
  setRandomSteps,
} from "../playGround.slice"

describe("reducer setRandomSteps", () => {
  it("check setRandomSteps", () => {
    const setCurrentStepState = playGroundSlice(initialState, setCurrentStep())
    const setStepState = playGroundSlice(setCurrentStepState, setRandomSteps())
    expect(initialState.steps.length).toEqual(0)
    expect(setStepState.steps.length).toEqual(1)
  })
})
