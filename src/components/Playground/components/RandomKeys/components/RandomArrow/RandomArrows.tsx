import { useAppSelector } from "../../../../../../app/hooks"
import { MAP__ARROW_CODES } from "../../../../constans"
import { IMapArrowCodes } from "../../../../types"
import { IPLaygroundStepsState } from "../../../../store/types"
import clsx from "clsx"
import styles from "./RandomArrow.module.css"
import stylesParent from "../../RandomKeys.module.css"
import { useEffect, useRef } from "react"

const RandomArrows: React.FC = () => {
  const { steps } = useAppSelector((s) => s.playground)
  const divRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    divRef?.current?.scrollIntoView()
  })
  const getStyleForRandomKey = (el: IPLaygroundStepsState): string => {
    return clsx(
      stylesParent.icon,
      el.success && el.success !== null && styles.iconSuccess,
      !el.success && el.success !== null && styles.iconUnsuccess,
    )

    // switch (el.success) {
    //   case true:
    //     return clsx(styles.iconSuccess, stylesParent.icon, styles.iconSuccess)
    //   case null || false:
    //     return clsx(stylesParent.icon, styles.iconUnsuccess)
    //   default:
    //     return stylesParent.icon
    // }
  }
  return (
    <div className={stylesParent.wrapper}>
      {steps.map((el) => (
        <span className={getStyleForRandomKey(el)} key={el.step}>
          {MAP__ARROW_CODES[el.currentValue as keyof IMapArrowCodes]}
        </span>
      ))}
      <div ref={divRef}></div>
    </div>
  )
}

export default RandomArrows
