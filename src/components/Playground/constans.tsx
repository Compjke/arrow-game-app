import {
  ArrowCircleUpTwoTone,
  ArrowCircleDownTwoTone,
  ArrowCircleLeftTwoTone,
  ArrowCircleRightTwoTone,
} from "@mui/icons-material"
import { IEndGameConditions, IMapArrowCodes } from "./types"

export const intervalTime: number = 2000

export const MAP__ARROW_CODES: IMapArrowCodes = {
  ArrowUp: <ArrowCircleUpTwoTone fontSize="inherit" />,
  ArrowDown: <ArrowCircleDownTwoTone fontSize="inherit" />,
  ArrowLeft: <ArrowCircleLeftTwoTone fontSize="inherit" />,
  ArrowRight: <ArrowCircleRightTwoTone fontSize="inherit" />,
}

export const ARR_ARROW_CODES = Object.keys(MAP__ARROW_CODES)

export const END_GAME_CONDITIONS: IEndGameConditions = {
  SUCCESS_COUNT: 7,
  UNSUCCESS_COUNT: 3,
}
