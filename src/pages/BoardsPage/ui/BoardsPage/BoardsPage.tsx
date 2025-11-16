import { useAuthData } from '@/shared/lib/hooks/useAuthData/useAuthData'
import { Card } from '@/shared/UI/Card'
import { memo } from 'react'

const BoardsPage = memo(() => {

	const { authData } = useAuthData()

	return (
		<article>
			<Card showBorder>
				Boards for user {authData?.id}
			</Card>
		</article>
	)
})

export default BoardsPage
