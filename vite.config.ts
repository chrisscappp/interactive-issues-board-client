import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import { tanstackRouter } from '@tanstack/router-vite-plugin'
import { analyzer } from 'vite-bundle-analyzer'
//import { compression } from 'vite-plugin-compression2'

export default defineConfig(async () => ({
	plugins: [
		tanstackRouter({
      		target: 'react',
      		autoCodeSplitting: true,
    	}),
		react(),
		svgr(),
		analyzer({
			analyzerPort: 3001,
			analyzerMode: 'server'
		}),
		//compression()
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
