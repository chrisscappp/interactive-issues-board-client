import { PageLoader } from '@/widgets/PageLoader'
import { lazy, Suspense } from 'react'

const ProfilePageAsync = lazy(() => import('./ProfilePage'))

export const ProfilePage = () => {
	return (
		<Suspense fallback={<PageLoader/>}>
			<ProfilePageAsync/>
		</Suspense>
	)
}
