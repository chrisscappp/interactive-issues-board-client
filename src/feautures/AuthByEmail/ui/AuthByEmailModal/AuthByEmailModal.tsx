import { classNames } from '@/shared/lib/helpers/classNames/classNames'
import { Suspense } from 'react'
import { RenderPopupByScreen } from '@/shared/UI/Popups'
import { AuthByEmailFormAsync } from '../AuthByEmailForm/AuthByEmailForm.lazy'
import { Loader } from '@/shared/UI/Loader'

interface AuthByEmailModalProps {
	className?: string,
	isOpen: boolean,
	onClose: () => void
}

export const AuthByEmailModal = ({ className, isOpen, onClose }: AuthByEmailModalProps) => {

	const content = (
		<Suspense fallback={<Loader/>}>
			<AuthByEmailFormAsync
				onSuccess={onClose}
			/>
		</Suspense>
	)
	
	return (
		<RenderPopupByScreen
			className={classNames('', {}, [className])}
			isOpen={isOpen}
			onClose={onClose}
		>
			{content}
		</RenderPopupByScreen>
	)
}
