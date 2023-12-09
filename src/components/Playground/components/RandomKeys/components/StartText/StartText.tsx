import styles from "./StartText.module.css"
import stylesParent from "../../RandomKeys.module.css"

import { Vortex } from "react-loader-spinner"
import TypographyText from "../../../../../UI/TypographyText"

export interface IStartTextProps {
  isTimerOn: boolean
}

const StartText: React.FC<IStartTextProps> = (props) => {
  const { isTimerOn } = props

  if (isTimerOn) {
    return (
      <div className={stylesParent.wrapper}>
        <span className={stylesParent.icon}>
          <Vortex width={30} height={30} />
        </span>
      </div>
    )
  }
  return (
    <TypographyText>
      Click "Play" to start the game and wait for the first arrow to appear
    </TypographyText>
  )
}

export default StartText
