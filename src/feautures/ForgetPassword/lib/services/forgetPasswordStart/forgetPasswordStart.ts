import { $api } from '@/shared/api/api'
import { ISSUES_USER_FORGET_PASSWORD_TOKEN } from '@/shared/consts/localStorageKeys'
import { AxiosError } from 'axios'
import { apiMessages } from '@/shared/consts/apiMessages'
import type { IBaseResponse, IErrorResponseData } from '@/shared/types/api'
import type { ForgetPasswordBaseFormValues } from '../../types/forgetPassword'

export interface ForgetPasswordStartData extends ForgetPasswordBaseFormValues {
	link: string
}

export interface ForgetPasswordStartResponse extends IBaseResponse {
	email: string,
	token: string
}

export const forgetPasswordStartAsync = async (data: ForgetPasswordStartData) => {
	try {
		const response = await $api.post<ForgetPasswordStartResponse>('/forgetPassword/start', data)
		
		if (!response.data) {
			throw new Error(apiMessages['empty_data'])
		}
		
		localStorage.setItem(ISSUES_USER_FORGET_PASSWORD_TOKEN, response.data.token)

		return response.data
	} catch (e: unknown) {
		const err = e as AxiosError<IErrorResponseData>
		if (err.response?.data.message) {
			throw new Error(apiMessages[err.response.data.message])
		}
		throw new Error(apiMessages['server_error'])
	}
}
