import playGroundSlice, {
  initialState,
  setCurrentStep,
} from "../playGround.slice"

describe("reducer SetCurrentStep", () => {
  it("check SetCurrentStep", () => {
    const setCurrentStepState = playGroundSlice(initialState, setCurrentStep())

    expect(initialState.currentStep).toBe(0)
    expect(setCurrentStepState.currentStep).toEqual(1)
  })
})
