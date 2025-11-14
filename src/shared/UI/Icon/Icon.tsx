import { classNames, type Mods } from '@/shared/lib/helpers/classNames/classNames'
import { memo, type CSSProperties } from 'react'
import cls from './Icon.module.scss'

type IconSize = {
	size_s: 'size_s',
	size_m: 'size_m',
	size_l: 'size_l',
	size_xl: 'size_xl'
}

interface IconProps {
	className?: string,
	icon: string,
	size?: keyof IconSize,
	fill?: string
}

export const Icon = memo((props: IconProps) => {
	
	const {
		className,
		icon,
		size='size_m',
		fill='black'
	} = props

	const styles: CSSProperties = {
		fill
	}

	const mods: Mods = {
		[cls[size]]: true
	}
	
	return (
		<img 
			className={classNames(cls.Icon, mods, [className])}
			src={icon} 
			alt="icon"
			style={styles}
		/>
	)
})
