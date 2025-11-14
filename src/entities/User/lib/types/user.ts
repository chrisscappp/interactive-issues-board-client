import type { IGeneral } from '@/shared/types/api'

export type UserRoleType = 'admin' | 'moderator' | 'user'

export interface IUser extends IGeneral {
	name: string,
	surname: string,
	avatar?: string,
	login?: string,
	email: string,
	roles: UserRoleType[]
}
