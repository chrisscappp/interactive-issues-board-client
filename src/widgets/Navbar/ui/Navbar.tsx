import { memo } from 'react'
import cls from './Navbar.module.scss'
import { classNames } from '@/shared/lib/helpers/classNames/classNames'
import { navbarConfig } from '../lib/consts/navbarConfig'
import { Link } from '@tanstack/react-router'
import { HStack } from '@/shared/UI/Stack'

export const Navbar = memo(() => {
	
	//const isAuth = false

	return (
		<nav className={classNames(cls.Navbar)}>
			<HStack gap="32">
				{Object.entries(navbarConfig).map(([to, title]) => (
					<Link 
						key={to}
						to={to} 
						className={cls.link}
						activeProps={{ className: cls.linkActive }}
					>
						{title}
					</Link>
				))}
			</HStack>
			{/* {!isAuth && (

			)} */}
		</nav>
	)
})
