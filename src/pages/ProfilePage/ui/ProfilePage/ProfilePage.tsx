import { useAuthData } from '@/shared/lib/hooks/useAuthData/useAuthData'
import { Card } from '@/shared/UI/Card'
import { useParams } from '@tanstack/react-router'
import { memo } from 'react'

const ProfilePage = memo(() => {

	const { profileid } = useParams({
		from: '/_authenticated/profile/$profileid'
	})

	const { authData } = useAuthData()

	return (
		<article>
			<Card showBorder>
				{profileid === authData?.id ? 'its my profile' : 'its not my profile'}
			</Card>
		</article>
	)
})

export default ProfilePage
