import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/about')({
	component: AboutRoute,
})

function AboutRoute() {
	return <div>Hello about</div>
}
