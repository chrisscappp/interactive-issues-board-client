import type { ApiMessage } from '../consts/apiMessages'

export interface IGeneral {
	id: string | number,
	createdAt: Date,
	updatedAt: Date
}

export interface IBaseResponse {
	message: ApiMessage
}

export interface IErrorResponseData {
	message: ApiMessage
}
