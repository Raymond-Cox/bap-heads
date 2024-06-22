import CollLogScores from './CollLogScores'
import { renderWithRouter } from '../../../utils/testUtils'
import { waitFor } from '@testing-library/dom'
import { BapHeadAPI } from '../../../api'

jest.mock('../../../api')

const users = ['user1', 'user2', 'user3']

beforeEach(() => {
    BapHeadAPI.fetchClogs.mockResolvedValue(
        users.map((user, index) => ({
            username: user,
            accountType: 'NORMAL',
            uniqueObtained: index,
            uniqueItems: 100,
            petCount: 10,
            lastCheckpointUniqueObtained: 0,
        }))
    )
})

describe('<CollLogScores />', () => {
    test('shows loading message when loading', () => {
        const { getByText } = renderWithRouter(<CollLogScores />)

        expect(getByText('Loading - please wait...')).toBeDefined()
    })

    test('shows table when loaded', async () => {
        const { getByText } = renderWithRouter(<CollLogScores />)

        await waitFor(() => {
            expect(getByText(users[0])).toBeDefined()
        })

        users.map((user) => expect(getByText(user)).toBeDefined())
    })
})
