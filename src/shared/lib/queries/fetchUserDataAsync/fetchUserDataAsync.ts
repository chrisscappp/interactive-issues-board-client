import { $api } from '@/shared/api/api'
import type { IUser } from '@/entities/User'
import { AxiosError } from 'axios'
import type { IBaseResponse } from '@/shared/types/api'

export interface FetchUserDataResponse extends IBaseResponse {
	user: IUser
}

export const fetchUserDataAsync = async (userId: string) => {
	try {
		const response = await $api.get<FetchUserDataResponse>(`/getUsers/${userId}`)
		
		if (!response.data) {
			throw new Error('Data is not defined')
		}

		return response.data.user
	} catch (e: unknown) {
		const err = e as AxiosError
		throw new Error(err.message)
	}
}
