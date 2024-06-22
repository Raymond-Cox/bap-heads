import { useQuery } from '@tanstack/react-query'
import scrollTop from '../../../assets/scroll_top.gif'
import scrollBottom from '../../../assets/scroll_bottom.gif'
import * as classes from './CollLogScores.module.css'
import { determineAccountTypeImg } from '../../../utils'
import { BapHeadAPI } from '../../../api'

/**
 * A table that displays the scores of users and their logged collections
 */
const CollLogScores = () => {
    const { data, isLoading } = useQuery({
        queryKey: ['collLogScores'],
        queryFn: () => BapHeadAPI.fetchClogs(),
    })

    return (
        <div className={classes.mainContainer}>
            <img src={scrollTop} alt="top of scroll" />

            <div className={classes.tableContainer}>
                <h2>Clog & Pet Hiscores</h2>

                <table className={classes.table}>
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th>Username</th>
                            <th>Collection Score</th>
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
                                },
                                index
                            ) => (
                                <tr key={username}>
                                    <td>{index + 1}</td>
                                    <td>
                                        <a
                                            href={`https://collectionlog.net/log/${username}`}
                                        >
                                            <img
                                                src={determineAccountTypeImg(
                                                    accountType
                                                )}
                                                alt={username}
                                            />
                                            {username}
                                        </a>
                                    </td>

                                    <td>
                                        {uniqueObtained} / {uniqueItems}
                                    </td>
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

                {isLoading && <p>Loading - please wait...</p>}
            </div>
            <img src={scrollBottom} alt="bottom of scroll" />
        </div>
    )
}

export default CollLogScores