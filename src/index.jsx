import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { routes } from './routes/routes'

const container = document.getElementById('app')
const root = createRoot(container)
const router = createBrowserRouter(routes, {
  basename: process.env.NODE_ENV === 'development' ? undefined : '/bap-heads/',
})

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
