import { useAppSelector } from "../../../../app/hooks"
import { MAP__ARROW_CODES } from "../../constans"
import { IMapArrowCodes } from "../../types"
import HourglassSpinner from "../Spinners/HourglassSpinner"
export const useKeyPressElement = (): string | JSX.Element => {
  const { steps, currentStep } = useAppSelector((s) => s.playground)

  if (steps.length) {
    const entrelValue = steps[currentStep - 1].entredValue
    if (entrelValue) {
      return MAP__ARROW_CODES[entrelValue as keyof IMapArrowCodes]
    }
  }

  return <HourglassSpinner />
  // "⌛"
}
