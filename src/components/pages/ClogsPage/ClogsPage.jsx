import { useQuery } from '@tanstack/react-query'
import { FaArrowUp, FaArrowDown } from 'react-icons/fa'
import { determineAccountTypeImg } from '../../../utils'
import { BapHeadAPI } from '../../../api'
import { ScrollBG } from '../../molecules'

import * as classes from './ClogsPage.module.css'

/**
 * A table that displays the scores of users and their logged collections
 */
const ClogsPage = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['collLogScores'],
    queryFn: () => BapHeadAPI.fetchClogs(),
  })

  /**
   * Renders an arrow icon based on the change value
   * @param {number} change
   */
  const renderChangeIcon = (change) => {
    if (change > 0) {
      return <FaArrowUp color="#367E18" />
    } else if (change < 0) {
      return <FaArrowDown color="#DF2E38" />
    }
  }

  return (
    <ScrollBG>
      <div className={classes.header}>
        <h3>Clog Hiscores</h3>
        <p>(Updated hourly, Change = new drops obtained since Sunday.)</p>
      </div>

      <div className={classes.tableWrapper}>
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th />
              <th>Username</th>
              <th>Score</th>
              <th>Change</th>
            </tr>
          </thead>

          <tbody>
            {data?.map(
              (
                {
                  displayName,
                  accountType,
                  uniqueObtained,
                  lastCheckpointUniqueObtained,
                  lastCheckpointRankIndex,
                },
                index
              ) => (
                <tr key={displayName}>
                  <td>{index + 1}</td>
                  <td>{renderChangeIcon(lastCheckpointRankIndex - index)}</td>
                  <td>
                    <img
                      src={determineAccountTypeImg(accountType)}
                      alt={displayName}
                    />
                    {displayName}
                  </td>

                  <td>{uniqueObtained}</td>
                  <td>+{uniqueObtained - lastCheckpointUniqueObtained}</td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>

      {isLoading && <p>Loading - please wait...</p>}
    </ScrollBG>
  )
}

export default ClogsPage
