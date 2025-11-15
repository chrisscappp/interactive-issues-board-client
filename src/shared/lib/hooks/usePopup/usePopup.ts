import { useCallback, useEffect, useRef, useState } from 'react'

interface UsePopupProps {
	onClose?: () => void,
	isOpen?: boolean,
	animationDelay?: number
}

export const usePopup = ({ isOpen, animationDelay, onClose }: UsePopupProps) => {
	const [isClosing, setIsClosing] = useState<boolean>()
	const [isMounted, setIsMounted] = useState<boolean>()
	const timerRef = useRef(0)

	useEffect(() => {
		if (isOpen) {
			setIsMounted(true)
		}
	}, [isOpen])

	const closePopup = useCallback(() => {
		if (!onClose) return
		setIsClosing(true)
		timerRef.current = (setTimeout(() => {
			onClose()
			setIsClosing(false)
			setIsMounted(false)
		}, animationDelay)) as unknown as number
	}, [animationDelay, onClose])

	const onKeyDown = useCallback((e: KeyboardEvent) => {
		if (e.key === 'Escape') {
			closePopup()
		}
	}, [closePopup])

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

	return {
		isClosing,
		isMounted,
		closePopup
	}
}
