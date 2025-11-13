import { classNames, type Mods } from '../../lib/helpers/classNames/classNames'
import { useCallback, useEffect, useRef, useState } from 'react'
import type { MouseEvent, ReactNode } from 'react'
import { Portal } from '../Portal/Portal'
import CrossIcon from '@/shared/assets/icons/cross-black-64.svg'
import cls from './Modal.module.scss'
import { Icon } from '../Icon'
import { Button } from '../Button'

interface ModalProps {
	className?: string,
	isOpen?: boolean,
	onClose?: () => void,
	hideCross?: boolean,
	children?: ReactNode
}

const CLOSE_DELAY = 300

export const Modal = (props: ModalProps) => {

	const { 
		className,
		isOpen,
		onClose,
    	hideCross=false,
		children
	} = props
	
	const [isClosing, setIsClosing] = useState<boolean>()
	const [isMounted, setIsMounted] = useState<boolean>()
	const timerRef = useRef(0)

	useEffect(() => {
		if (isOpen) {
			setIsMounted(true)
		}
	}, [isOpen])

	const handleClose = useCallback(() => {
		if (!onClose) return
		setIsClosing(true)
		timerRef.current = (setTimeout(() => {
			onClose()
			setIsClosing(false)
			setIsMounted(false)
		}, CLOSE_DELAY)) as unknown as number
	}, [onClose])

	const onClickContent = (e: MouseEvent) => {
		e.stopPropagation()
	}

	const onKeyDown = useCallback((e: KeyboardEvent) => {
		if (e.key === 'Escape') {
			handleClose()
		}
	}, [handleClose])

	useEffect(() => {
		if (isOpen) {
			window.addEventListener('keydown', onKeyDown)
		}
		
		return () => {
			clearTimeout(timerRef.current as number)
			removeEventListener('keydown', onKeyDown)
			setIsMounted(false)
		}
	}, [isOpen, onKeyDown])

	if (!isMounted) {
		return null
	}

	const mods: Mods = {
		[cls.opened]: isOpen,
		[cls.isClosing]: isClosing
	}

	return (
		<Portal>
			<div className={classNames(cls.Modal, mods, [className])}>
				<div className={cls.overlay} onClick={handleClose}>
					<div className={classNames(cls.content, mods, [])} onClick={onClickContent}>
						{children}
						{!hideCross && (
							<Button onClick={handleClose} theme="clear">
								<Icon 
									icon={CrossIcon}
									size='size_s'
									className={cls.cross}
								/>
							</Button>
						)}
					</div>
				</div>
			</div>
		</Portal>
	)
}
