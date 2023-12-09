import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import playGroundReducer from "../components/Playground/store/playGround.slice"
export const store = configureStore({
  reducer: {
    playground: playGroundReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
