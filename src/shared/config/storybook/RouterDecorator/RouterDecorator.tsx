import { routeTree } from '@/routeTree.gen'
import type { Decorator } from '@storybook/react'
import { createMemoryHistory, createRouter, RouterProvider } from '@tanstack/react-router'

const memoryHistory = createMemoryHistory({ initialEntries: ['/'] })
const router = createRouter({ routeTree, history: memoryHistory })

export const RouterDecorator: Decorator = (Story) => {
	return (
		<RouterProvider router={router} defaultComponent={() => Story()} />
	)
}
