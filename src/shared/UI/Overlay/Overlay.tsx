import { classNames } from '../../lib/helpers/classNames/classNames'
import { memo } from 'react'
import cls from './Overlay.module.scss'

interface OverlayProps {
	className?: string,
	onClose?: () => void
}

export const Overlay = memo(({ className, onClose }: OverlayProps) => {
	return (
		<div className={classNames(cls.Overlay, {}, [className])} onClick={onClose}/>
	)
})
