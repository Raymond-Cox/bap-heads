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
      },
      {
        path: '/clogs',
        element: <ClogsPage />,
      },
    ],
  },
]
