import { useAppDispatch, useAppSelector } from "../../../../app/hooks"
import TypographyHeader from "../../../UI/Typography/Typography"

import RandomArrows from "./components/RandomArrow/RandomArrows"
import StartText from "./components/StartText/StartText"
import styles from "./RandomKeys.module.css"
export interface IRandomKeysProps {
  isTimerOn: boolean
}

const RandomKeys: React.FC<IRandomKeysProps> = (props) => {
  const { isTimerOn } = props
  const dispatch = useAppDispatch()
  const { steps } = useAppSelector((s) => s.playground)

  return (
    <div className={styles.randomKeysWrapper}>
      <TypographyHeader>Random key</TypographyHeader>
      {steps.length === 0 ? (
        <StartText isTimerOn={isTimerOn} />
      ) : (
        <RandomArrows />
      )}
    </div>
  )
}

export default RandomKeys
