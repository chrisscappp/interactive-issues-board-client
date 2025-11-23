import { classNames } from '@/shared/lib/helpers/classNames/classNames'
import { Card } from '@/shared/UI/Card'
import { VStack } from '@/shared/UI/Stack'
import { memo, useCallback, useState } from 'react'
import cls from './ForgetPasswordChange.module.scss'
import { Text } from '@/shared/UI/Text'
import { Input } from '@/shared/UI/Input'
import { Button } from '@/shared/UI/Button'
import type { ForgetPasswordChangeFormValues } from '../../lib/types/forgetPassword'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { useNavigate, useSearch } from '@tanstack/react-router'
import { useMutation } from '@tanstack/react-query'
import { forgetPasswordChangeAsync } from '../../lib/services/forgetPasswordChange/forgetPasswordChange'

interface ForgetPasswordChangeProps {
	className?: string
}

export const ForgetPasswordChange = memo((props: ForgetPasswordChangeProps) => {
	
	const {
		className
	} = props

	const navigate = useNavigate()
	const { email } = useSearch({ from: '/forgetPassword' })
	const { register, handleSubmit, formState: { errors }, getValues } = useForm<ForgetPasswordChangeFormValues>()
	
	const { data, mutate, isError, isPending, error } = useMutation({
		mutationFn: forgetPasswordChangeAsync,
		onSuccess: () => {
			setIsForgetChange(true)
		}
	})

	const [isForgetChange, setIsForgetChange] = useState(false)

	const onChangePassword: SubmitHandler<ForgetPasswordChangeFormValues> = useCallback((data) => {
		if (email) {
			mutate({
				email,
				password: data.password
			})
		}
	}, [email, mutate])

	if (isForgetChange) {
		return (
			<Card className={classNames(cls.ForgetPassword, {}, [className])} showBorder>
				<VStack gap="16" max>
					<Text title="Восстановление пароля" weight="weight_bold"/>
					<Text 
						text={`${data?.name}, пароль успешно восстановлен!`}
						textPre
					/>
					<Button onClick={() => navigate({ to: '/' })}>
						На главную
					</Button>
				</VStack>
			</Card>
		)
	}

	return (
		<Card className={classNames(cls.ForgetPassword, {}, [className])} showBorder>
			<form onSubmit={handleSubmit(onChangePassword)}>
				<VStack gap="16" max>
					<Text title="Восстановление пароля" weight="weight_bold"/>
					<Input
						label="Новый пароль"
						placeholder="пароль"
						register={{...register('password', { required: 'Поле является обязательным' })}}
						error={errors.password?.message}
					/>
					<Input
						label="Повторите пароль"
						placeholder="пароль"
						register={{...register('repeatPassword', { 
							required: 'Поле является обязательным',
							validate: value => value === getValues('password') || 'Пароли не совпадают'
						})}}
						error={errors.repeatPassword?.message}
					/>
					{isError && <Text text={error.message} theme="error" />}
					<Button className={cls.btn} type="submit" loading={isPending}>
						Сохранить
					</Button>
				</VStack>
			</form>
		</Card>
	)
})
