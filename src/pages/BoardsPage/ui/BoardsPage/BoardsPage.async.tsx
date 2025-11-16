import { PageLoader } from '@/widgets/PageLoader'
import { lazy, Suspense } from 'react'

const BoardsPageAsync = lazy(() => import('./BoardsPage'))

export const BoardsPage = () => {
	return (
		<Suspense fallback={<PageLoader/>}>
			<BoardsPageAsync/>
		</Suspense>
	)
}
