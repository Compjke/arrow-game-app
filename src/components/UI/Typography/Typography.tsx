import clsx from "clsx"
import styles from "./Typography.module.css"
import { Typography, TypographyProps } from "@mui/material"
export interface ITypographyHeaderProps extends TypographyProps {
  //
}

const TypographyHeader: React.FC<ITypographyHeaderProps> = (props) => {
  const { children, className } = props

  return (
    <Typography
      variant="h3"
      {...props}
      className={clsx(styles.text, className)}
    >
      {children}
    </Typography>
  )
}

export default TypographyHeader
