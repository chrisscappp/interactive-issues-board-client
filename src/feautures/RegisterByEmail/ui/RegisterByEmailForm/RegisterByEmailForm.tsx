import { classNames } from '@/shared/lib/helpers/classNames/classNames'
import { memo, useCallback } from 'react'
import cls from './RegisterByEmailForm.module.scss'
import { VStack } from '@/shared/UI/Stack'
import { Text } from '@/shared/UI/Text'
import { Input } from '@/shared/UI/Input'
import { Button } from '@/shared/UI/Button'
import { useForm, type SubmitHandler } from 'react-hook-form'
import type { RegisterByEmailFormValues } from '../../lib/types/registerByEmail'
import { Checkbox } from '@/shared/UI/Checkbox'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { registerByEmailAsync } from '../../lib/services/registerByEmailAsync/registerByEmailAsync'
import { QueryKey } from '@/shared/consts/queryKeys'

interface RegisterByEmailFormProps {
	className?: string,
	onSuccess: () => void
}

const RegisterByEmailForm = memo((props: RegisterByEmailFormProps) => {
	
	const {
		className,
		onSuccess
	} = props

	const queryClient = useQueryClient()
	const { register, handleSubmit, formState: { errors }, getValues } = useForm<RegisterByEmailFormValues>()

	const { mutate, isError, isPending, error } = useMutation({
		mutationFn: registerByEmailAsync,
		onSuccess: (data) => {
			onSuccess()
			queryClient.setQueryData([QueryKey.AUTH, QueryKey.USER], data.user)
		}
	})

	const onRegister: SubmitHandler<RegisterByEmailFormValues> = useCallback((data) => {
		const copyData = { ...data }
		delete copyData.isAgree
		delete copyData.repeatPassword
		
		mutate(copyData)
	}, [mutate])
	
	return (
		<form onSubmit={handleSubmit(onRegister)}>
			<VStack className={classNames(cls.AuthByEmailForm, {}, [className])} gap="16">
				<Text
					title="Регистрация"
					weight="weight_bold"
				/>
				<Input
					label="Имя"
					placeholder="Иван"
					register={{...register('name', { required: 'Поле является обязательным' })}}
					error={errors.name?.message}
				/>
				<Input
					label="Фамилия"
					placeholder="Иванов"
					register={{...register('surname', { required: 'Поле является обязательным' })}}
					error={errors.surname?.message}
				/>
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
				<Input
					label="Логин (необязательно)"
					placeholder="login"
					register={{...register('login')}}
				/>
				<Input
					label="Пароль"
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
				<Checkbox
					register={{...register('isAgree', {
						validate: value => value === 'agree' || 'Дайте согласие'
					})}}
					name="confidentional-agree"
					items={[{ id: 1, content: 'Я согласен(а) с политикой конфиденциальности', value: 'agree' }]}
					error={errors.isAgree?.message}
				/>
				{isError && <Text text={error.message} theme="error" />}
				<Button className={cls.btn} type="submit" loading={isPending}>
					Продолжить
				</Button>
			</VStack>
		</form>
	)
})

export default RegisterByEmailForm
