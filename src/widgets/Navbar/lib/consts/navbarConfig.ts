import type { NavbarRoutesPath } from '../types/navbar'

export const navbarConfig: OptionalRecord<NavbarRoutesPath, string> = {
	// @ts-ignore
	'/': 'Главная',
	'/about': 'О нас'
}
