import CollLogScores from './CollLogScores'
import { renderWithRouter } from '../../../utils/testUtils'
import { waitFor } from '@testing-library/dom'
import { users } from '../../../data'

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
