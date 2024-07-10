import App from '../App'
import { BapScores, ClogsPage, HomePage } from '../components'

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
    ],
  },
]
