import { BoardsPage } from '@/pages/BoardsPage'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_authenticated/boards')({
    component: BoardsPage
})
