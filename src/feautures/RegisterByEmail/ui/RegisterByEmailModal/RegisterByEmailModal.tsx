import { classNames } from '@/shared/lib/helpers/classNames/classNames'
import { Suspense } from 'react'
import { Modal } from '@/shared/UI/Modal'
import { RegisterByEmailFormAsync } from '../RegisterByEmailForm/RegisterByEmailForm.lazy'
import { Loader } from '@/shared/UI/Loader'

interface RegisterByEmailModalProps {
	className?: string,
	isOpen: boolean,
	onClose: () => void
}

export const RegisterByEmailModal = ({ className, isOpen, onClose }: RegisterByEmailModalProps) => {
	return (
		<Modal 
			className={classNames('', {}, [className])}
			isOpen={isOpen}
			onClose={onClose}
		>
			<Suspense fallback={<Loader/>}>
				<RegisterByEmailFormAsync
					onSuccess={onClose}
				/>
			</Suspense>
		</Modal>
	)
}
