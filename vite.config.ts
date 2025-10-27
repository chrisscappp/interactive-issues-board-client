import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import { tanstackRouter } from '@tanstack/router-vite-plugin'

export default defineConfig(async () => ({
	plugins: [
		react(),
		tanstackRouter({
      		target: 'react',
      		autoCodeSplitting: true,
    	}),
		svgr()
	],
	resolve: {
		alias: [
			{ find: '@', replacement: '/src' }
		]
	},
	server: {
		port: 3000,
		strictPort: true
	}
}))
