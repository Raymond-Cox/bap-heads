import { useQuery } from '@tanstack/react-query'
import scrollTop from '../../assets/scroll_top.gif'
import scrollBottom from '../../assets/scroll_bottom.gif'
import { CollLogAPI } from '../../api'
import { users } from '../../data'
import * as classes from './CollLogScores.module.css'

/**
 * Fetches all user's scores. ONLY FOR TESTING, NO API CALLS
 */
const fetchAllScores = async () => {
    const promises = users.map(async (user) => ({
        username: user,
    }))

    return Promise.all(promises)
}

// /**
//  * Fetches all user's scores.
//  */
// const fetchAllScores = async () => {
//     const promises = users.map(async (user) =>
//         CollLogAPI.getLogByUsername(user)
//     )

//     const data = await Promise.all(promises)

//     // Add pet count to each user
//     const withPetCount = data.map((user) => ({
//         ...user,
//         petCount:
//             user.tabs.Other['All Pets'].items.filter(
//                 (petItem) => petItem.quantity > 0
//             ).length || 0,
//     }))

//     // Sort by number of uniques obtained
//     return withPetCount.sort((a, b) => b.uniqueObtained - a.uniqueObtained)
// }

/**
 * A table that displays the scores of users and their logged collections
 */
const CollLogScores = () => {
    const { data, isLoading } = useQuery({
        queryKey: ['collLogScores'],
        queryFn: fetchAllScores,
    })

    return (
        <div className={classes.mainContainer}>
            <img src={scrollTop} />

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
            <img src={scrollBottom} />
        </div>
    )
}

export default CollLogScores
