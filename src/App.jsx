import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { MainLayout } from './components'
import './App.module.css'

const queryClient = new QueryClient()

/**
 * Main component of the application.
 */
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <MainLayout />

      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
