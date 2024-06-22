import { useQuery } from '@tanstack/react-query'
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

  return (
    <ScrollBG>
      <h3>Clog & Pet Hiscores</h3>
      <p>(Updated hourly, Change = new drops obtained since Sunday.)</p>
      <div className={classes.tableWrapper}>
        <table>
          <thead>
            <tr>
              <th>Rank</th>
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
                  accountType,
                  uniqueObtained,
                  uniqueItems,
                  petCount,
                  lastCheckpointUniqueObtained,
                },
                index
              ) => (
                <tr key={username}>
                  <td>{index + 1}</td>
                  <td>
                    <a href={`https://collectionlog.net/log/${username}`}>
                      <img
                        src={determineAccountTypeImg(accountType)}
                        alt={username}
                      />
                      {username}
                    </a>
                  </td>

                  <td>
                    {uniqueObtained} / {uniqueItems}
                  </td>
                  <td>+{uniqueObtained - lastCheckpointUniqueObtained}</td>
                  <td>
                    <a
                      href={`https://collectionlog.net/log/${username}/All%20Pets`}
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
