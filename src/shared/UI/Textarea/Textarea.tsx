import { 
	type ChangeEvent, 
	type CSSProperties, 
	type FocusEvent, 
	type TextareaHTMLAttributes, 
	memo,
	useEffect, 
	useMemo, 
	useRef, 
	useState
} from 'react'
import cls from './Textarea.module.scss'
import { classNames, type Mods } from '../../lib/helpers/classNames/classNames'
import type { UseFormRegisterReturn } from 'react-hook-form'
import { HStack, VStack } from '../Stack'
import { Text } from '../Text/Text'

type TextAreaProps = Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'onChange' | 'value' | 'readOnly'>

interface AreaProps extends TextAreaProps {
	className?: string,
	value?: string,
	placeholder?: string,
	type?: string,
	onChange?: (value: string) => void,
	onBlur?: (e: FocusEvent<HTMLTextAreaElement>) => void,
	readonly?: boolean,
	autoFocus?: boolean,
	height?: number,
	width?: number,
	label?: string,

	// react hook form
	error?: string,
	register?: UseFormRegisterReturn
}

export const Textarea = memo((props: AreaProps) => {
	
	const {
		className,
		value,
		readonly,
		onChange,
		onBlur,
		placeholder='Введите значение',
		autoFocus,
		height,
		width,
		label,
		error,
		register,
		...otherProps
	} = props

	const { 
		onBlur: registerOnBlur,
		onChange: registerOnChange,
		...restRegister
	} = register || {}

	const [isBlur, setIsBlur] = useState(false)
	const ref = useRef<HTMLTextAreaElement>(null)
	
	useEffect(() => {
		if (autoFocus) {
			ref.current?.focus()
		}
	}, [autoFocus])

	const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
		onChange?.(e.target.value)
		registerOnChange?.(e)
	}

	const onFocus = () => {
		if (!readonly) setIsBlur(true)
	}

	const onBlurDefault = (e: FocusEvent<HTMLTextAreaElement>) => {
		setIsBlur(false)
		onBlur?.(e)
		registerOnBlur?.(e)
	}

	const styles = useMemo<CSSProperties>(() => {
		return {
			height: height || 140,
			width: width || '100%'
		}
	}, [height, width])

	const mods: Mods = {
		[cls.readonly]: readonly,
		[cls.blur]: isBlur
	}
	
	return (
		<VStack className={classNames(cls.wrap, {}, [className])} gap="8" max>
			{(label || error) && (
				<HStack gap="12" align="center">
					{label && <Text text={label} />}
					{error && <Text text={error} theme="error" size="size_s" />}
				</HStack>
			)}
			<textarea 
				ref={ref}
				className={classNames(cls.TextArea, mods, [className])}
				value={value}
				onFocus={onFocus}
				onBlur={onBlurDefault}
				onChange={onChangeHandler}
				readOnly={readonly}
				placeholder={placeholder || 'Текст'}
				autoFocus={autoFocus}
				style={styles}
				{...restRegister}
        		{...otherProps}
			></textarea>
		</VStack>
	)
})
