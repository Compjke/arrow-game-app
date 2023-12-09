import clsx from "clsx"
import styles from "./Button.module.css"
import { Button, ButtonProps } from "@mui/material"
export interface IMyButtonProps extends ButtonProps {
  children: React.ReactNode
  role: "play" | "pause" | "reset"
}

const MyButton: React.FC<IMyButtonProps> = (props) => {
  const { children, role, className = "" } = props
  const btnClass = {
    play: styles["btn-play"],
    pause: styles["btn-pause"],
    reset: styles["btn-new-game"],
  }[role]

  return (
    <Button
      variant="contained"
      size="small"
      {...props}
      className={clsx(btnClass, className)}
    >
      {children}
    </Button>
  )
}

export default MyButton
