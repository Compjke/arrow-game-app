import TypographyHeader from "../../../UI/Typography/Typography"
import TypographyText from "../../../UI/TypographyText"
import { END_GAME_CONDITIONS } from "../../constans"

const Description: React.FC = () => {
  return (
    <div>
      <TypographyHeader>↑↓→← Arrow-game description</TypographyHeader>
      <TypographyText>
        Player's goal is to press the keyboard arrow key that was shown to him
        before the next one appears.
      </TypographyText>
      <TypographyText>
        After {END_GAME_CONDITIONS.SUCCESS_COUNT} consecutive successful hits -
        game won, after three {END_GAME_CONDITIONS.UNSUCCESS_COUNT} - lost.
      </TypographyText>
    </div>
  )
}

export default Description
