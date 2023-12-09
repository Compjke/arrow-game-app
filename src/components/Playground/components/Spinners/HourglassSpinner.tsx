// import styles from "./HourglassSpinner.module.css"
import { Height } from "@mui/icons-material"
import { Hourglass } from "react-loader-spinner"
const HourglassSpinner: React.FC = () => {
  return (
    <Hourglass
      visible={true}
      width={30}
      height={30}
      ariaLabel="hourglass-loading"
      wrapperStyle={{}}
      wrapperClass=""
      colors={["#d4dcdd", "#feffa3"]}
    />
  )
}

export default HourglassSpinner
