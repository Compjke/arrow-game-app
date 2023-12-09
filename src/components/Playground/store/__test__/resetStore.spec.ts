import playGroundSlice, {
  initialState,
  resetStore,
  setCurrentStep,
} from "../playGround.slice"

describe("reducer resetStore", () => {
  it("check resetStore", () => {
    const setCurrentStepState = playGroundSlice(initialState, setCurrentStep())
    const resetStoreState = playGroundSlice(setCurrentStepState, resetStore())
    expect(resetStoreState).toEqual(initialState)
  })
})
