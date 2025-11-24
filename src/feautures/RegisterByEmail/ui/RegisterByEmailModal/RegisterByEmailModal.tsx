import { classNames } from '@/shared/lib/helpers/classNames/classNames'
import { Suspense } from 'react'
import { RenderPopupByScreen } from '@/shared/UI/Popups'
import { RegisterByEmailFormAsync } from '../RegisterByEmailForm/RegisterByEmailForm.lazy'
import { Loader } from '@/shared/UI/Loader'

interface RegisterByEmailModalProps {
	className?: string,
	isOpen: boolean,
	onClose: () => void
}

export const RegisterByEmailModal = ({ className, isOpen, onClose }: RegisterByEmailModalProps) => {
	
	const content = (
		<Suspense fallback={<Loader/>}>
			<RegisterByEmailFormAsync
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
