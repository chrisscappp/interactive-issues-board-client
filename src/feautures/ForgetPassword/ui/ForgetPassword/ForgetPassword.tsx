import { memo } from 'react'
import { ForgetPasswordBase } from '../ForgetPasswordBase/ForgetPasswordBase'
import { ForgetPasswordChange } from '../ForgetPasswordChange/ForgetPasswordChange'
import { useSearch } from '@tanstack/react-router'

interface ForgetPasswordProps {
	className?: string
}

export const ForgetPassword = memo((props: ForgetPasswordProps) => {
	
	const { className } = props

	const { mode } = useSearch({
		from: '/forgetPassword'
	})

	switch (mode) {
		case 'base': {
			return <ForgetPasswordBase className={className}/>
		}
		case 'change': {
			return <ForgetPasswordChange className={className}/>
		}
		default: return null
	}
})
