import { classNames } from '../../lib/helpers/classNames/classNames'
import cls from './CheckBox.module.scss'
import { Text } from '../Text/Text'
import { memo, type ReactNode } from 'react'
import type { UseFormRegisterReturn } from 'react-hook-form'

export interface CheckboxItem<T> {
	id: string | number,
	content: string,
	value: T
}

interface CheckboxProps<T> {
	className?: string,
	onChange?: (value: CheckboxItem<T>) => void,
	items?: CheckboxItem<T>[],
	activeItems?: CheckboxItem<T>[],
	name: string,
	readonly?: boolean,
	additionalContent?: ReactNode,
	defaultChecked?: boolean,
	error?: string

	// react hook form
	register?: UseFormRegisterReturn
}

export const Checkbox = memo(<T extends string>(props: CheckboxProps<T>) => {

	const {
		className,
		items,
		onChange,
		name,
		activeItems,
		readonly=false,
		additionalContent,
		defaultChecked,
		error,
		register
	} = props

	const handleOnChange = (item: CheckboxItem<T>) => () => {
		onChange?.(item)
	}

	if (register) {
		return (
			<div className={classNames(cls.CheckboxWrap, {}, [className])}>
				{items?.map((item) => {
					return (
						<div 
							className={classNames(cls.wrap, {}, [])}
							key={item.value}
							onClick={handleOnChange?.(item)}
						>
							<input 
								className={cls.checkbox} 
								type="checkbox" 
								value={item.value}
								disabled={readonly}
								{...register}
							/>
							<Text 
								theme={error ? 'error' : 'primary'}
								text={item.content} 
								className={cls.checkboxText}
							/>
							{additionalContent}
						</div>
					)
				})}
			</div>
		)
	}

	return (
		<div className={classNames(cls.CheckboxWrap, {}, [className])}>
			{items?.map((item) => {
				const checked = activeItems?.find((i) => i.id === item.id)
				return (
					<div 
						className={classNames(cls.wrap, {}, [])}
						key={item.value}
						onClick={handleOnChange?.(item)}
					>
						<input 
							className={cls.checkbox} 
							name={name} 
							type="checkbox" 
							value={item.value}
							disabled={readonly}
							checked={defaultChecked || !!checked}
						/>
						<Text 
							theme={error ? 'error' : 'primary'}
							text={item.content} 
							className={cls.checkboxText}
						/>
						{additionalContent}
					</div>
				)
			})}
		</div>
	)
})
