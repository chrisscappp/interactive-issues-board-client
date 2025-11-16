import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated')({
    beforeLoad: ({ context }) => {
        const { isAuth } = context.auth

        if (!isAuth) {
            throw redirect({
                to: '/'
            })
        }
    }
})
