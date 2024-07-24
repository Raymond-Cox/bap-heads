import App from '../App'
import { ClogsPage, HomePage, BingoPage, BapScores } from '../components'

export const routes = [
  {
    element: <App />,
    children: [
      {
        index: true,
        path: '/',
        element: <HomePage />,
        title: 'Home',
      },
      {
        path: '/clogs',
        element: <ClogsPage />,
        title: 'Collection Logs',
      },
      {
        path: '/bapscores',
        element: <BapScores />,
        title: 'Bap Scores',
      },
      {
        path: '/bingo',
        element: <BingoPage />,
        title: 'Bingo',
      },
    ],
  },
]
