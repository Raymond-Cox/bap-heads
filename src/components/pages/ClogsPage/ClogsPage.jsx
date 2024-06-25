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
      return <FaArrowUp color="green" />
    } else if (change < 0) {
      return <FaArrowDown color="red" />
    }
  }

  return (
    <ScrollBG>
      <h3>Clog & Pet Hiscores</h3>
      <p>(Updated hourly, Change = new drops obtained since Sunday.)</p>
      <div className={classes.tableWrapper}>
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th />
              <th>Username</th>
              <th>Collection Score</th>
              <th>Change</th>
              <th>Pets</th>
            </tr>
          </thead>

          <tbody>
            {data?.map(
              (
                {
                  username,
                  displayName,
                  accountType,
                  uniqueObtained,
                  uniqueItems,
                  petCount,
                  lastCheckpointUniqueObtained,
                  lastCheckpointRankIndex,
                },
                index
              ) => (
                <tr key={displayName}>
                  <td>{index + 1}</td>
                  <td>{renderChangeIcon(lastCheckpointRankIndex - index)}</td>
                  <td>
                    <a
                      href={`https://collectionlog.net/log/${username}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src={determineAccountTypeImg(accountType)}
                        alt={displayName}
                      />
                      {displayName}
                    </a>
                  </td>

                  <td>
                    {uniqueObtained} / {uniqueItems}
                  </td>
                  <td>+{uniqueObtained - lastCheckpointUniqueObtained}</td>
                  <td>
                    <a
                      href={`https://collectionlog.net/log/${username}/All%20Pets`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {petCount}
                    </a>
                  </td>
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
