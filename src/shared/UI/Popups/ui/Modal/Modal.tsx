import { classNames, type Mods } from '../../../../lib/helpers/classNames/classNames'
import { memo, type ReactNode } from 'react'
import { Portal } from '../../../Portal/Portal'
import CrossIcon from '../../../../assets/icons/cross-black-64.svg'
import cls from './Modal.module.scss'
import popups from '../../styles/Popups.module.scss'
import { Icon } from '../../../Icon'
import { Button } from '../../../Button'
import { usePopup } from '../../../../lib/hooks/usePopup/usePopup'
import { Overlay } from '../../../Overlay'

export interface PopupProps {
	className?: string,
	isOpen: boolean,
	onClose: () => void,
	hideCross?: boolean,
	children?: ReactNode
}

export const Modal = memo((props: PopupProps) => {

	const { 
		className,
		isOpen,
		onClose,
    	hideCross=false,
		children
	} = props

	const { closePopup, isClosing, isMounted } = usePopup({
		isOpen,
		onClose,
		animationDelay: 300
	})

	const mods: Mods = {
		[popups.opened]: isOpen,
		[popups.isClosing]: isClosing
	}

	if (!isMounted) {
		return null
	}

	return (
		<Portal>
			<div className={classNames(cls.Modal, mods, [className])}>
				<Overlay className={popups.overlay} onClose={closePopup}/>
				<div className={classNames(cls.content, mods, [])}>
					{children}
					{!hideCross && (
						<Button onClick={closePopup} theme="clear">
							<Icon 
								icon={CrossIcon}
								size='size_s'
								className={popups.cross}
							/>
						</Button>
					)}
				</div>
			</div>
		</Portal>
	)
})
