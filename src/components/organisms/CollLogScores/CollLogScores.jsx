import { useQuery } from '@tanstack/react-query'
import scrollTop from '../../../assets/scroll_top.gif'
import scrollBottom from '../../../assets/scroll_bottom.gif'
import * as classes from './CollLogScores.module.css'
import { CollLogAPI } from '../../../api'
import { determineAccountTypeImg } from '../../../utils'

/**
 * A table that displays the scores of users and their logged collections
 */
const CollLogScores = () => {
    const { data, isLoading } = useQuery({
        queryKey: ['collLogScores'],
        queryFn: () => CollLogAPI.fetchAllScores(),
    })

    console.log({ data })
    return (
        <div className={classes.mainContainer}>
            <img src={scrollTop} alt="top of scroll" />

            <div className={classes.tableContainer}>
                <h2>Clog & Pet Hiscores</h2>
                {isLoading && <p>Loading - please wait...</p>}

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
            </div>
            <img src={scrollBottom} alt="bottom of scroll" />
        </div>
    )
}

export default CollLogScores
