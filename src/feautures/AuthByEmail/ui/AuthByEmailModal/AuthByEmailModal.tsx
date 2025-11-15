import { classNames } from '@/shared/lib/helpers/classNames/classNames'
import { Suspense } from 'react'
import { Drawer, Modal } from '@/shared/UI/Popups'
import { AuthByEmailFormAsync } from '../AuthByEmailForm/AuthByEmailForm.lazy'
import { Loader } from '@/shared/UI/Loader'
import { RenderComponentByScreen } from '@/shared/lib/components/ScreenView'

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
