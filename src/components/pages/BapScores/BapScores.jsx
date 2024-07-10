import { useQuery } from '@tanstack/react-query'
import { ScrollBG } from '../../molecules'
import { BapHeadAPI } from '../../../api'

const BapScores = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['bapScores'],
    queryFn: () => BapHeadAPI.fetchBapScores(),
  })

  console.log(data)

  return (
    <ScrollBG>
      <h3>Bap Scores</h3>
      {isLoading && <p>Loading - please wait...</p>}
    </ScrollBG>
  )
}

export default BapScores
