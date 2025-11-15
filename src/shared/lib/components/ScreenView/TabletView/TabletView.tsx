import type { ReactNode } from 'react'
import { useScreen } from '../../../../lib/hooks/useScreen/useScreen'

interface TabletViewProps {
	children: ReactNode
}

export const TabletView = ({ children }: TabletViewProps) => {
	const { isTablet } = useScreen()

	if (!isTablet) {
		return null
	}

	return children
}
