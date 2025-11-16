import { ProfilePage } from '@/pages/ProfilePage'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_authenticated/profile/$profileid')({
    component: ProfilePage
})
