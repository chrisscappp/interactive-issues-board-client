import { $api } from '@/shared/api/api'
import type { RegisterByEmailFormValues } from '../../types/registerByEmail'
import type { IUser } from '@/entities/User'
import { ISSUES_USER_ACCESS_TOKEN, ISSUES_USER_REFRESH_TOKEN, ISSUES_USER_ID } from '@/shared/consts/localStorageKeys'
import { refreshAuthToken } from '@/shared/api/refreshAuthToken'
import axios, { AxiosError } from 'axios'
import { ApiMessage, apiMessages } from '@/shared/consts/apiMessages'
import type { IBaseResponse, IErrorResponseData } from '@/shared/types/api'

type RegisterByEmailData = Omit<RegisterByEmailFormValues, 'repeatPassword' | 'isAgree'>

export interface RegisterByEmailResponse extends IBaseResponse {
	message: string,
	accessToken: string,
	refreshToken: string,
	user: IUser
}

export const registerByEmailAsync = async (data: RegisterByEmailData) => {
	try {
		const response = await $api.post<RegisterByEmailResponse>('/register', data)
		
		if (!response.data) {
			throw new Error(apiMessages['empty_data'])
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
		const err = e as AxiosError<IErrorResponseData>
		if (err.response?.data.message) {
			throw new Error(apiMessages[err.response.data.message])
		}
		throw new Error(apiMessages['server_error'])
	}
}
