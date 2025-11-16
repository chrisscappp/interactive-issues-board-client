import { VStack } from '@/shared/UI/Stack'
import { Navbar } from '@/widgets/Navbar'
import { createRootRouteWithContext, Outlet } from '@tanstack/react-router'
import cls from './Root.module.scss'
import type { UseAuthDataContext } from '@/shared/lib/hooks/useAuthData/useAuthData'
import { type QueryClient } from '@tanstack/react-query'

export interface RouterContext {
	queryClient: QueryClient,
  	auth: UseAuthDataContext
}

const RootLayout = () => {
	return (
		<VStack className={cls.wrap} gap="40" align="center">
			<Navbar/>
			<main className={cls.RootLayout}>
				<Outlet />
			</main>
		</VStack>
	)
}

export const Route = createRootRouteWithContext<RouterContext>()({ 
	component: RootLayout,
	notFoundComponent: () => {
		return <h3>sigma</h3>
	}
})
