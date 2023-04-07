import { Badge } from "@chakra-ui/react"


interface Props {
    score: number
}

const CriticScore = ({score} : Props) => {
  return (
    <Badge fontSize={14} paddingX={2} borderRadius={'4px'} colorScheme={score > 60 ? "green" : "red"}>{score}</Badge>
  )
}

export default CriticScore
