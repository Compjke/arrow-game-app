import styles from "./Controls.module.css"

import { Pause, PlayArrow } from "@mui/icons-material"
import { MyButton } from "../../../UI"

export interface IControlsProps {
  isTimerOn: boolean
  setIsTimerOn: React.Dispatch<React.SetStateAction<boolean>>
}

const Controls: React.FC<IControlsProps> = (props) => {
  const { isTimerOn, setIsTimerOn } = props

  return (
    <div>
      <MyButton
        role="play"
        startIcon={<PlayArrow />}
        onClick={() => setIsTimerOn(true)}
        disabled={isTimerOn}
        className={styles.controlBrn}
      >
        Play
      </MyButton>
      <MyButton
        className={styles.controlBrn}
        role="pause"
        startIcon={<Pause />}
        onClick={() => setIsTimerOn(false)}
        disabled={!isTimerOn}
      >
        Pause
      </MyButton>
    </div>
  )
}

export default Controls
