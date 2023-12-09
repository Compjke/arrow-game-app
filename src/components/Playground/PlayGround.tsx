import { useEffect, useRef, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import {
  setCurrentStep,
  setRandomSteps,
  setUnSuccess,
} from "./store/playGround.slice"
import Controls from "./components/Controls"
import { END_GAME_CONDITIONS, intervalTime } from "./constans"
import RandomKeys from "./components/RandomKeys"
import KeyPressed from "./components/KeyPressed"
import Score from "./components/Score"
import Modal from "./components/Modal"
import Description from "./components/Description"
import styles from "./PlayGround.module.css"
const PlayGround: React.FC = () => {
  const dispatch = useAppDispatch()
  const { totalCorrect, totalUnCorrect } = useAppSelector((s) => s.playground)
  const [isTimerOn, setIsTimerOn] = useState<boolean>(false)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const [isShowModal, setisShowModal] = useState<boolean>(false)
  const [isWon, setisWon] = useState<boolean>(false)

  useEffect(() => {
    if (isTimerOn) {
      intervalRef.current = setInterval(() => {
        dispatch(setUnSuccess())
        dispatch(setCurrentStep())
        dispatch(setRandomSteps())
      }, intervalTime)
    } else {
      clearInterval(intervalRef.current as NodeJS.Timeout)
    }
    return () => {
      clearInterval(intervalRef.current as NodeJS.Timeout)
    }
  }, [dispatch, isTimerOn])

  useEffect(() => {
    const isSuccess = totalCorrect === END_GAME_CONDITIONS.SUCCESS_COUNT
    const isUnSuccess = totalUnCorrect === END_GAME_CONDITIONS.UNSUCCESS_COUNT
    isSuccess && setisWon(true)
    isUnSuccess && setisWon(false)

    if (isSuccess || isUnSuccess) {
      setisShowModal(true)
      setIsTimerOn(false)
    }
  }, [totalCorrect, totalUnCorrect])

  return (
    <div className={styles.container}>
      <div className={styles.column}>
        <RandomKeys isTimerOn={isTimerOn} />
        <KeyPressed isTimerOn={isTimerOn} />
        <Score />
      </div>
      <div className={styles.column}>
        <Description />
        <Controls isTimerOn={isTimerOn} setIsTimerOn={setIsTimerOn} />
      </div>

      {isShowModal && (
        <Modal setisShowModal={setisShowModal} isPlayerWon={isWon} />
      )}
    </div>
  )
}

export default PlayGround
