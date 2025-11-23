import { classNames } from '@/shared/lib/helpers/classNames/classNames'
import { memo, useCallback } from 'react'
import cls from './AuthByEmailForm.module.scss'
import { VStack } from '@/shared/UI/Stack'
import { Text } from '@/shared/UI/Text'
import { Input } from '@/shared/UI/Input'
import { Button } from '@/shared/UI/Button'
import { Link } from '@tanstack/react-router'
import { useForm, type SubmitHandler } from 'react-hook-form'
import type { AuthByEmailFormValues } from '../../lib/types/authByEmail'
import { useAuthData } from '@/shared/lib/hooks/useAuthData/useAuthData'

interface AuthByEmailFormProps {
	className?: string,
	onSuccess: () => void
}

const AuthByEmailForm = memo((props: AuthByEmailFormProps) => {
	
	const {
		className,
		onSuccess
	} = props

	const { register, handleSubmit, formState: { errors } } = useForm<AuthByEmailFormValues>()
	const { loginMutation: { mutateAsync, isPending, isError, error } } = useAuthData()

	const onAuth: SubmitHandler<AuthByEmailFormValues> = useCallback(async (data) => {
		const res = await mutateAsync(data)
		if (res.user) {
			onSuccess()
		}
	}, [mutateAsync, onSuccess])
	
	return (
		<form onSubmit={handleSubmit(onAuth)}>
			<VStack className={classNames(cls.AuthByEmailForm, {}, [className])} gap="16">
				<Text
					title="Авторизация"
					weight="weight_bold"
				/>
				<Input
					label="Email/Login"
					placeholder="example@mail.ru"
					register={{...register('login', { required: 'Поле является обязательным' })}}
					error={errors.login?.message}
				/>
				<VStack gap='8' max>
					<Input
						label="Пароль"
						placeholder="пароль"
						type="password"
						register={{...register('password', { required: 'Поле является обязательным' })}}
						error={errors.password?.message}
					/>
					<Link
						className={cls.forgetPassword} 
						to='/forgetPassword'
						search={{ mode: 'base' }}
						target="_blank"
					>
						<Text
							theme="blue"
							size="size_s"
							text="забыли пароль?"
						/>
					</Link>
				</VStack>
				{isError && <Text text={error.message} theme="error"/>}
				<Button loading={isPending} type="submit">
					Войти
				</Button>
			</VStack>
		</form>
	)
})

export default AuthByEmailForm
