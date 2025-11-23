import { ForgetPassword } from '@/feautures/ForgetPassword'
import { VStack } from '@/shared/UI/Stack'
import { memo } from 'react'

const ForgetPasswordPage = memo(() => {

	return (
		<VStack tag="article" max>
			<ForgetPassword/>
		</VStack>
	)
})

export default ForgetPasswordPage
