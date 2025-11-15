import { classNames } from '@/shared/lib/helpers/classNames/classNames'
import { Suspense } from 'react'
import { Drawer, Modal } from '@/shared/UI/Popups'
import { RegisterByEmailFormAsync } from '../RegisterByEmailForm/RegisterByEmailForm.lazy'
import { Loader } from '@/shared/UI/Loader'
import { RenderComponentByScreen } from '@/shared/lib/components/ScreenView'

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
		<RenderComponentByScreen
			DesktopView={
				<Modal 
					className={classNames('', {}, [className])}
					isOpen={isOpen}
					onClose={onClose}
				>
					{content}
				</Modal>
			}
			MobileView={
				<Drawer
					className={classNames('', {}, [className])}
					isOpen={isOpen}
					onClose={onClose}
				>
					{content}
				</Drawer>
			}
		/>
	)
}
