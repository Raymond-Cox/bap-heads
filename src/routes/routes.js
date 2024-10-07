import App from '../App'
import { ClogsPage } from '../components'

export const routes = [
  {
    element: <App />,
    children: [
      {
        index: true,
        path: '/',
        element: <ClogsPage />,
        title: 'Collection Logs',
      },
    ],
  },
]
