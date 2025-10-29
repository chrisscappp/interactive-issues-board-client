import { memo } from 'react'
import { classNames } from '../../lib/helpers/classNames/classNames'
import cls from './Text.module.scss'

type TextTheme = {
	primary: 'primary',
	secondary: 'secondary',
	blue: 'blue',
	invertedPrimary: 'invertedPrimary',
	invertedSecondary: 'invertedSecondary',
	error: 'error'
}

type TextAlign = {
	right: 'right',
	center: 'center',
	left: 'left'
}

type TextSize = {
	size_s: 'size_s',
	size_m: 'size_m',
	size_l: 'size_l',
	size_xl: 'size_xl',
}

type TextWeight = {
	weight_normal: 'weight_normal',
	weight_bold: 'weight_bold'
}

interface TextProps {
	className?: string,
	title?: string,
	text?: string,
	theme?: keyof TextTheme,
	align?: keyof TextAlign,
	size?: keyof TextSize,
	weight?: keyof TextWeight,
	textPre?: boolean
}

export const Text = memo((props: TextProps) => {
	
	const {
		className,
		title,
		text,
		theme='primary',
		align='left',
		size='size_m',
		weight='weight_normal',
		textPre=false
	} = props

	const mods = {
		[cls[theme]]: true,
		[cls[align]]: align,
		[cls[size]]: true,
		[cls[weight]]: true,
		[cls.textPre]: textPre
	}
	
	return (
		<div className={classNames(cls.Text, mods, [className])}>
			{title && (
				<h1 className={cls.title}>
					{ title }
				</h1>
			)}
			{text && (
				<p className={cls.text}>
					{ text }
				</p>
			)}
		</div>
	)
})
