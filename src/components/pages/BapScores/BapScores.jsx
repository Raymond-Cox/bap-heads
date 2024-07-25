import { useMemo } from 'react'
import { useQuery } from '@tanstack/react-query'
import {
  VictoryBar,
  VictoryChart,
  VictoryStack,
  VictoryContainer,
  VictoryAxis,
  VictoryLabel,
  VictoryTooltip,
  VictoryLegend,
} from 'victory'
import { ScrollBG } from '../../molecules'
import { BapHeadAPI } from '../../../api'
import * as classes from './BapScores.module.css'

/**
 * Displays a VictoryBar chart with Bap Scores data
 */
const BapScores = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['bapScores'],
    queryFn: () => BapHeadAPI.fetchBapScores(),
  })

  /**
   * Data for the VictoryBar chart
   */
  const { minigamesData, skillingData, pvmData, totalData } = useMemo(() => {
    if (!data) return {}

    const minigamesData = data?.map((item) => ({
      x: item.username,
      y: item.minigamesClues,
      label: `Minigames/Clues: ${item.minigamesClues}`,
    }))

    const skillingData = data?.map((item) => ({
      x: item.username,
      y: item.skilling,
      label: `Skilling: ${item.skilling}`,
    }))

    const pvmData = data?.map((item) => ({
      x: item.username,
      y: item.pvm,
      label: `PvM: ${item.pvm}`,
    }))

    const totalData = data?.map((item) => ({
      x: item.username,
      y: 0,
      label: item.total,
    }))
    return { minigamesData, skillingData, pvmData, totalData }
  }, [data])

  return (
    <ScrollBG>
      <div className={classes.header}>
        <h3>Bap Scores</h3>
        <p>
          Scores are calculated by your total accomplishments across
          Minigames/Clues, Skilling, and PvM.
        </p>
      </div>

      {isLoading && <p>Loading - please wait...</p>}
      {data && (
        <div
          style={{
            width: '100%',
            height: '500px',
            overflowX: 'auto',
          }}
        >
          <VictoryChart
            domainPadding={30}
            width={data.length * 45}
            height={450}
            containerComponent={<VictoryContainer responsive={false} />}
          >
            <VictoryLegend
              x={250}
              title="Legend"
              centerTitle
              orientation="horizontal"
              gutter={20}
              colorScale="green"
              style={{ border: { stroke: 'black' }, title: { fontSize: 18 } }}
              data={[
                { name: 'Minigames/Clues' },
                { name: 'Skilling' },
                { name: 'PvM' },
              ]}
            />
            <VictoryStack colorScale="green">
              <VictoryBar
                data={minigamesData}
                labelComponent={<VictoryTooltip />}
              />
              <VictoryBar
                data={skillingData}
                labelComponent={<VictoryTooltip />}
              />
              <VictoryBar data={pvmData} labelComponent={<VictoryTooltip />} />
              <VictoryBar data={totalData} labelComponent={<VictoryLabel />} />
            </VictoryStack>
            <VictoryAxis
              tickLabelComponent={
                <VictoryLabel
                  textAnchor="start"
                  angle={25}
                  verticalAnchor="middle"
                />
              }
            />
            <VictoryAxis dependentAxis />
          </VictoryChart>
        </div>
      )}
    </ScrollBG>
  )
}

export default BapScores
