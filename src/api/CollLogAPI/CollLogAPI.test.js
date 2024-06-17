import axios from 'axios'
import CollLogAPI from './CollLogAPI'
import { users } from '../../data'

const tabs = {
    Other: {
        'All Pets': {
            items: [
                {
                    id: 1,
                    quantity: 1,
                },
                {
                    id: 2,
                    quantity: 0,
                },
                {
                    id: 3,
                    quantity: 1,
                },
            ],
        },
    },
}

const fakeDataset = {
    collectionLog: {
        uniqueObtained: 200,
        tabs,
    },
}

beforeEach(() => {
    axios.get.mockResolvedValue({
        data: {
            collectionLog: {
                ...fakeDataset.collectionLog,
            },
        },
    })
})

describe('CollLogAPI', () => {
    describe('getLogByUsername', () => {
        test('fetches log data by username', async () => {
            const username = 'Zulu'
            const expected = fakeDataset.collectionLog

            const result = await CollLogAPI.getLogByUsername(username)

            expect(result).toEqual(expected)
        })
    })

    describe('fetchAllScores', () => {
        test('fetches all user scores', async () => {
            const result = await CollLogAPI.fetchAllScores()

            expect(result).toHaveLength(users.length)
        })

        test('adds pet count to each user', async () => {
            const result = await CollLogAPI.fetchAllScores()

            result.map((user) => expect(user.petCount).toBe(2))
        })

        test('sorts by number of uniques obtained', async () => {
            axios.get
                .mockResolvedValueOnce({
                    data: {
                        collectionLog: {
                            ...fakeDataset.collectionLog,
                        },
                    },
                })
                .mockResolvedValueOnce({
                    data: {
                        collectionLog: {
                            ...fakeDataset.collectionLog,
                            uniqueObtained: 500,
                        },
                    },
                })
                .mockResolvedValueOnce({
                    data: {
                        collectionLog: {
                            ...fakeDataset.collectionLog,
                            uniqueObtained: 300,
                        },
                    },
                })

            const result = await CollLogAPI.fetchAllScores()

            expect(result[0].uniqueObtained).toBe(500)
            expect(result[1].uniqueObtained).toBe(300)
            expect(result[2].uniqueObtained).toBe(200)
        })
    })
})
