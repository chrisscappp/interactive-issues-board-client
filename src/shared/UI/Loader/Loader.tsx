import { classNames, type Mods } from '@/shared/lib/helpers/classNames/classNames'
import { memo } from 'react'
import './Loader.scss'

export type LoaderTheme = 'blue' | 'white'

interface LoaderProps {
	className?: string,
	theme?: LoaderTheme
}

export const Loader = memo(({ className, theme='blue' }: LoaderProps) => {
	
	const mods: Mods = {
		[`ui-loader__${theme}`]: true
	}

	return (
		<div className={classNames('ui-loader', mods, [className])}></div>
	)
})
