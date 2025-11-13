import './styles/index.scss'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { routeTree } from '../routeTree.gen'
import { useAuthData } from '@/shared/lib/hooks/useAuthData/useAuthData'

const router = createRouter({ routeTree })

// main type for typing router
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

function App() {

  const { fetchAuthDataQuery } = useAuthData()

  console.log('form app', fetchAuthDataQuery.data)

  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
