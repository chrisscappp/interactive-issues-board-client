import { $api } from '@/shared/api/api'
import type { IUser } from '@/entities/User'
import { AxiosError } from 'axios'
import type { IBaseResponse, IErrorResponseData } from '@/shared/types/api'
import { apiMessages } from '@/shared/consts/apiMessages'

export interface FetchUserDataResponse extends IBaseResponse {
	user: IUser
}

export const fetchUserDataAsync = async (userId: string) => {
	try {
		const response = await $api.get<FetchUserDataResponse>(`/getUsers/${userId}`)
		
		if (!response.data) {
			throw new Error(apiMessages['empty_data'])
		}

		return response.data.user
	} catch (e: unknown) {
		const err = e as AxiosError<IErrorResponseData>
		if (err.response?.data.message) {
			throw new Error(apiMessages[err.response.data.message])
		}
		throw new Error(apiMessages['server_error'])
	}
}
