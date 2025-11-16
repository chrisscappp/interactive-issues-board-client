import { classNames } from '@/shared/lib/helpers/classNames/classNames'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { memo, type ReactNode, Fragment } from 'react'
import cls from './Dropdown.module.scss'
import { Link, type LinkOptions } from '@tanstack/react-router'
import type { NavbarRoutesPath } from '@/shared/config/router/types'
import { Button } from '../Button'

interface DropdownItem {
	disabled?: boolean,
	content?: ReactNode,
	onClick?: () => void,
	href?: NavbarRoutesPath,
	params?: LinkOptions['params'],
	search?: LinkOptions['search']
}

interface DropdownProps {
	className?: string,
	name: string,
	button: ReactNode,
	items: DropdownItem[]
}

export const Dropdown = memo((props: DropdownProps) => {
	
	const {
		className,
		name,
		button,
		items
	} = props
	
	return (
		<Menu as={'div'} className={classNames(cls.Dropdown, {}, [className])}>
      		<MenuButton as={Button} theme="clear" className={cls.triggerBtn}>
				{button}
			</MenuButton>
      		<MenuItems anchor="bottom end" className={cls.menuItems}>
				{items.map((item, index) => {
					const content = (
						({ active }: { active: boolean }) => (
							<button
								type='button'
								className={classNames(cls.MenuItemBtn, {[cls.active]: active}, [index % 2 !== 0 ? cls.even : undefined])}
								onClick={item.onClick}
								disabled={item.disabled}
							>
								{item.content}
							</button>
						)
					)

					if (item.href) {
						return (
							<MenuItem 
								as={Link}
								key={item.href}
								className={cls.link}
								to={item.href}
								//@ts-ignore
								params={item.params}
								//@ts-ignore
								search={item.search}
							>
								{content}
							</MenuItem>
						)
					}

					return (
						<MenuItem
							as={Fragment}
							disabled={item.disabled}
							key={`dropdown-${name}-${index}`}
						>
							{content}
						</MenuItem>
					)
				})}
      		</MenuItems>
    	</Menu>
  	)
})
