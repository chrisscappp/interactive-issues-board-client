import './styles/index.scss'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { routeTree } from '../routeTree.gen'
import { useAuthData } from '@/shared/lib/hooks/useAuthData/useAuthData'
import { useQueryClient } from '@tanstack/react-query'

const router = createRouter({ 
  routeTree,
  context: { 
    auth: undefined!,
    queryClient: undefined!
  }
})

// main type for typing router
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

function App() {

  const queryClient = useQueryClient()
  const authContext = useAuthData()

  return (
    <div className="app">
      <RouterProvider router={router} context={{ auth: authContext, queryClient: queryClient }} />
    </div>
  )
}

export default App
