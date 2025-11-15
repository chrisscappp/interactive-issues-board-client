import type { ReactNode } from 'react'
import { useScreen } from '../../../../lib/hooks/useScreen/useScreen'

interface BrowserViewProps {
	children: ReactNode
}

export const BrowserView = ({ children }: BrowserViewProps) => {
	const { isDesktop } = useScreen()

	if (!isDesktop) {
		return null
	}

	return children
}
