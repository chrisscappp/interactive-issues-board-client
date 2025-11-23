import { ForgetPasswordSearchMode } from '@/feautures/ForgetPassword'
import { ForgetPasswordPage } from '@/pages/ForgetPasswordPage'
import { ISSUES_USER_FORGET_PASSWORD_TOKEN } from '@/shared/consts/localStorageKeys'
import { createFileRoute, redirect } from '@tanstack/react-router'

export type ForgetPasswordPageSearch = {
    mode: ForgetPasswordSearchMode,
    token?: string,
    email?: string
}

export const Route = createFileRoute('/forgetPassword')({
    component: ForgetPasswordPage,
    validateSearch: (search: ForgetPasswordPageSearch): ForgetPasswordPageSearch => {
        return {
            mode: search.mode ?? ForgetPasswordSearchMode.BASE
        }
    },
    beforeLoad: ({ search }) => {
        const { mode, token, email } = search

        if (mode === ForgetPasswordSearchMode.CHANGE) {
            const userToken = localStorage.getItem(ISSUES_USER_FORGET_PASSWORD_TOKEN) ?? ''
            
            if (!userToken || !email) {
                throw redirect({
                    to: '/'
                })
            }

            if (userToken !== token) {
                throw redirect({
                    to: '/'
                })
            } else {
                localStorage.removeItem(ISSUES_USER_FORGET_PASSWORD_TOKEN)
            } // удаляем токен из лс сразу после проверки
        }
    }
})
