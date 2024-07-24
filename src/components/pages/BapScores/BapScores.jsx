import { useQuery } from '@tanstack/react-query'
import {
  VictoryBar,
  VictoryChart,
  VictoryStack,
  VictoryZoomContainer,
} from 'victory'
import { ScrollBG } from '../../molecules'
import { BapHeadAPI } from '../../../api'
import * as classes from './BapScores.module.css'

const BapScores = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['bapScores'],
    queryFn: () => BapHeadAPI.fetchBapScores(),
  })

  console.log(data)

  const minigamesData = data?.map((item) => ({
    x: item.username,
    y: item.minigamesClues,
  }))

  const skillingData = data?.map((item) => ({
    x: item.username,
    y: item.skilling,
  }))

  const pvmData = data?.map((item) => ({
    x: item.username,
    y: item.pvm,
  }))

  return (
    <ScrollBG>
      <div className={classes.header}>
        <h3>Bap Scores</h3>
      </div>

      {isLoading && <p>Loading - please wait...</p>}
      {data && (
        <VictoryChart
          domainPadding={20}
          containerComponent={
            <VictoryZoomContainer
              allowZoom={false}
              zoomDomain={{ x: [0, 5] }}
              zoomDimension="x"
              responsive={false}
            />
          }
        >
          <VictoryStack colorScale="green">
            <VictoryBar data={minigamesData} />
            <VictoryBar data={skillingData} />
            <VictoryBar data={pvmData} />
          </VictoryStack>
        </VictoryChart>
      )}
    </ScrollBG>
  )
}

export default BapScores
