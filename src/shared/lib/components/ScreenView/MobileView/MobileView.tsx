import type { ReactNode } from 'react'
import { useScreen } from '../../../../lib/hooks/useScreen/useScreen'

interface MobileViewProps {
	children: ReactNode
}

export const MobileView = ({ children }: MobileViewProps) => {
	const { isMobile } = useScreen()

	if (!isMobile) {
		return null
	}

	return children
}
