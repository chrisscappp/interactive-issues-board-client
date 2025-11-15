import type { ReactNode } from 'react'
import { useScreen } from '../../hooks/useScreen/useScreen'

interface RenderComponentByScreenProps {
	DesktopView?: ReactNode,
	TabletView?: ReactNode,
	MobileView?: ReactNode
}

export const RenderComponentByScreen = ({ DesktopView, MobileView, TabletView }: RenderComponentByScreenProps) => {
	const { isDesktop, isTablet, isMobile } = useScreen()

	if (isDesktop && DesktopView) {
		return DesktopView
	}

	if (isTablet && TabletView) {
		return TabletView
	}

	if (isMobile && MobileView) {
		return MobileView
	}

	return DesktopView
}
