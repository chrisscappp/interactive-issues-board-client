import { usePopup } from '../../../../lib/hooks/usePopup/usePopup'
import { memo, type ReactNode } from 'react'
import { Portal } from '../../../Portal'
import { classNames, type Mods } from '../../../../lib/helpers/classNames/classNames'
import cls from './Drawer.module.scss'
import popups from '../../styles/Popups.module.scss'
import { Overlay } from '../../../Overlay'
import { Button } from '../../../Button'
import { Icon } from '../../../Icon'
import CrossIcon from '../../../../assets/icons/cross-black-64.svg'

interface DrawerProps {
	className?: string,
	isOpen: boolean,
	onClose: () => void,
	hideCross?: boolean,
	children?: ReactNode
}

export const Drawer = memo((props: DrawerProps) => {
	
	const {
		isOpen,
		onClose,
		children,
		className,
		hideCross
	} = props

	const { closePopup, isClosing, isMounted } = usePopup({
		isOpen,
		animationDelay: 300,
		onClose
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
			<div className={classNames(cls.Drawer, mods, [className])}>
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
