import ClogsPage from './ClogsPage'
import { renderWithRouter } from '../../../utils/testUtils'
import { waitFor } from '@testing-library/dom'
import { BapHeadAPI } from '../../../api'

jest.mock('../../../api')

const users = ['user1', 'user2', 'user3']

beforeEach(() => {
  BapHeadAPI.fetchClogs.mockResolvedValue(
    users.map((user, index) => ({
      username: user,
      displayName: user,
      accountType: 'NORMAL',
      uniqueObtained: index,
      uniqueItems: 100,
      petCount: 10,
      lastCheckpointUniqueObtained: 0,
    }))
  )
})

describe('<ClogsPage />', () => {
  test('shows loading message when loading', () => {
    const { getByText } = renderWithRouter(<ClogsPage />)

    expect(getByText('Loading - please wait...')).toBeDefined()
  })

  test('shows table when loaded', async () => {
    const { getByText } = renderWithRouter(<ClogsPage />)

    await waitFor(() => {
      expect(getByText(users[0])).toBeDefined()
    })

    users.map((user) => expect(getByText(user)).toBeDefined())
  })
})
