import { createRoot } from 'react-dom/client'
import App from '@/app/App'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import AuthProvider from '@/app/providers/AuthProvider/AuthProvider'

const queryClient = new QueryClient()

const rootElement = document.getElementById('root')!
if (!rootElement.innerHTML) {
    const root = createRoot(rootElement)
    root.render(
        <QueryClientProvider client={queryClient}>
            <AuthProvider>
                <App/>
            </AuthProvider>
        </QueryClientProvider>
    )
}
