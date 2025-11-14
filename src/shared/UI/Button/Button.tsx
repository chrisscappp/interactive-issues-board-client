import { classNames, type Mods } from '@/shared/lib/helpers/classNames/classNames'
import cls from './Button.module.scss'
import { memo, type ButtonHTMLAttributes, type ReactNode } from 'react'
import { Loader, type LoaderTheme } from '../Loader'

type ButtonTheme = {
	background: 'background',
	backgroundInverted: 'backgroundInverted',
	outline: 'outline',
	outlineInverted: 'outlineInverted',
	clear: 'clear',
	approve: 'approve',
	approveOutline: 'approveOutline'
	error: 'error',
	errorOutline: 'errorOutline'
}

type ButtonSize = {
	size_s: 'size_s',
	size_m: 'size_m',
	size_ml:  'size_ml',
	size_l: 'size_l',
	size_xl: 'size_xl'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string,
	theme?: keyof ButtonTheme,
	size?: keyof ButtonSize,
	disabled?: boolean,
	loading?: boolean,
	loaderTheme?: LoaderTheme,
	children: ReactNode
}

export const Button = memo((props: ButtonProps) => {
	
	const {
		children,
		className,
		disabled,
		loading,
		size='size_m',
		theme='background',
		loaderTheme='white',
		...otherProps
	} = props

	const mods: Mods = {
		[cls[theme]]: true,
		[cls[size]]: true,
		[cls.disabled]: disabled,
		[cls.loading]: loading
	}
	
	return (
		<button className={classNames(cls.Button, mods, [className])} {...otherProps}>
			{loading ? <Loader theme={loaderTheme}/> : children}
		</button>
	)
})
