import axios from 'axios'
import { ISSUES_USER_ACCESS_TOKEN } from '../consts/localStorageKeys'

const token = localStorage.getItem(ISSUES_USER_ACCESS_TOKEN)

export const $api = axios.create({
	baseURL: import.meta.env.VITE_API_DOMAIN_DEV,
	headers: {
		authorization: token ? `Bearer ${localStorage.getItem(ISSUES_USER_ACCESS_TOKEN)}` : ''
	}
})
