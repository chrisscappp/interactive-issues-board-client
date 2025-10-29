import { classNames, type Mods } from '../../lib/helpers/classNames/classNames'
import cls from './Card.module.scss'
import { memo, type ReactNode } from 'react'

type PaddingSizeType = 's' | 'm' | 'l' | 'xl'
const paddingSize: Record<PaddingSizeType, string> = {
	's': cls.paddingS,
	'm': cls.paddingM,
	'l': cls.paddingL,
	'xl': cls.paddingXL
}

interface CardProps {
	className?: string,
	isHover?: boolean,
	showBorder?: boolean,
	padding?: PaddingSizeType,
	children: ReactNode
}

export const Card = memo((props: CardProps) => {
	const {
		className,
		isHover,
		showBorder,
		padding = 'm',
		children
	} = props

	const mods: Mods = {
		[cls.hover]: isHover,
		[cls.showBorder]: showBorder
	}
	
	return (
		<div className={classNames(cls.Card, mods, [className])}>
			<div className={classNames(cls.content, {}, [paddingSize[padding]])}>
				{children}
			</div>
		</div>
	)
})
