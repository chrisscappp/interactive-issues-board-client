import type { IGeneral } from '@/shared/types'

export type UserRoleType = 'admin' | 'moderator' | 'user'

export interface IUser extends IGeneral {
	id: string | number,
	createdAt: Date,
	updatedAt: Date,
	name: string,
	surname: string,
	avatar?: string,
	login?: string,
	email: string,
	password?: string,
	roles: UserRoleType[]
}
