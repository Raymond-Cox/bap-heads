import axios from 'axios'

class CollLogAPI {
    /**
     * Fetches log data by username.
     * @param {string} username
     * @returns {Promise<import('./api').Collection>}
     */
    async getLogByUsername(username) {
        const { data } = await axios.get(
            `https://api.collectionlog.net/collectionlog/user/${username}`
        )

        return data?.collectionLog
    }
}

export default new CollLogAPI()
