import { classNames } from '@/shared/lib/helpers/classNames/classNames'
import { memo } from 'react'
import cls from './PageLoader.module.scss'
import { Loader } from '@/shared/UI/Loader'

interface PageLoaderProps {
	className?: string
}

export const PageLoader = memo(({ className }: PageLoaderProps) => {
	return (
		<div className={classNames(cls.PageLoader, {}, [className])}>
			<Loader/>
		</div>
	)
})
