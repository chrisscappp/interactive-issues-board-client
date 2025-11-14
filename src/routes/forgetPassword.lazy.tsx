import { ForgetPasswordPage } from '@/pages/ForgetPasswordPage'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/forgetPassword')({
  component: ForgetPasswordPage
})
