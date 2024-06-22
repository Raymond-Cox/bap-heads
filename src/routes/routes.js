import App from '../App'
import { ClogsPage, HomePage } from '../components'

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
    ],
  },
]
