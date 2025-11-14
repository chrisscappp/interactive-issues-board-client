import { VStack } from '@/shared/UI/Stack'
import { Navbar } from '@/widgets/Navbar'
import { createRootRoute, Outlet } from '@tanstack/react-router'
import cls from './Root.module.scss'

const RootLayout = () => {
	return (
		<VStack className={cls.wrap} gap="40" align="center">
			<Navbar
			
			/>
			<main className={cls.RootLayout}>
				<Outlet />
			</main>
		</VStack>
	)
}

export const Route = createRootRoute({ component: RootLayout, notFoundComponent: () => {
	return <h3>sigma</h3>
} })
