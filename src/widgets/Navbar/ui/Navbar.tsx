import { memo, useCallback, useState } from 'react'
import cls from './Navbar.module.scss'
import { classNames } from '@/shared/lib/helpers/classNames/classNames'
import { navbarConfig } from '../lib/consts/navbarConfig'
import { Link } from '@tanstack/react-router'
import { HStack } from '@/shared/UI/Stack'
import { Button } from '@/shared/UI/Button'
import { AuthByEmailModal } from '@/feautures/AuthByEmail'
import { RegisterByEmailModal } from '@/feautures/RegisterByEmail'
import { useAuthData } from '@/shared/lib/hooks/useAuthData/useAuthData'

export const Navbar = memo(() => {
	
	const { isAuth, onLogout } = useAuthData()
	const [isOpenAuthModal, setIsOpenAuthModal] = useState(false)
	const [isOpenRegisterModal, setIsOpenRegisterModal] = useState(false)

	const onOpenAuthModal = useCallback(() => {
		setIsOpenAuthModal(true)
	}, [])

	const onCloseAuthModal = useCallback(() => {
		setIsOpenAuthModal(false)
	}, [])

	const onOpenRegisterModal = useCallback(() => {
		setIsOpenRegisterModal(true)
	}, [])

	const onCloseRegisterModal = useCallback(() => {
		setIsOpenRegisterModal(false)
	}, [])

	const defaultButtons = (
		<>
			<Button onClick={onOpenAuthModal} theme="outlineInverted">Войти</Button>
			<Button onClick={onOpenRegisterModal} theme="backgroundInverted">Регистрация</Button>
		</>
	)

	const authButtons = (
		<>
			<Button onClick={onLogout} theme="outlineInverted">Выйти</Button>
		</>
	)

	return (
		<nav className={classNames(cls.Navbar)}>
			<HStack className={cls.panel} gap="32" align="center">
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
				<HStack className={cls.btns} gap="12">
					{isAuth ? authButtons : defaultButtons}
				</HStack>
			</HStack>
			{isOpenAuthModal && (
				<AuthByEmailModal
					isOpen={isOpenAuthModal}
					onClose={onCloseAuthModal}
				/>
			)}
			{isOpenRegisterModal && (
				<RegisterByEmailModal
					isOpen={isOpenRegisterModal}
					onClose={onCloseRegisterModal}
				/>
			)}
		</nav>
	)
})
