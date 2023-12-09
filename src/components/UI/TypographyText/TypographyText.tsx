import clsx from "clsx"
import styles from "./TypographyText.module.css"
import { Typography, TypographyProps } from "@mui/material"
export interface ITypographyTextProps extends TypographyProps {
  //
}

const TypographyText: React.FC<ITypographyTextProps> = (props) => {
  const { children, className } = props

  return (
    <Typography {...props} className={clsx(styles.text, className)}>
      {children}
    </Typography>
  )
}

export default TypographyText
