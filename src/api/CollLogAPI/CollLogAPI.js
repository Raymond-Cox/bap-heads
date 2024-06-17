import axios from 'axios'
import { users } from '../../data'

class CollLogAPI {
    /**
     * Fetches log data by username.
     * @param {string} username
     * @returns {Promise<import('../api').Collection>}
     */
    async getLogByUsername(username) {
        const { data } = await axios.get(
            `https://api.collectionlog.net/collectionlog/user/${username}`
        )

        return data?.collectionLog
    }

    /**
     * Fetches all user's scores. Counts pets and sorts by total uniques obtained.
     * @returns {Promise<import('../api').Collection[]>}
     */
    async fetchAllScores() {
        const promises = users.map(async (user) => this.getLogByUsername(user))

        const data = await Promise.all(promises)

        // Add pet count to each user
        const withPetCount = data.map((user) => ({
            ...user,
            petCount: user.tabs.Other['All Pets'].items.filter(
                (petItem) => petItem.quantity > 0
            ).length,
        }))

        // Sort by number of uniques obtained
        return withPetCount.sort((a, b) => b.uniqueObtained - a.uniqueObtained)
    }
}

export default new CollLogAPI()
