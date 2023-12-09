import styles from "./ResMessage.module.css"

import TypographyText from "../../../../UI/TypographyText"

export interface IResulMessageProps {
  isWon: boolean
}

const ResulMessage: React.FC<IResulMessageProps> = (props) => {
  const { isWon } = props

  return (
    <div className={styles.resWrapper}>
      {isWon ? (
        <TypographyText className={styles.text}>You Win 🧠</TypographyText>
      ) : (
        <TypographyText className={styles.text}>You lose 😧</TypographyText>
      )}
    </div>
  )
}

export default ResulMessage
