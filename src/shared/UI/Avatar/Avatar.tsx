import { classNames } from '@/shared/lib/helpers/classNames/classNames'
import { memo } from 'react'
import cls from './Avatar.module.scss'

type AvatarSize = {
	size_s: 'size_s',
	size_m: 'size_m',
	size_l: 'size_l',
	size_xl: 'size_xl'
}

interface AvatarProps {
	className?: string,
	avatar?: string,
	size?: keyof AvatarSize,
	alt?: string
}

const defSrc = 'https://steamuserimages-a.akamaihd.net/ugc/5112180131487327452/50B407366450351DC0CA8BE714805810DC8EC6B1/?imw=512&amp;imh=512&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true'

export const Avatar = memo((props: AvatarProps) => {
	
	const {
		avatar=defSrc,
		className,
		size='size_m',
		alt='avatar'
	} = props
	
	return (
		<img 
			className={classNames(cls.Avatar, {[cls[size]]: true}, [className])}
			src={avatar} 
			alt={alt}
		/>
	)
})
