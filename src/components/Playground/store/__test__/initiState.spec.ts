import playGroundSlice, { initialState } from "../playGround.slice"

describe("initial state", () => {
  it("Check init state", () => {
    const state = playGroundSlice(undefined, { type: "unknowm" })

    expect(state).toEqual(initialState)
  })
})
