import axios from 'axios'

class BapHeadAPI {
    constructor() {
        this.api = axios.create({
            baseURL: process.env.BAPHEAD_API_URL,
        })
    }

    /**
     * Fetches all user's scores.
     * @returns {Promise<import('../api').Collection[]>}
     */
    async fetchClogs() {
        const { data } = await this.api.get('/collectionlog')
        console.log(data)
        return data
    }
}

export default new BapHeadAPI()
