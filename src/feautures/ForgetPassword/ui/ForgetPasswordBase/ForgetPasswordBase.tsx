import { classNames } from '@/shared/lib/helpers/classNames/classNames'
import { Card } from '@/shared/UI/Card'
import { VStack } from '@/shared/UI/Stack'
import { memo, useCallback, useState } from 'react'
import cls from './ForgetPasswordBase.module.scss'
import { Text } from '@/shared/UI/Text'
import { Input } from '@/shared/UI/Input'
import { Textarea } from '@/shared/UI/Textarea'
import { Button } from '@/shared/UI/Button'
import type { ForgetPasswordBaseFormValues } from '../../lib/types/forgetPassword'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import { forgetPasswordStartAsync } from '../../lib/services/forgetPasswordStart/forgetPasswordStart'
import { ForgetPasswordSearchMode } from '../../lib/consts/forgetPassword'

interface ForgetPasswordBaseProps {
	className?: string
}

export const ForgetPasswordBase = memo((props: ForgetPasswordBaseProps) => {
	
	const {
		className
	} = props

	const { register, handleSubmit, formState: { errors }, getValues } = useForm<ForgetPasswordBaseFormValues>()
	const { mutate, isError, isPending, error } = useMutation({
		mutationFn: forgetPasswordStartAsync,
		onSuccess: () => {
			setIsForgetStart(true)
		}
	})
	const [isForgetStart, setIsForgetStart] = useState(false)

	const onForgetPassword: SubmitHandler<ForgetPasswordBaseFormValues> = useCallback((data) => {
		mutate({ ...data, link: `${import.meta.env.VITE_APP_DOMAIN_DEV}/forgetPassword?mode=${ForgetPasswordSearchMode.CHANGE}` })
	}, [mutate])

	if (isForgetStart) {
		return (
			<Card className={classNames(cls.ForgetPasswordBase, {}, [className])} showBorder>
				<VStack gap="16" max>
					<Text title="Забыли пароль?" weight="weight_bold"/>
					<Text 
						text={`На почту ${getValues('email')} было отправлено письмо с подтверждением о смене пароля.\n\nЕсли вы не увидели письмо, посмотрите в папке "Спам" или "Рассылки"`} 
						textPre
					/>
				</VStack>
			</Card>
		)
	}

	return (
		<Card className={classNames(cls.ForgetPassword, {}, [className])} showBorder>
			<form onSubmit={handleSubmit(onForgetPassword)}>
				<VStack gap="16" max>
					<Text title="Забыли пароль?" weight="weight_bold"/>
					<Input 
						label="Email"
						placeholder="example@mail.ru"
						register={{...register('email', { 
							required: 'Поле является обязательным',
							pattern: {
								value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
								message: 'Некорректный email'
							}
						})}}
						error={errors.email?.message}
					/>
					<Textarea
						label="Комментарий (при желании)"
						placeholder="Опишите проблему"
						register={{...register('comment')}}
					/>
					{isError && <Text text={error.message} theme="error" />}
					<Button className={cls.btn} type="submit" loading={isPending}>
						Отправить форму
					</Button>
				</VStack>
			</form>
		</Card>
	)
})
