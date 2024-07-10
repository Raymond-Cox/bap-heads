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

    return data
  }

  /**
   * Fetches all user's bap points.
   * @returns {Promise<import('../api').BapScore[]>}
   */
  async fetchBapScores() {
    const { data } = await this.api.get('/bap-points')

    return data
  }
}

export default new BapHeadAPI()
