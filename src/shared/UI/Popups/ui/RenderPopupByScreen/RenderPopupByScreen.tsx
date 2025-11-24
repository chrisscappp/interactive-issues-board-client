import { RenderComponentByScreen } from '../../../../lib/components/ScreenView'
import { memo, type ReactNode } from 'react'
import { Modal, type PopupProps } from '../Modal/Modal'
import { Drawer } from '../Drawer/Drawer'

interface RenderPopupByScreenProps extends PopupProps {
	children: ReactNode
}

export const RenderPopupByScreen = memo((props: RenderPopupByScreenProps) => {
	
	const {
		children,
		...otherProps
	} = props
	
	return (
		<RenderComponentByScreen
			DesktopView={
				<Modal {...otherProps}>
					{children}
				</Modal>
			}
			MobileView={
				<Drawer {...otherProps}>
					{children}
				</Drawer>
			}
		/>
	)
})
