import { $api } from '@/shared/api/api'
import type { IUser } from '@/entities/User'
import { ISSUES_USER_ACCESS_TOKEN, ISSUES_USER_REFRESH_TOKEN, ISSUES_USER_ID } from '@/shared/consts/localStorageKeys'
import { refreshAuthToken } from '@/shared/api/refreshAuthToken'
import axios, { AxiosError } from 'axios'
import { ApiMessage } from '@/shared/consts/apiMessages'
import type { AuthByEmailFormValues } from '@/feautures/AuthByEmail'
import type { IBaseResponse } from '@/shared/types/api'

export interface AuthByEmailResponse extends IBaseResponse {
	accessToken: string,
	refreshToken: string,
	user: IUser
}

export const authByEmailAsync = async (data: AuthByEmailFormValues) => {
	try {
		const response = await $api.post<AuthByEmailResponse>('/login', data)
		
		if (!response.data) {
			throw new Error('Data is not defined')
		}
			
		localStorage.setItem(ISSUES_USER_ACCESS_TOKEN, response.data.accessToken)
		localStorage.setItem(ISSUES_USER_REFRESH_TOKEN, response.data.refreshToken)
		localStorage.setItem(ISSUES_USER_ID, String(response.data.user.id))

		$api.interceptors.request.use((config) => {
			config.headers.Authorization = `Bearer ${response.data.accessToken}`
			return config
		})

		$api.interceptors.response.use(
			response => response,
			async error => {
				const originalRequest = error.config

				if (error.response?.status === 403 && 
				error.response?.data?.message === ApiMessage.INVALID_TOKEN &&
				!originalRequest._retry) {
					originalRequest._retry = true

				try {
					const newToken = await refreshAuthToken()
					originalRequest.headers.Authorization = `Bearer ${newToken}`
					return axios(originalRequest)
				} catch (refreshError) {
					return Promise.reject(refreshError)
				}
			}

			return Promise.reject(error)
		})

		return response.data
	} catch (e: unknown) {
		const err = e as AxiosError
		throw new Error(err.message)
	}
}
