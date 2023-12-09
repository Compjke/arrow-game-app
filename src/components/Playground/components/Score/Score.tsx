import styles from "./Score.module.css"

import { useAppSelector } from "../../../../app/hooks"
import { Typography } from "../../../UI"
import { Chip, Stack } from "@mui/material"

const Score: React.FC = () => {
  const { totalCorrect, totalUnCorrect } = useAppSelector((s) => s.playground)

  return (
    <>
      <Typography>Total score</Typography>
      <Stack direction="row" spacing={1}>
        <Chip
          className={styles.chipUnSuccess}
          variant="outlined"
          label={
            <>
              Errors <strong>{totalUnCorrect}</strong>
            </>
          }
        />
        <Chip
          className={styles.chipSuccess}
          variant="outlined"
          label={
            <>
              Successful <strong>{totalCorrect}</strong>
            </>
          }
        />
      </Stack>
    </>
  )
}

export default Score
