import { useCallback, useEffect } from "react"
import { MAP__ARROW_CODES } from "../../constans"
import { useAppDispatch } from "../../../../app/hooks"
import { setEntredValue } from "../../store/playGround.slice"
import { useKeyPressElement } from "./hooks"
import { Typography } from "../../../UI"
import TypographyText from "../../../UI/TypographyText"
import styles from "./KeyPressed.module.css"

export interface IKeyPressedProps {
  isTimerOn: boolean
}

const KeyPressed: React.FC<IKeyPressedProps> = (props) => {
  const { isTimerOn } = props
  const keyPressedElem = useKeyPressElement()
  const dispatch = useAppDispatch()

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (MAP__ARROW_CODES.hasOwnProperty(e.key) && isTimerOn) {
        dispatch(setEntredValue(e.key))
      }
    },
    [dispatch, isTimerOn],
  )

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [handleKeyDown])

  return (
    <div>
      <Typography>Your pressed key</Typography>

      <div className={styles.container}>
        <TypographyText>
          Press the key corresponding to the key in "Random key"
        </TypographyText>
        <div className={styles.wrapperIcon}>
          <span className={styles.icon}>{keyPressedElem}</span>
        </div>
      </div>
    </div>
  )
}

export default KeyPressed
