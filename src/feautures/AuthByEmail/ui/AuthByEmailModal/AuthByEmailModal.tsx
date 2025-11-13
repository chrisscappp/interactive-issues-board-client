import { classNames } from '@/shared/lib/helpers/classNames/classNames'
import { Suspense } from 'react'
import { Modal } from '@/shared/UI/Modal'
import { AuthByEmailFormAsync } from '../AuthByEmailForm/AuthByEmailForm.lazy'
import { Loader } from '@/shared/UI/Loader'

interface AuthByEmailModalProps {
	className?: string,
	isOpen: boolean,
	onClose: () => void
}

export const AuthByEmailModal = ({ className, isOpen, onClose }: AuthByEmailModalProps) => {
	return (
		<Modal 
			className={classNames('', {}, [className])}
			isOpen={isOpen}
			onClose={onClose}
		>
			<Suspense fallback={<Loader/>}>
				<AuthByEmailFormAsync
					onSuccess={onClose}
				/>
			</Suspense>
		</Modal>
	)
}
