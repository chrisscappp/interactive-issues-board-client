import { MOBILE_MIN_SCREEN_WIDTH, TABLET_MIN_SCREEN_WIDTH } from '../../../consts/screen'

export const useScreen = () => {
	
	const screenWidth = window.screen.width
	const screenHeight = window.screen.height

	console.log('init')

	return {
		screenHeight,
		screenWidth,
		isDesktop: screenWidth > TABLET_MIN_SCREEN_WIDTH,
		isTablet: screenWidth >= MOBILE_MIN_SCREEN_WIDTH && screenWidth < TABLET_MIN_SCREEN_WIDTH,
		isMobile: screenWidth <= MOBILE_MIN_SCREEN_WIDTH
	}
}
