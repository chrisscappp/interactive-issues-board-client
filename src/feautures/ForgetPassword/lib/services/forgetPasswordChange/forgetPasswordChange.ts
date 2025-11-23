import { $api } from '@/shared/api/api'
import { AxiosError } from 'axios'
import { apiMessages } from '@/shared/consts/apiMessages'
import type { IBaseResponse, IErrorResponseData } from '@/shared/types/api'

export interface ForgetPasswordChangeData {
	email: string,
	password: string
}

export interface ForgetPasswordChangeResponse extends IBaseResponse {
	email: string,
	name: string
}

export const forgetPasswordChangeAsync = async (data: ForgetPasswordChangeData) => {
	try {
		const response = await $api.post<ForgetPasswordChangeResponse>('/forgetPassword/change', data)
		
		if (!response.data) {
			throw new Error(apiMessages['empty_data'])
		}

		return response.data
	} catch (e: unknown) {
		const err = e as AxiosError<IErrorResponseData>
		if (err.response?.data.message) {
			throw new Error(apiMessages[err.response.data.message])
		}
		throw new Error(apiMessages['server_error'])
	}
}
