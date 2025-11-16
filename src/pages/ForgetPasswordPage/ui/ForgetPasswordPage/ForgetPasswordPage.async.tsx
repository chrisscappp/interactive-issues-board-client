import { PageLoader } from '@/widgets/PageLoader'
import { lazy, Suspense } from 'react'

const ForgetPasswordPageAsync = lazy(() => import('./ForgetPasswordPage'))

export const ForgetPasswordPage = () => {
	return (
		<Suspense fallback={<PageLoader/>}>
			<ForgetPasswordPageAsync/>
		</Suspense>
	)
}
