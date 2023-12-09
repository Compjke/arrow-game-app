import styles from "./Modal.module.css"

import { useAppDispatch } from "../../../../app/hooks"
import Button from "../../../UI/Button"
import { resetStore } from "../../store/playGround.slice"
import ResulMessage from "./ResultText/ResMessage"
import { Modal as MaterialModal } from "@mui/material"
import clsx from "clsx"
export interface IModalProps {
  setisShowModal: React.Dispatch<React.SetStateAction<boolean>>
  isPlayerWon: boolean
}

const Modal: React.FC<IModalProps> = ({ isPlayerWon, setisShowModal }) => {
  const dispatch = useAppDispatch()
  const handleCloseModal = () => {
    setisShowModal(false)
    dispatch(resetStore())
  }
  return (
    <MaterialModal className={styles.wrapper} open onClose={handleCloseModal}>
      <div
        className={clsx(
          styles.container,
          isPlayerWon ? styles.success : styles.unsuccess,
        )}
      >
        <h3 className={styles.headling}>
          {isPlayerWon ? "Congratulations" : "It's a shame but"}
        </h3>
        <ResulMessage isWon={isPlayerWon} />
        <Button
          style={{ textTransform: "capitalize" }}
          role="reset"
          onClick={handleCloseModal}
        >
          New game
        </Button>
      </div>
    </MaterialModal>
  )
}

export default Modal
