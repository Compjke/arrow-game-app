import playGroundSlice, {
  initialState,
  setCurrentStep,
  setRandomSteps,
  setUnSuccess,
} from "../playGround.slice"

describe("reducer SetUnsuccess", () => {
  it("check SetUnsuccess", () => {
    const setCurrentStepState = playGroundSlice(initialState, setCurrentStep())
    const setStepState = playGroundSlice(setCurrentStepState, setRandomSteps())
    const setUnsuccessState = playGroundSlice(setStepState, setUnSuccess())

    expect(setUnsuccessState.totalUnCorrect).toBe(1)
    expect(setUnsuccessState.steps[0].success).toBe(false)
  })
})
