import { createRoot } from 'react-dom/client'
import App from '@/app/App'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

const rootElement = document.getElementById('root')!
if (!rootElement.innerHTML) {
    const root = createRoot(rootElement)
    root.render(
        <QueryClientProvider client={queryClient}>
            <App/>
        </QueryClientProvider>
    )
}
